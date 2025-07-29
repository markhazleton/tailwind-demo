# GitHub Pages Deployment Guide

## Automatic Deployment

This project is configured for automatic deployment to GitHub Pages when changes are pushed to the `main` branch.

### What happens automatically

1. GitHub Actions workflow builds the project
2. Static files are generated in the `dist` folder
3. Files are deployed to GitHub Pages
4. Site becomes available at: `https://markhazleton.github.io/tailwind-demo/`

## Manual Deployment

To deploy manually:

```bash
# Install dependencies
npm ci

# Build the project
npm run build

# The built files will be in the dist/ folder
```

## Configuration Details

- **Base URL**: `/tailwind-demo/` (configured in `vite.config.ts`)
- **Router**: Uses HashRouter for GitHub Pages compatibility
- **Build Output**: `dist/` folder in repository root
- **404 Handling**: SPA routing support with `404.html`

## Local Development

For local development, the site runs at `http://localhost:5173/` with the development server:

```bash
npm run dev
```

## Troubleshooting

If the deployment fails:

1. Check the Actions tab in GitHub for build logs
2. Ensure GitHub Pages is enabled in repository settings
3. Verify the source is set to "GitHub Actions"
4. Check that all dependencies are properly installed

## URLs After Deployment

- **Live Site**: <https://markhazleton.github.io/tailwind-demo/>
- **Home Page**: <https://markhazleton.github.io/tailwind-demo/#/>
- **Design System**: <https://markhazleton.github.io/tailwind-demo/#/design-system>
- **Animations**: <https://markhazleton.github.io/tailwind-demo/#/animations>
- **Dashboard**: <https://markhazleton.github.io/tailwind-demo/#/dashboard>
