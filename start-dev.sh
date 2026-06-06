#!/bin/bash

# Shanmukha Pig Farm - Development Server Startup Script
# This script starts the Angular development server with hot reload

set -e  # Exit on error

PROJECT_DIR="/Users/jagadeesh/Desktop/shamukha_farm/shamukha-farm"

echo "🚀 Shanmukha Pig Farm - Development Server"
echo "=========================================="
echo ""

# Check if node_modules exists
if [ ! -d "$PROJECT_DIR/node_modules" ]; then
    echo "📦 Installing dependencies..."
    cd "$PROJECT_DIR"
    npm install
fi

echo "✅ Starting development server..."
echo "📱 Open browser at: http://localhost:4200"
echo ""
echo "Press Ctrl+C to stop the server"
echo ""

cd "$PROJECT_DIR"
ng serve --open
