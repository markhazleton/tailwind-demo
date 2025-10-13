#!/usr/bin/env node

/**
 * Local Performance Testing Script
 * Run Lighthouse CI locally for development testing
 */

import { exec } from 'child_process';
import fs from 'fs/promises';
import path from 'path';
import { promisify } from 'util';

const execAsync = promisify(exec);

const LIGHTHOUSE_CONFIG = {
  urls: [
    'http://localhost:4173/',
    'http://localhost:4173/dashboard',
    'http://localhost:4173/design-system',
    'http://localhost:4173/demos',
  ],
  settings: {
    onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'],
    formFactor: 'desktop',
    throttling: {
      rttMs: 40,
      throughputKbps: 10240,
      cpuSlowdownMultiplier: 1,
    },
  },
};

class PerformanceTester {
  constructor() {
    this.resultsDir = './.lighthouse-local';
  }

  async init() {
    console.log('🚀 Starting Local Performance Testing...\n');

    // Create results directory
    try {
      await fs.mkdir(this.resultsDir, { recursive: true });
    } catch (error) {
      // Directory might already exist
    }
  }

  async buildProject() {
    console.log('📦 Building project...');
    try {
      const { stdout, stderr } = await execAsync('npm run build');
      console.log('✅ Build completed successfully\n');
      if (stderr && !stderr.includes('warning')) {
        console.warn('Build warnings:', stderr);
      }
    } catch (error) {
      console.error('❌ Build failed:', error.message);
      process.exit(1);
    }
  }

  async startServer() {
    console.log('🌐 Starting preview server...');

    return new Promise((resolve, reject) => {
      const server = exec('npm run preview');

      let serverReady = false;
      const timeout = setTimeout(() => {
        if (!serverReady) {
          server.kill();
          reject(new Error('Server failed to start within timeout'));
        }
      }, 30000);

      server.stdout?.on('data', data => {
        const output = data.toString();
        if (output.includes('Local:') && output.includes('http://localhost:4173')) {
          serverReady = true;
          clearTimeout(timeout);
          console.log('✅ Preview server is ready\n');
          resolve(server);
        }
      });

      server.stderr?.on('data', data => {
        console.error('Server error:', data.toString());
      });

      server.on('error', error => {
        clearTimeout(timeout);
        reject(error);
      });
    });
  }

  async runLighthouseTests() {
    console.log('🔍 Running Lighthouse tests...\n');

    const results = [];

    for (const url of LIGHTHOUSE_CONFIG.urls) {
      console.log(`Testing: ${url}`);

      try {
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
        const outputPath = path.join(
          this.resultsDir,
          `report-${url.split('/').pop() || 'home'}-${timestamp}.json`
        );

        const lighthouseCmd = [
          'npx lighthouse',
          `"${url}"`,
          '--output=json',
          `--output-path="${outputPath}"`,
          '--chrome-flags="--headless --no-sandbox"',
          '--form-factor=desktop',
          '--throttling-method=devtools',
          '--only-categories=performance,accessibility,best-practices,seo',
          '--quiet',
        ].join(' ');

        const { stdout, stderr } = await execAsync(lighthouseCmd);

        // Read the generated report
        const reportData = JSON.parse(await fs.readFile(outputPath, 'utf8'));
        results.push({
          url,
          report: reportData,
          path: outputPath,
        });

        // Display quick results
        const scores = reportData.categories;
        console.log(`  Performance: ${Math.round(scores.performance.score * 100)}%`);
        console.log(`  Accessibility: ${Math.round(scores.accessibility.score * 100)}%`);
        console.log(`  Best Practices: ${Math.round(scores['best-practices'].score * 100)}%`);
        console.log(`  SEO: ${Math.round(scores.seo.score * 100)}%`);
        console.log('');
      } catch (error) {
        console.error(`❌ Failed to test ${url}:`, error.message);
      }
    }

    return results;
  }

