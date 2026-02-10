# 🚀 MediDesk Widget - Deployment Guide

## Overview

This guide explains how to build and deploy the MediDesk embeddable widget so other hospitals can add it to their websites with just one line of code.

---

## 📦 Building the Widget

### Step 1: Build the Project

Build both the main app and the embeddable widget:

```bash
npm run build
```

This creates:
- `dist/index.html` - Main application
- `dist/medidesk.js` - Embeddable widget bundle
- `dist/assets/` - CSS and other assets

### Step 2: Verify Build Output

Check that the widget file was created:

```bash
ls -la dist/medidesk.js
```

You should see a file around 200-300KB (before gzip).

---

## 🌐 Deployment Options

### Option 1: Deploy to Vercel (Recommended)

**Step 1: Install Vercel CLI**
```bash
npm install -g vercel
```

**Step 2: Deploy**
```bash
vercel --prod
```

**Step 3: Configure Environment Variables**
In Vercel dashboard, add all environment variables from `.env`:
- `VITE_MISTRAL_API_KEY`
- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`
- `VITE_FIREBASE_API_KEY`
- `VITE_FIREBASE_AUTH_DOMAIN`
- `VITE_FIREBASE_PROJECT_ID`
- `VITE_FIREBASE_STORAGE_BUCKET`
- `VITE_FIREBASE_MESSAGING_SENDER_ID`
- `VITE_FIREBASE_APP_ID`
- `VITE_FIREBASE_MEASUREMENT_ID`

**Step 4: Get Your Widget URL**
After deployment, your widget will be available at:
```
https://your-project.vercel.app/medidesk.js
```

### Option 2: Deploy to Netlify

**Step 1: Install Netlify CLI**
```bash
npm install -g netlify-cli
```

**Step 2: Deploy**
```bash
netlify deploy --prod --dir=dist
```

**Step 3: Configure Environment Variables**
In Netlify dashboard → Site settings → Environment variables, add all variables from `.env`.

**Step 4: Get Your Widget URL**
```
https://your-site.netlify.app/medidesk.js
```

### Option 3: Deploy to Custom Server

**Step 1: Build the Project**
```bash
npm run build
```

**Step 2: Upload to Server**
Upload the entire `dist/` folder to your web server:
```bash
# Using SCP
scp -r dist/* user@your-server.com:/var/www/html/

# Or using FTP client
# Upload dist/ contents to public_html/
```

**Step 3: Configure CORS**
Add CORS headers to allow embedding on other domains.

**For Apache (.htaccess):**
```apache
<IfModule mod_headers.c>
    Header set Access-Control-Allow-Origin "*"
    Header set Access-Control-Allow-Methods "GET, POST, OPTIONS"
    Header set Access-Control-Allow-Headers "Content-Type"
</IfModule>
```

**For Nginx:**
```nginx
location /medidesk.js {
    add_header Access-Control-Allow-Origin *;
    add_header Access-Control-Allow-Methods 'GET, POST, OPTIONS';
    add_header Access-Control-Allow-Headers 'Content-Type';
}
```

**Step 4: Set Environment Variables**
Configure environment variables on your server (method depends on hosting provider).

**Step 5: Get Your Widget URL**
```
https://your-domain.com/medidesk.js
```

### Option 4: Deploy to CDN (Advanced)

For better performance, deploy to a CDN like Cloudflare or AWS CloudFront:

**Step 1: Build and Upload**
```bash
npm run build
# Upload dist/ to your CDN
```

**Step 2: Configure CDN**
- Enable CORS
- Set cache headers
- Enable gzip compression

**Step 3: Get CDN URL**
```
https://cdn.your-domain.com/medidesk.js
```

---

## 📝 Providing the Widget to Hospitals

### Step 1: Share the Embed Code

Once deployed, provide hospitals with this code:

```html
<!-- Add MediDesk Widget -->
<script src="https://your-domain.com/medidesk.js"></script>
```

### Step 2: Provide Configuration Options

Share customization options:

```html
<!-- Customized Widget -->
<script
  src="https://your-domain.com/medidesk.js"
  data-hospital-id="hospital-unique-id"
  data-position="bottom-right"
  data-theme="blue"
  data-auto-open="false"
></script>
```

### Step 3: Share Documentation

Provide hospitals with:
- `WIDGET_EMBEDDING_GUIDE.md` - Complete embedding guide
- `public/widget-demo.html` - Live demo page
- Support contact information

---

## 🧪 Testing the Widget

### Test Locally

**Step 1: Build the Widget**
```bash
npm run build
```

**Step 2: Serve the Build**
```bash
npm run preview
```

**Step 3: Open Demo Page**
Navigate to:
```
http://localhost:4173/widget-demo.html
```

### Test on External Website

**Step 1: Deploy to Staging**
Deploy to a staging environment first.

**Step 2: Add to Test Website**
Create a simple HTML file:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Widget Test</title>
</head>
<body>
    <h1>Testing MediDesk Widget</h1>
    <p>The widget should appear in the bottom-right corner.</p>

    <!-- Add your deployed widget -->
    <script src="https://your-staging-url.com/medidesk.js"></script>
</body>
</html>
```

**Step 3: Verify Functionality**
- Widget appears correctly
- Chat opens and closes
- Messages send successfully
- Appointment booking works
- No console errors

---

## 🔒 Security Checklist

Before deploying to production:

- [ ] All API keys in environment variables (not hardcoded)
- [ ] `.env` file in `.gitignore`
- [ ] CORS configured correctly
- [ ] HTTPS enabled (required for production)
- [ ] Firebase security rules deployed
- [ ] Rate limiting configured (if applicable)
- [ ] Content Security Policy headers set
- [ ] Widget tested on multiple browsers
- [ ] Widget tested on mobile devices

---

## 📊 Monitoring & Analytics

### Track Widget Usage

Add analytics to track:
- Number of widget loads
- Conversation starts
- Appointment bookings
- Error rates

### Example with Google Analytics

```javascript
// Track widget initialization
window.addEventListener('load', function() {
  if (window.MediDesk) {
    gtag('event', 'medidesk_loaded', {
      'event_category': 'widget',
      'event_label': 'initialization'
    });
  }
});
```

---

## 🔄 Updating the Widget

### Version Management

When updating the widget:

1. **Update version in `src/widget.tsx`:**
```typescript
window.MediDesk = {
  init: initWidget,
  version: '2.2.0' // Update version
};
```

2. **Build and deploy:**
```bash
npm run build
# Deploy to production
```

3. **Notify hospitals:**
- Send update notification
- Provide changelog
- Mention if action required

### Cache Busting

To ensure hospitals get the latest version:

**Option 1: Version in URL**
```html
<script src="https://your-domain.com/medidesk.js?v=2.1.0"></script>
```

**Option 2: Cache Headers**
Set appropriate cache headers on your server:
```
Cache-Control: public, max-age=3600
```

---

## 💰 Monetization Setup

### Subscription Plans

If offering as a service, implement:

1. **Hospital Registration System**
   - Sign up form
   - Generate unique hospital IDs
   - Store in Firestore

2. **Billing Integration**
   - Stripe or PayPal
   - Monthly/annual plans
   - Usage tracking

3. **Access Control**
   - Verify hospital ID on widget load
   - Check subscription status
   - Disable for expired subscriptions

### Example Hospital ID Generation

```typescript
// Generate unique hospital ID
const hospitalId = `hospital_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

// Store in Firestore
await setDoc(doc(db, 'hospitals', hospitalId), {
  name: 'City General Hospital',
  email: 'admin@cityhospital.com',
  subscription: {
    plan: 'pro',
    status: 'active',
    expiresAt: new Date('2025-12-31')
  },
  createdAt: new Date()
});
```

---

## 📞 Support & Maintenance

### Provide Support Channels

- **Email**: support@medidesk.com
- **Documentation**: https://docs.medidesk.com
- **GitHub Issues**: For bug reports
- **Live Chat**: For urgent issues

### Maintenance Schedule

- **Weekly**: Monitor error logs
- **Monthly**: Review analytics and usage
- **Quarterly**: Update dependencies
- **Annually**: Major feature updates

---

## 🎯 Success Metrics

Track these metrics to measure success:

- **Widget Installations**: Number of hospitals using the widget
- **Active Users**: Daily/monthly active conversations
- **Appointment Bookings**: Conversion rate
- **User Satisfaction**: Feedback and ratings
- **Response Time**: Average AI response time
- **Error Rate**: Percentage of failed requests

---

## 📚 Additional Resources

- **Widget Embedding Guide**: `WIDGET_EMBEDDING_GUIDE.md`
- **Main README**: `README.md`
- **API Documentation**: Coming soon
- **Video Tutorials**: Coming soon

---

## ✅ Deployment Checklist

Before going live:

- [ ] Build completed successfully
- [ ] Widget tested locally
- [ ] Widget tested on external site
- [ ] All environment variables configured
- [ ] HTTPS enabled
- [ ] CORS configured
- [ ] Firebase security rules deployed
- [ ] Analytics tracking set up
- [ ] Documentation prepared
- [ ] Support channels ready
- [ ] Backup and monitoring in place

---

**Your widget is now ready to be embedded on any website! 🎉**

For questions or issues, refer to `WIDGET_EMBEDDING_GUIDE.md` or contact support.
