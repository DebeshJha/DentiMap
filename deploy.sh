#!/bin/bash

# DentiMap GitHub Pages Deployment Script
echo "🚀 Starting DentiMap GitHub Pages Deployment..."

# Build the production version
echo "📦 Building production bundle..."
npm run build


if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo "📁 Production files are in the 'dist' folder"
    echo ""
    echo "🌐 Your application is configured for:"
    echo "   - GitHub Pages: https://DebeshJha.github.io/DentiMap"
    echo "   - Backend API: https://map.paninsight.org"
    echo "   - Google OAuth: https://map.paninsight.org/login/oauth2/code/google"
    echo ""
    echo "🔧 Next steps:"
    echo "   1. Commit and push your changes to GitHub"
    echo "   2. GitHub Actions will automatically deploy to Pages"
    echo "   3. Or manually deploy using: npm run deploy"
    echo "   4. Ensure your backend is running on the EC2 instance"
    echo "   5. Test the authentication flow"
else
    echo "❌ Build failed! Please check for errors."
    exit 1
fi
