#!/bin/bash
# Upload header.liquid directly via Shopify Admin API

# Read the file content and base64 encode it
CONTENT=$(cat sections/header.liquid | base64)

echo "File prepared for upload"
echo "You need to run: shopify theme push --nodelete"
