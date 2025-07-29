@echo off
echo Building design tokens...
npm run build --workspace=@tailwind-demo/design-tokens

echo Building UI components...
npm run build --workspace=@tailwind-demo/ui-components

echo Building demo app...  
npm run build --workspace=@tailwind-demo/demo-app

echo Build completed successfully!
dir dist\
