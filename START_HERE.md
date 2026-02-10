# 🚀 START HERE - MediDesk Embeddable Widget

## Welcome! 👋

Your MediDesk chatbot is **ready to be embedded** on any website with just one line of code!

This guide will walk you through **exactly what to do next** in 5 simple steps.

---

## ⚡ Quick Overview

**What you have:**
- ✅ AI-powered chatbot (Mistral AI)
- ✅ Appointment booking system (EmailJS)
- ✅ Admin panel (Firebase)
- ✅ **NEW: Embeddable widget** (works on any website)

**What hospitals need to do:**
```html
<!-- Add this ONE line to their website -->
<script src="https://medi-desk-omega.vercel.app/medidesk.js"></script>
```

That's it! The chatbot appears automatically.

---

## 📋 Follow These 5 Steps

### **Step 1: Build the Widget** (2 minutes)

```bash
# Make sure you're in the project directory
cd D:\DATA\MediDesk

# Install dependencies (if not done)
npm install

# Build the project
npm run build
```

**What this does:**
- Creates `dist/medidesk.js` (your embeddable widget)
- Creates `dist/index.html` (main application)
- Bundles all CSS and assets

**Expected output:**
```
✓ built in 15s
dist/medidesk.js          250.45 kB
dist/index.html           1.23 kB
dist/assets/              ...
```

**✅ Success if:** No errors, `dist/medidesk.js` file exists

---

### **Step 2: Test Locally** (5 minutes)

```bash
# Start preview server
npm run preview
```

**Open these URLs in your browser:**

1. **Widget Demo Page:**
   ```
   http://localhost:4173/widget-demo.html
   ```
   - Professional demo with documentation
   - Shows all features
   - Test the chatbot here

2. **Example Hospital Website:**
   ```
   http://localhost:4173/example-hospital-website.html
   ```
   - Realistic hospital website
   - Shows widget in real context
   - See how it looks on actual site

3. **Main Application:**
   ```
   http://localhost:4173/
   ```
   - Full MediDesk app
   - Admin panel at `/admin`

**What to test:**
- [ ] Widget button appears (bottom-right corner)
- [ ] Click to open chat
- [ ] Send a message
- [ ] AI responds correctly
- [ ] Test: Say "My name is [Your Name]", then ask "What is my name?" (tests stateful conversation)
- [ ] Click "Book Appointment"
- [ ] Fill and submit form
- [ ] Check for console errors (F12)

**✅ Success if:** Everything works, no errors in console

---

### **Step 3: Deploy to Production** (10 minutes)

#### **Option A: Deploy to Vercel (Recommended)**

```bash
# Install Vercel CLI (if not installed)
npm install -g vercel

# Deploy
vercel --prod
```

**Follow the prompts:**
1. Link to existing project or create new
2. Wait for deployment
3. Get your URL: `https://medi-desk-omega.vercel.app`

**Configure Environment Variables:**
1. Go to Vercel dashboard
2. Select your project
3. Go to Settings → Environment Variables
4. Add all variables from `.env` file:
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
5. Redeploy: `vercel --prod`

#### **Option B: Deploy to Netlify**

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod --dir=dist
```

**Configure Environment Variables:**
1. Go to Netlify dashboard
2. Site settings → Environment variables
3. Add all variables from `.env`
4. Redeploy

**✅ Success if:** You can access `https://medi-desk-omega.vercel.app/medidesk.js`

---

### **Step 4: Test on Production** (5 minutes)

Create a test HTML file on your computer:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Widget Test</title>
</head>
<body>
    <h1>Testing MediDesk Widget</h1>
    <p>The chatbot should appear in the bottom-right corner.</p>

    <!-- Use your production URL -->
    <script src="https://medi-desk-omega.vercel.app/medidesk.js"></script>
