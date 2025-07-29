#!/bin/bash
# Build script for CI/CD

echo "Building design tokens..."
npm run build --workspace=@tailwindspark/design-tokens

echo "Building UI components..."
npm run build --workspace=@tailwindspark/ui-components

echo "Building demo app..."
npm run build --workspace=@tailwindspark/demo-app

echo "Build completed successfully!"
ls -la dist/
