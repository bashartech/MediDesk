# 🚀 MediDesk Widget - Embedding Guide

## Quick Start

Add MediDesk to any website with just one line of code:

```html
<script src="https://medi-desk-omega.vercel.app/medidesk.js"></script>
```

That's it! The chatbot will appear in the bottom-right corner of your website.

---

## 📋 Table of Contents

- [Installation](#installation)
- [Configuration Options](#configuration-options)
- [Platform-Specific Guides](#platform-specific-guides)
- [JavaScript API](#javascript-api)
- [Customization](#customization)
- [Troubleshooting](#troubleshooting)

---

## 🔧 Installation

### Basic Installation

Add this script tag before the closing `</body>` tag of your website:

```html
<script src="https://medi-desk-omega.vercel.app/medidesk.js"></script>
```

### With Configuration

Customize the widget using data attributes:

```html
<script
  src="https://medi-desk-omega.vercel.app/medidesk.js"
  data-hospital-id="your-hospital-id"
  data-position="bottom-right"
  data-theme="blue"
  data-auto-open="false"
></script>
```

---

## ⚙️ Configuration Options

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `data-hospital-id` | string | `"demo-hospital"` | Your unique hospital ID |
| `data-position` | string | `"bottom-right"` | Widget position: `bottom-right`, `bottom-left`, `top-right`, `top-left` |
| `data-theme` | string | `"blue"` | Color theme: `blue`, `green`, `purple` |
| `data-auto-open` | boolean | `false` | Auto-open widget on page load |

### Example Configurations

**Bottom-left position:**
```html
<script
  src="https://medi-desk-omega.vercel.app/medidesk.js"
  data-position="bottom-left"
></script>
```

**Auto-open on page load:**
```html
<script
  src="https://medi-desk-omega.vercel.app/medidesk.js"
  data-auto-open="true"
></script>
```

**Custom hospital:**
```html
<script
  src="https://medi-desk-omega.vercel.app/medidesk.js"
  data-hospital-id="city-general-hospital"
></script>
```

---

## 🌐 Platform-Specific Guides

### WordPress

**Method 1: Using a Plugin**
1. Install "Insert Headers and Footers" plugin
2. Go to Settings → Insert Headers and Footers
3. Paste the script in the "Scripts in Footer" section
4. Save changes

**Method 2: Theme Editor**
1. Go to Appearance → Theme Editor
2. Open `footer.php`
3. Add the script before `</body>`
4. Update file

**Method 3: Custom HTML Block**
1. Edit any page/post
2. Add a "Custom HTML" block
3. Paste the script
4. Publish

### Wix

1. Go to Settings → Custom Code
2. Click "+ Add Custom Code"
3. Paste the MediDesk script
4. Set "Load code on: All pages"
5. Place code in: "Body - end"
6. Apply

### Webflow

1. Go to Project Settings → Custom Code
2. Scroll to "Footer Code"
3. Paste the MediDesk script
4. Save and publish

### Shopify

1. Go to Online Store → Themes
2. Click "Actions" → "Edit code"
3. Open `theme.liquid`
4. Add script before `</body>`
5. Save

### Squarespace

1. Go to Settings → Advanced → Code Injection
2. Paste script in "Footer" section
3. Save

### Custom HTML Website

Add the script before the closing `</body>` tag in your HTML file:

```html
<!DOCTYPE html>
<html>
<head>
    <title>My Hospital</title>
</head>
<body>
    <!-- Your website content -->

    <!-- MediDesk Widget -->
    <script src="https://medi-desk-omega.vercel.app/medidesk.js"></script>
</body>
</html>
```

---

## 💻 JavaScript API

Control the widget programmatically using JavaScript:

### Initialize Widget

```javascript
// Initialize with default settings
window.MediDesk.init();

// Initialize with custom config
window.MediDesk.init({
  hospitalId: 'my-hospital',
  position: 'bottom-left',
  theme: 'blue',
  autoOpen: true
});
```

### Check Widget Version

```javascript
console.log(window.MediDesk.version);
// Output: "2.1.0"
```

### Event Listeners

```javascript
// Listen for widget events (coming soon)
window.addEventListener('medidesk:ready', function() {
  console.log('MediDesk widget is ready');
});

window.addEventListener('medidesk:message', function(event) {
  console.log('New message:', event.detail);
});
```

---

## 🎨 Customization

### Position Options

```html
<!-- Bottom Right (default) -->
<script src="..." data-position="bottom-right"></script>

<!-- Bottom Left -->
<script src="..." data-position="bottom-left"></script>

<!-- Top Right -->
<script src="..." data-position="top-right"></script>

<!-- Top Left -->
<script src="..." data-position="top-left"></script>
```

### Theme Colors (Coming Soon)

```html
<!-- Blue theme (default) -->
<script src="..." data-theme="blue"></script>

<!-- Green theme -->
<script src="..." data-theme="green"></script>

<!-- Purple theme -->
<script src="..." data-theme="purple"></script>
```

### Custom CSS (Advanced)

Override widget styles with custom CSS:

```css
/* Target the widget container */
#medidesk-widget-root {
  /* Your custom styles */
}

/* Customize chat button */
#medidesk-widget-root button {
  background: #your-color !important;
}
```

---

## 🐛 Troubleshooting

### Widget Not Appearing

**Check 1: Script Loaded**
```javascript
// Open browser console (F12) and check:
console.log(window.MediDesk);
// Should output: { init: function, version: "2.1.0" }
```

**Check 2: Console Errors**
- Open browser console (F12)
- Look for red error messages
- Common issues:
  - CORS errors (contact support)
  - Script blocked by ad blocker
  - Conflicting JavaScript

**Check 3: Script Placement**
- Ensure script is before `</body>`
- Not in `<head>` section
- Not inside other elements

### Widget Appears But Doesn't Work

**Check 1: Environment Variables**
- Ensure all API keys are configured
- Check `.env` file on server

**Check 2: Network Issues**
- Check browser Network tab (F12)
- Look for failed requests
- Verify API endpoints are accessible

**Check 3: Browser Compatibility**
- MediDesk supports:
  - Chrome 90+
  - Firefox 88+
  - Safari 14+
  - Edge 90+

### Widget Conflicts with Website

**Issue: Styling Conflicts**
```css
/* Add to your website CSS */
#medidesk-widget-root {
  all: initial;
  position: fixed !important;
  z-index: 999999 !important;
}
```

**Issue: JavaScript Conflicts**
- MediDesk uses isolated scope
- Should not conflict with other scripts
- If issues persist, contact support

### Performance Issues

**Slow Loading:**
- Widget is optimized (~200KB gzipped)
- Loads asynchronously (doesn't block page)
- Consider using CDN for faster delivery

**High Memory Usage:**
- Widget cleans up resources automatically
- Conversation history limited to 10 messages
- No memory leaks in normal usage

---

## 📊 Analytics & Tracking

### Track Widget Usage

```javascript
// Track when widget is initialized
window.addEventListener('medidesk:ready', function() {
  // Send to your analytics
  gtag('event', 'medidesk_loaded');
});

// Track conversations (coming soon)
window.addEventListener('medidesk:conversation_start', function() {
  gtag('event', 'medidesk_conversation_start');
});
```

---

## 🔒 Security & Privacy

### Data Handling

- All conversations are encrypted in transit (HTTPS)
- No personal data stored in browser localStorage
- Conversations saved to secure Firestore database
- HIPAA-compliant infrastructure

### Content Security Policy (CSP)

If your website uses CSP, add these directives:

```html
<meta http-equiv="Content-Security-Policy"
      content="
        script-src 'self' https://medi-desk-omega.vercel.app;
        connect-src 'self' https://api.mistral.ai https://firestore.googleapis.com;
        style-src 'self' 'unsafe-inline';
      ">
```

---

## 📞 Support

### Need Help?

- **Email**: support@medidesk.com
- **Documentation**: https://docs.medidesk.com
- **GitHub Issues**: https://github.com/yourusername/medidesk/issues
- **Live Chat**: Available on our website

### Custom Development

Need custom features or white-label solution?
- Contact: sales@medidesk.com
- Custom integrations available
- Enterprise support plans

---

## 📝 Changelog

### Version 2.1.0 (Current)
- ✅ Embeddable widget support
- ✅ Stateful conversations
- ✅ Medical safety controls
- ✅ Email notifications via EmailJS
- ✅ Firebase Firestore integration
- ✅ Responsive design

### Coming Soon
- 🔄 Multi-language support
- 🔄 Voice input/output
- 🔄 Custom themes
- 🔄 Advanced analytics
- 🔄 SMS notifications

---

## 📄 License

MediDesk is licensed under the MIT License.

---

**Made with ❤️ for better healthcare**