</body>
</html>
```

**Open in browser and verify:**
- [ ] Widget loads
- [ ] No CORS errors
- [ ] Chat works
- [ ] Appointments can be booked
- [ ] Emails are sent

**✅ Success if:** Widget works on external HTML file

---

### **Step 5: Share with Hospitals** (2 minutes)

**Give hospitals this code:**

```html
<!-- Add before closing </body> tag -->
<script src="https://medi-desk-omega.vercel.app/medidesk.js"></script>
```

**With configuration options:**

```html
<script
  src="https://medi-desk-omega.vercel.app/medidesk.js"
  data-hospital-id="their-hospital-id"
  data-position="bottom-right"
  data-theme="blue"
></script>
```

**Share these documents:**
1. `WIDGET_EMBEDDING_GUIDE.md` - Complete guide for hospitals
2. Demo link: `https://medi-desk-omega.vercel.app/widget-demo.html`
3. Support email: bashartc13@gmail.com

**✅ Success if:** Hospital can add widget to their site

---

## 🎯 Platform-Specific Instructions for Hospitals

### **WordPress**
1. Install "Insert Headers and Footers" plugin
2. Settings → Insert Headers and Footers
3. Paste script in "Scripts in Footer"
4. Save

### **Wix**
1. Settings → Custom Code
2. Add Custom Code
3. Paste script
4. Load on: All pages
5. Place: Body - end

### **Webflow**
1. Project Settings → Custom Code
2. Footer Code section
3. Paste script
4. Publish

### **Shopify**
1. Online Store → Themes
2. Actions → Edit code
3. Open `theme.liquid`
4. Add before `</body>`
5. Save

### **Custom HTML**
Add script before `</body>` tag

---

## 📚 Documentation Reference

### **For You:**
- `README.md` - Main documentation
- `IMPLEMENTATION_COMPLETE.md` - What was built
- `DEPLOYMENT_GUIDE.md` - Deployment details
- `TESTING_GUIDE.md` - Testing procedures
- `COMMANDS.md` - Quick command reference

### **For Hospitals:**
- `WIDGET_EMBEDDING_GUIDE.md` - Complete embedding guide
- `public/widget-demo.html` - Live demo
- `public/example-hospital-website.html` - Example

---

## 🐛 Troubleshooting

### **Build fails:**
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### **Widget not appearing:**
- Check `dist/medidesk.js` exists
- Verify URL is correct
- Check browser console (F12)
- Ensure HTTPS enabled (production)

### **CORS errors:**
- Configure CORS on your server
- See `DEPLOYMENT_GUIDE.md`

### **TypeScript errors:**
- All fixed! ✅
- If issues: Check `src/types/widget.ts`

---

## ✅ Final Checklist

- [ ] Step 1: Built successfully (`npm run build`)
- [ ] Step 2: Tested locally (`npm run preview`)
- [ ] Step 3: Deployed to production
- [ ] Step 4: Tested on production URL
- [ ] Step 5: Shared with first hospital
- [ ] Environment variables configured
- [ ] HTTPS enabled
- [ ] No console errors
- [ ] Widget works on external site

---

## 🎉 You're Done!

Once all steps are complete, your widget is **live and ready** for hospitals to use!

**Your widget URL:**
```
https://medi-desk-omega.vercel.app/medidesk.js
```

**Hospitals add this ONE line:**
```html
<script src="https://medi-desk-omega.vercel.app/medidesk.js"></script>
```

---

## 🚀 Next Command to Run

```bash
npm run build && npm run preview
```

Then open: `http://localhost:4173/widget-demo.html`

---

## 📞 Need Help?

- **All Documentation**: Check project root folder
- **Quick Commands**: See `COMMANDS.md`
- **Embedding Guide**: See `WIDGET_EMBEDDING_GUIDE.md`
- **Deployment**: See `DEPLOYMENT_GUIDE.md`

---

**Ready? Let's build! 🎯**

```bash
npm run build
```

---

**Made with ❤️ for better healthcare**