  async generateSummaryReport(results) {
    console.log('📊 Generating summary report...\n');

    const summary = {
      testDate: new Date().toISOString(),
      totalUrls: results.length,
      averageScores: {
        performance: 0,
        accessibility: 0,
        bestPractices: 0,
        seo: 0,
      },
      urlResults: [],
      recommendations: [],
    };

    // Calculate averages and collect individual results
    results.forEach(result => {
      const scores = result.report.categories;
      const urlResult = {
        url: result.url,
        scores: {
          performance: Math.round(scores.performance.score * 100),
          accessibility: Math.round(scores.accessibility.score * 100),
          bestPractices: Math.round(scores['best-practices'].score * 100),
          seo: Math.round(scores.seo.score * 100),
        },
        metrics: {
          firstContentfulPaint: result.report.audits['first-contentful-paint']?.numericValue,
          largestContentfulPaint: result.report.audits['largest-contentful-paint']?.numericValue,
          speedIndex: result.report.audits['speed-index']?.numericValue,
          cumulativeLayoutShift: result.report.audits['cumulative-layout-shift']?.numericValue,
          totalBlockingTime: result.report.audits['total-blocking-time']?.numericValue,
        },
      };

      summary.urlResults.push(urlResult);

      // Add to averages
      summary.averageScores.performance += urlResult.scores.performance;
      summary.averageScores.accessibility += urlResult.scores.accessibility;
      summary.averageScores.bestPractices += urlResult.scores.bestPractices;
      summary.averageScores.seo += urlResult.scores.seo;
    });

    // Calculate final averages
    const count = results.length;
    summary.averageScores.performance = Math.round(summary.averageScores.performance / count);
    summary.averageScores.accessibility = Math.round(summary.averageScores.accessibility / count);
    summary.averageScores.bestPractices = Math.round(summary.averageScores.bestPractices / count);
    summary.averageScores.seo = Math.round(summary.averageScores.seo / count);

    // Generate recommendations
    if (summary.averageScores.performance < 85) {
      summary.recommendations.push(
        'Consider optimizing bundle size and implementing more aggressive code splitting'
      );
    }
    if (summary.averageScores.accessibility < 95) {
      summary.recommendations.push('Review accessibility issues and ensure proper ARIA attributes');
    }

    // Save summary report
    const summaryPath = path.join(
      this.resultsDir,
      `summary-${new Date().toISOString().replace(/[:.]/g, '-')}.json`
    );
    await fs.writeFile(summaryPath, JSON.stringify(summary, null, 2));

    return { summary, summaryPath };
  }

  displayResults(summary) {
    console.log('📈 PERFORMANCE TEST SUMMARY');
    console.log('==========================\n');

    console.log(`📅 Test Date: ${new Date(summary.testDate).toLocaleString()}`);
    console.log(`🔗 URLs Tested: ${summary.totalUrls}\n`);

    console.log('📊 Average Scores:');
    console.log(
      `  Performance: ${summary.averageScores.performance}% ${this.getScoreEmoji(summary.averageScores.performance)}`
    );
    console.log(
      `  Accessibility: ${summary.averageScores.accessibility}% ${this.getScoreEmoji(summary.averageScores.accessibility)}`
    );
    console.log(
      `  Best Practices: ${summary.averageScores.bestPractices}% ${this.getScoreEmoji(summary.averageScores.bestPractices)}`
    );
    console.log(
      `  SEO: ${summary.averageScores.seo}% ${this.getScoreEmoji(summary.averageScores.seo)}\n`
    );

    console.log('🔍 Individual URL Results:');
    summary.urlResults.forEach(result => {
      console.log(`\n  ${result.url}`);
      console.log(
        `    Performance: ${result.scores.performance}% ${this.getScoreEmoji(result.scores.performance)}`
      );
      console.log(
        `    Accessibility: ${result.scores.accessibility}% ${this.getScoreEmoji(result.scores.accessibility)}`
      );
      console.log(
        `    Best Practices: ${result.scores.bestPractices}% ${this.getScoreEmoji(result.scores.bestPractices)}`
      );
      console.log(`    SEO: ${result.scores.seo}% ${this.getScoreEmoji(result.scores.seo)}`);

      if (result.metrics.firstContentfulPaint) {
        console.log(`    FCP: ${Math.round(result.metrics.firstContentfulPaint)}ms`);
      }
      if (result.metrics.largestContentfulPaint) {
        console.log(`    LCP: ${Math.round(result.metrics.largestContentfulPaint)}ms`);
      }
      if (result.metrics.cumulativeLayoutShift) {
        console.log(`    CLS: ${result.metrics.cumulativeLayoutShift.toFixed(3)}`);
      }
    });

    if (summary.recommendations.length > 0) {
      console.log('\n💡 Recommendations:');
      summary.recommendations.forEach(rec => {
        console.log(`  • ${rec}`);
      });
    }

    console.log('\n✅ Performance testing completed!');
    console.log(`📁 Detailed results saved in: ${this.resultsDir}/`);
  }

  getScoreEmoji(score) {
    if (score >= 90) return '🟢';
    if (score >= 50) return '🟡';
    return '🔴';
  }

  async cleanup(server) {
    if (server) {
      console.log('\n🧹 Stopping preview server...');
      server.kill();
    }
  }
}

// Main execution
async function main() {
  const tester = new PerformanceTester();
  let server = null;

  try {
    await tester.init();
    await tester.buildProject();
    server = await tester.startServer();

    // Wait a moment for server to be fully ready
    await new Promise(resolve => setTimeout(resolve, 2000));

    const results = await tester.runLighthouseTests();

    if (results.length > 0) {
      const { summary } = await tester.generateSummaryReport(results);
      tester.displayResults(summary);
    } else {
      console.log('❌ No test results generated');
    }
  } catch (error) {
    console.error('❌ Performance testing failed:', error.message);
    process.exit(1);
  } finally {
    await tester.cleanup(server);
  }
}

// Run the performance tests
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}
