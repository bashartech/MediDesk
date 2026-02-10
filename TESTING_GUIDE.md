# 🧪 Testing the Embeddable Widget

## Quick Test

### Step 1: Build the Project
```bash
npm run build
```

### Step 2: Preview the Build
```bash
npm run preview
```

### Step 3: Test Pages

Open these URLs in your browser:

1. **Widget Demo Page:**
   ```
   http://localhost:4173/widget-demo.html
   ```
   - Professional demo page
   - Shows all features
   - Includes documentation

2. **Example Hospital Website:**
   ```
   http://localhost:4173/example-hospital-website.html
   ```
   - Realistic hospital website
   - Shows widget in real context
   - One-line integration example

3. **Main Application:**
   ```
   http://localhost:4173/
   ```
   - Full MediDesk application
   - Admin panel access

## What to Test

### ✅ Widget Appearance
- [ ] Widget button appears in bottom-right corner
- [ ] Button has blue gradient background
- [ ] Button shows chat icon
- [ ] Button has hover effect

### ✅ Widget Functionality
- [ ] Click button to open chat
- [ ] Chat window opens smoothly
- [ ] Welcome message displays
- [ ] Quick replies show up
- [ ] Can type and send messages
- [ ] AI responds correctly
- [ ] Can close chat window

### ✅ Appointment Booking
- [ ] Click "Book Appointment" quick reply
- [ ] Form opens
- [ ] All fields present
- [ ] Can fill out form
- [ ] Validation works
- [ ] Can submit appointment
- [ ] Success message shows

### ✅ Stateful Conversation
- [ ] Say "My name is [Your Name]"
- [ ] AI acknowledges your name
- [ ] Ask "What is my name?"
- [ ] AI remembers and responds correctly ✅

### ✅ Mobile Responsiveness
- [ ] Open on mobile device or resize browser
- [ ] Widget adapts to screen size
- [ ] Chat window fits properly
- [ ] All buttons are clickable
- [ ] Text is readable

### ✅ Cross-Browser Testing
- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge

## Console Checks

Open browser console (F12) and verify:

```javascript
// Check widget is loaded
console.log(window.MediDesk);
// Should output: { init: function, version: "2.1.0", open: function, ... }

// Check version
console.log(window.MediDesk.version);
// Should output: "2.1.0"

// Test API
window.MediDesk.open();   // Should open chat
window.MediDesk.close();  // Should close chat
window.MediDesk.toggle(); // Should toggle
```

## Network Checks

In browser DevTools → Network tab:

- [ ] `medidesk.js` loads successfully (200 status)
- [ ] CSS files load
- [ ] No 404 errors
- [ ] No CORS errors

## Expected Behavior

### First Visit:
1. Page loads
2. Widget button appears after ~1 second
3. Button is clickable
4. No console errors

### Opening Chat:
1. Click widget button
2. Chat window slides up
3. Welcome message displays
4. Quick replies appear
5. Input field is ready

### Sending Message:
1. Type message
2. Press Enter or click send
3. Message appears on right (blue)
4. Loading indicator shows
5. AI response appears on left (white)
6. Timestamp shows

### Booking Appointment:
1. Click "Book Appointment"
2. Form slides in
3. Fill all required fields
4. Click submit
5. Loading state shows
6. Success message appears
7. Email sent to admin

## Troubleshooting

### Widget Not Appearing
```bash
# Check build output
ls -la dist/medidesk.js

# Should see file ~200-300KB
```

### Console Errors
```javascript
// Check if MediDesk is defined
if (window.MediDesk) {
  console.log('✅ Widget loaded');
} else {
  console.log('❌ Widget not loaded');
}
```

### API Not Working
```bash
# Verify environment variables
cat .env

# Should see all API keys
```

## Production Testing

After deploying to Vercel/Netlify:

1. **Test on External Site:**
   Create `test.html`:
   ```html
   <!DOCTYPE html>
   <html>
   <body>
       <h1>Test Page</h1>
       <script src="https://your-domain.vercel.app/medidesk.js"></script>
   </body>
   </html>
   ```

2. **Open in Browser:**
   - Widget should appear
   - All functionality should work
   - No CORS errors

3. **Test on Different Domains:**
   - WordPress site
   - Wix site
   - Custom domain

## Success Criteria

✅ All tests pass
✅ No console errors
✅ Widget works on all browsers
✅ Mobile responsive
✅ Stateful conversations work
✅ Appointments can be booked
✅ Emails are sent

## Next Steps

Once all tests pass:
1. Deploy to production
2. Share embed code with hospitals
3. Provide documentation
4. Offer support

---

**Happy Testing! 🎉**
