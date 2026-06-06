#!/bin/bash

# Shanmukha Pig Farm - Production Build Script
# This script creates an optimized production build

set -e  # Exit on error

PROJECT_DIR="/Users/jagadeesh/Desktop/shamukha_farm/shamukha-farm"

echo "🏗️  Shanmukha Pig Farm - Production Build"
echo "========================================="
echo ""

cd "$PROJECT_DIR"

# Clean previous builds
echo "🧹 Cleaning previous builds..."
rm -rf dist/

# Install dependencies (if needed)
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Build for production
echo "🔨 Building for production..."
ng build --configuration production

echo ""
echo "✅ Production build complete!"
echo ""
echo "📂 Build output location:"
echo "   dist/shamukha-farm/"
echo ""
echo "📊 Build Summary:"
du -sh dist/shamukha-farm
echo ""
echo "🚀 Ready for deployment!"
echo ""
echo "Deploy options:"
echo "1. Netlify:   netlify deploy --prod --dir=dist/shamukha-farm"
echo "2. Vercel:    vercel --prod"
echo "3. FTP:       Upload dist/shamukha-farm/ contents to server"
