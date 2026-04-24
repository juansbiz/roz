#!/bin/bash

# Clean all temporary and backup files before pushing to Shopify
echo "Cleaning temporary files..."

# Remove temp files
find . -type f \( -name "*.tmp" -o -name "*.tmp.*" -o -name "*.backup" -o -name "*.swp" -o -name "*~" \) -delete

# Remove macOS-specific files
find . -type f -name ".DS_Store" -delete

# Remove editor directories
rm -rf .vscode .idea

echo "Cleanup complete. Safe to push now."
