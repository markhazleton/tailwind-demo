@echo off
echo Building design tokens...
npm run build --workspace=@tailwindspark/design-tokens

echo Building UI components...
npm run build --workspace=@tailwindspark/ui-components

echo Building demo app...  
npm run build --workspace=@tailwindspark/demo-app

echo Build completed successfully!
dir dist\
