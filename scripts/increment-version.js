#!/usr/bin/env node
/**
 * Increment patch version in package.json
 * Usage: node scripts/increment-version.js
 */
import { readFileSync, writeFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const packageJsonPath = join(__dirname, '../package.json');

try {
  // Read current package.json
  const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf8'));

  // Parse current version
  const currentVersion = packageJson.version;
  const versionParts = currentVersion.split('.');

  if (versionParts.length !== 3) {
    throw new Error(`Invalid version format: ${currentVersion}. Expected format: x.y.z`);
  }

  // Increment patch version (third number)
  const major = parseInt(versionParts[0]);
  const minor = parseInt(versionParts[1]);
  const patch = parseInt(versionParts[2]) + 1;

  const newVersion = `${major}.${minor}.${patch}`;

  // Update package.json
  packageJson.version = newVersion;

  // Write back to file with proper formatting
  writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2) + '\n', 'utf8');

  console.warn(`Version incremented: ${currentVersion} → ${newVersion}`);
} catch (error) {
  console.error('Error incrementing version:', error.message);
  process.exit(1);
}
