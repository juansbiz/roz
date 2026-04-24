# ROZ Clock Out Mint Berry - Shopify Setup Guide

## Overview
This guide explains how to attach the custom ROZ product template to your Shopify product.

---

## Files Created

### 1. Product Template
- **File:** `templates/product.roz-clock-out.json`
- **Purpose:** Custom product page template specifically designed for ROZ Clock Out Mint Berry

### 2. Product Hero Section
- **File:** `sections/roz-product-hero.liquid`
- **Purpose:** Fully functional product showcase with add-to-cart, quantity selector, and dynamic pricing

### 3. Benefits Section
- **File:** `sections/roz-benefits.liquid`
- **Purpose:** "Unwinding has evolved" section with features and CTA

### 4. Product Image
- **File:** `assets/roz-strips-focus.png`
- **Purpose:** Main product image for strips focus

---

## Step 1: Create the Product in Shopify

1. Go to **Products** → **Add product** in Shopify Admin
2. Fill in the product details:

### Product Information
- **Title:** ROZ: Clock Out Mint Berry Relax Strips
- **Description:**
  ```
  Fast-dissolving oral strips designed to help you shift from work mode to relax mode in just 60 seconds.

  Each strip contains:
  • L-Theanine (50mg) - Promotes calm, focused relaxation
  • GABA (25mg) - Supports nervous system balance
  • Vitamin B6 (6mg) - Supports energy metabolism

  Perfect for your post-work unwinding ritual. Simply place one strip on your tongue and allow 60 seconds to dissolve. Maximum one strip per day.

  ✓ Vegan
  ✓ Non-GMO
  ✓ Made in USA
  ✓ No Artificial Sweeteners
  ✓ Gluten-Free
  ```

### Pricing
- **Price:** $34.00
- **Compare at price:** $38.00 (optional, for showing discount)

### Inventory
- **SKU:** ROZ-MINT-BERRY-30
- **Track quantity:** Yes
- **Quantity:** [Your inventory amount]

### Variants (Optional)
If you want to offer different pack sizes:
- **Variant 1:** 1 Tin (30 strips) - $34.00
- **Variant 2:** 2 Tins (60 strips) - $64.60 (5% off)
- **Variant 3:** 3 Tins (90 strips) - $91.80 (10% off)

### Product Handle
- **Handle:** `roz-clock-out-mint-berry`

---

## Step 2: Assign the Custom Template

1. In the product editor, scroll down to **Theme templates** section
2. Click on **Change** next to "Theme template"
3. Select **product.roz-clock-out** from the dropdown
4. Click **Save**

---

## Step 3: Upload Product Images

1. In the product editor, go to **Media** section
2. Upload product images:
   - Main product image (tin with strips)
   - Lifestyle images
   - Ingredients close-up
   - Usage instructions visuals

**Note:** The main hero section will use `roz-strips-focus.png` from assets, but you should still upload images for the gallery

---

## Step 4: Customize Sections (Optional)

You can customize the product page sections through the Shopify theme editor:

1. Go to **Online Store** → **Themes**
2. Click **Customize** on your active theme
3. Navigate to the ROZ product page
4. Edit the following sections:
   - **ROZ Product Hero** - Main product showcase
   - **Main Product** - Standard product details
   - **ROZ Benefits** - Features and benefits
   - **Product Ingredients** - Ingredient breakdown
   - **How to Use** - Usage instructions

---

## Step 5: Set Up Collections (Optional)

Create collections for better organization:

1. **Collection:** Relax & Unwind
   - Add ROZ Clock Out product
   - Use for related products

2. **Collection:** New Arrivals
   - Feature ROZ as a new product

---

## Template Features

### ✅ Fully Functional Product Page
- Add to cart functionality
- Quantity selector (1 tin or 2 tins with 10% off)
- Dynamic pricing updates
- Shopify product integration
- Mobile responsive

### 🎨 Custom Sections
- **ROZ Product Hero** - Premium product showcase with LOZ-inspired design
- **ROZ Benefits** - BREZ-inspired features section
- **Ingredients** - Clinically-dosed ingredient breakdown
- **How to Use** - Step-by-step usage guide
- **Related Products** - Cross-sell other products

### 📱 Mobile Optimized
- Responsive grid layouts
- Touch-friendly buttons
- Optimized for all screen sizes

---

## Subscription Setup (Optional)

If you want to offer subscriptions:

1. Install a subscription app (e.g., Recharge, Bold Subscriptions)
2. Configure the subscription widget
3. The "Subscribe & Save" button can link to subscription checkout

---

## Testing Checklist

Before going live, test:

- ✅ Add to cart works correctly
- ✅ Quantity selector updates pricing
- ✅ Images load properly
- ✅ Mobile layout displays correctly
- ✅ All sections render properly
- ✅ Related products show correctly
- ✅ Checkout process works

---

## Product URL

Once published, your product will be available at:
```
https://your-store.myshopify.com/products/roz-clock-out-mint-berry
```

Replace `your-store` with your actual Shopify store name.

---

## Support & Customization

### To Modify Copywriting
Edit the template at: `templates/product.roz-clock-out.json`

### To Change Colors
Edit the section files:
- `sections/roz-product-hero.liquid` (Hero section)
- `sections/roz-benefits.liquid` (Benefits section)

### To Update Product Image
Replace the file: `assets/roz-strips-focus.png`

---

## Next Steps

1. ✅ Create product in Shopify
2. ✅ Assign `product.roz-clock-out` template
3. ✅ Upload product images
4. ✅ Test add to cart functionality
5. ✅ Publish product
6. ✅ Add to navigation menu
7. ✅ Set up marketing campaigns

---

*Last Updated: November 2025*
