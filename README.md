# 🏥 MediDesk - AI-Powered Hospital Front Desk Assistant

[![React](https://img.shields.io/badge/React-19.2.0-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-blue.svg)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.18-38B2AC.svg)](https://tailwindcss.com/)
[![Firebase](https://img.shields.io/badge/Firebase-11.2.0-orange.svg)](https://firebase.google.com/)
[![Mistral AI](https://img.shields.io/badge/Mistral-AI-purple.svg)](https://mistral.ai/)

**MediDesk** is an intelligent, AI-powered front desk assistant designed for hospitals and healthcare facilities. It provides 24/7 automated patient support through a conversational chatbot, appointment booking system, and comprehensive admin panel.

### 🌟 **NEW: Embeddable Widget**

MediDesk can now be embedded on **any website** with just one line of code! Perfect for hospitals that want to add AI-powered chat to their existing website.

```html
<!-- Add to any website -->
<script src="https://medi-desk-omega.vercel.app/medidesk.js"></script>
```

**Works on:** WordPress, Wix, Webflow, Shopify, and any custom HTML website.

👉 **[View Embedding Guide](WIDGET_EMBEDDING_GUIDE.md)** 

---

## 🌐 Live Demo

**Production URL:** https://medi-desk-omega.vercel.app/

**Widget Demo:** https://medi-desk-omega.vercel.app/widget-demo.html

**Example Integration:** https://medi-desk-omega.vercel.app/example-hospital-website.html

**Embed Code:**
```html
<script src="https://medi-desk-omega.vercel.app/medidesk.js"></script>
```

---

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Installation](#-installation)
- [Configuration](#-configuration)
- [Usage](#-usage)
- [API Integrations](#-api-integrations)
- [Components Overview](#-components-overview)
- [Deployment](#-deployment)
- [Troubleshooting](#-troubleshooting)
- [Contributing](#-contributing)
- [License](#-license)

---

## ✨ Features

### 🤖 **Intelligent Chatbot**
- **Stateful Conversations**: Remembers last 10 messages for contextual responses
- **Medical Safety Controls**: Strict rules preventing medical advice/diagnosis
- **Natural Language Processing**: Powered by Mistral AI for human-like interactions
- **Quick Replies**: Pre-defined actions for common queries
- **24/7 Availability**: Always ready to assist patients

### 🌐 **Embeddable Widget** ⭐ NEW
- **One-Line Integration**: Add to any website with a single script tag
- **Platform Agnostic**: Works on WordPress, Wix, Webflow, Shopify, and custom sites
- **Customizable**: Configure position, theme, and behavior via data attributes
- **Isolated Styles**: No conflicts with host website CSS
- **Cross-Origin Support**: Secure embedding across different domains

### 📅 **Appointment Booking**
- **Interactive Form**: Easy-to-use appointment booking interface
- **Department Selection**: Choose from multiple medical departments
- **Email Notifications**: Automatic email alerts to admin via EmailJS
- **Real-time Validation**: Form validation with helpful error messages
- **Status Tracking**: Track appointment status (new, pending, completed)

### 📊 **Admin Panel**
- **Dashboard Overview**: Statistics and recent activity at a glance
- **Appointment Management**: View, filter, and manage all appointments
- **Chat Logs**: Review all patient conversations
- **Real-time Updates**: Live data from Firebase Firestore
- **Professional UI**: Clean, modern interface with responsive design

### 🎨 **Professional Design**
- **Modern UI/UX**: Gradient designs, smooth animations, rounded corners
- **Responsive Layout**: Works seamlessly on desktop, tablet, and mobile
- **Accessibility**: Focus styles, proper contrast, keyboard navigation
- **Full-Screen Sections**: Each section takes full viewport height
- **Smooth Scrolling**: Elegant navigation between sections

---

## 🛠 Tech Stack

### **Frontend**
- **React 19.2.0** - Modern UI library with latest features
- **TypeScript 5.9.3** - Type-safe development
- **Vite 6.0.11** - Lightning-fast build tool
- **Tailwind CSS 4.1.18** - Utility-first CSS framework
- **React Router DOM 7.1.3** - Client-side routing

### **Backend Services**
- **Firebase Firestore 11.2.0** - NoSQL cloud database
- **Mistral AI API** - Natural language processing
- **EmailJS 3.2.0** - Client-side email service

### **Development Tools**
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Git** - Version control

---

## 📁 Project Structure

```
MediDesk/
├── .claude/                          # Claude Code skills
│   └── skills/
│       ├── emailjs-integration/      # EmailJS setup skill
│       │   └── SKILL.md
│       └── mistral-ai-setup/         # Mistral AI setup skill
│           └── SKILL.md
├── src/
│   ├── components/
│   │   ├── admin/                    # Admin panel components
│   │   │   ├── Dashboard.tsx         # Main admin dashboard
│   │   │   ├── ChatLogs.tsx          # Chat history viewer
│   │   │   └── AppointmentsList.tsx  # Appointments manager
│   │   └── widget/                   # Chat widget components
│   │       ├── ChatWidget.tsx        # Main chat widget
│   │       ├── MessageList.tsx       # Message display
│   │       ├── InputBox.tsx          # User input field
│   │       ├── QuickReplies.tsx      # Quick action buttons
│   │       └── AppointmentForm.tsx   # Booking form
│   ├── services/                     # External service integrations
│   │   ├── mistral.ts                # Mistral AI service
│   │   ├── firestore.ts              # Firebase operations
│   │   ├── emailjs.ts                # EmailJS service
│   │   └── hospitalConfig.ts         # Hospital data
│   ├── types/                        # TypeScript definitions
│   │   └── index.ts                  # Type interfaces
│   ├── utils/                        # Utility functions
│   │   └── constants.ts              # App constants
│   ├── App.tsx                       # Main app component
│   ├── App.css                       # Professional styling
│   ├── index.css                     # Global styles
│   ├── main.tsx                      # App entry point
│   └── firebase.ts                   # Firebase config
├── public/                           # Static assets
├── .env                              # Environment variables
├── .gitignore                        # Git ignore rules
├── package.json                      # Dependencies
├── tsconfig.json                     # TypeScript config
├── vite.config.ts                    # Vite config
├── tailwind.config.js                # Tailwind config
├── firestore.rules                   # Firestore security rules
├── FIXES_APPLIED.md                  # Recent fixes log
├── STATEFUL_CHATBOT.md              # Chatbot implementation guide
├── EMAILJS_SETUP.md                 # EmailJS setup guide
└── README.md                         # This file
```

---

## 🚀 Installation

### **Prerequisites**
- Node.js 18+ and npm/yarn
- Firebase account
- Mistral AI account
- EmailJS account
- Git

### **Step 1: Clone Repository**
```bash
git clone https://github.com/yourusername/medidesk.git
cd medidesk
```

### **Step 2: Install Dependencies**
```bash
npm install
# or
yarn install
```

### **Step 3: Configure Environment Variables**
Create a `.env` file in the root directory:

```env
# Mistral AI Configuration
VITE_MISTRAL_API_KEY=your_mistral_api_key_here

# EmailJS Configuration
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key

# Firebase Configuration
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

### **Step 4: Configure Hospital Data**
Edit `src/services/hospitalConfig.ts` with your hospital information:

```typescript
export const hospitalConfig = {
  hospitalId: 'your_hospital_id',
  hospitalName: 'Your Hospital Name',
  address: 'Your Hospital Address',
  emergencyContact: '+XX-XXX-XXXXXXX',
  email: 'info@yourhospital.com',
  timings: '24/7 Emergency | OPD: 9:00 AM - 5:00 PM',
  departments: [
    'General Medicine',
    'Pediatrics',
    'Cardiology',
    // Add your departments
  ],
  consultationFees: {
    'General Medicine': 'PKR 2000',
    'Pediatrics': 'PKR 2500',
    // Add your fees
  },
  facilities: [
    'Emergency Services',
    'ICU',
    'Laboratory',
    // Add your facilities
  ]
};
```

### **Step 5: Set Up Firebase**
1. Create a Firebase project at https://console.firebase.google.com/
2. Enable Firestore Database
3. Deploy security rules:
```bash
firebase deploy --only firestore:rules
```

### **Step 6: Run Development Server**
```bash
npm run dev
# or
yarn dev
```

Visit `http://localhost:5173` to see your application.

---

## ⚙️ Configuration

### **Mistral AI Setup**

For detailed setup instructions, see `.claude/skills/mistral-ai-setup/SKILL.md`

**Quick Setup**:
1. Create account at https://console.mistral.ai/
2. Get API key from "API Keys" section
3. Add to `.env`: `VITE_MISTRAL_API_KEY=your_key`
4. Model: `mistral-small-latest` (default, cost-effective)

**Configuration** (`src/utils/constants.ts`):
```typescript
export const MISTRAL_MODEL = 'mistral-small-latest';
export const MISTRAL_TEMPERATURE = 0.2;  // 0.1-0.3 for consistency
export const MISTRAL_MAX_TOKENS = 500;   // Limit response length
```

**Cost Estimate**:
- Model: mistral-small-latest
- Cost: ~$0.001 per 1K tokens
- Average conversation (10 turns): ~$0.015
- 100 conversations: ~$1.50

### **EmailJS Setup**

For detailed setup instructions, see `.claude/skills/emailjs-integration/SKILL.md`

**Quick Setup**:
1. Create account at https://www.emailjs.com/
2. Add email service (Gmail/Outlook)
3. Create email template with variables
4. Get Service ID, Template ID, and Public Key
5. Add to `.env`

**Email Template Variables**:
- `{{patient_name}}` - Patient's full name
- `{{phone_or_email}}` - Contact information
- `{{department}}` - Selected department
- `{{preferred_time}}` - Appointment time
- `{{reason}}` - Reason for visit
- `{{hospital_name}}` - Hospital name

**Free Tier**: 200 emails/month

### **Firebase Firestore Setup**

1. Create project at https://console.firebase.google.com/
2. Enable Firestore Database (production mode)
3. Deploy security rules from `firestore.rules`
4. Get configuration from Project Settings
5. Add credentials to `.env`

**Collections Structure**:
```
firestore/
├── chats/
│   └── {chatId}
│       ├── userMessage: string
│       ├── aiResponse: string
│       ├── hospitalId: string
│       └── timestamp: Date
└── appointments/
    └── {appointmentId}
        ├── name: string
        ├── phoneOrEmail: string
        ├── department: string
        ├── preferredTime: string
        ├── reason: string
        ├── status: 'new' | 'pending' | 'completed'
        ├── hospitalId: string
        └── createdAt: Date
```

---

## 📖 Usage

### **For Patients (Frontend)**

#### **1. Home Page**
- View hospital information
- Browse departments and facilities
- Access contact information
- Navigate to admin panel

#### **2. Chat Widget**
- Click the blue chat button (bottom-right)
- Ask questions about:
  - Hospital timings
  - Department information
  - Consultation fees
  - Facilities and services
- Use quick replies for common actions
- Book appointments through the chat

**Example Conversation**:
```
You: "What are your timings?"
AI: "OPD: 9:00 AM - 5:00 PM, Emergency: 24/7"

You: "Can I visit tomorrow?"
AI: "Yes! Would you like to book an appointment?"

You: "Yes, for Cardiology"
AI: "Great! Please click 'Book Appointment' to provide your details."
```

#### **3. Appointment Booking**
- Click "Book Appointment" in chat or quick replies
- Fill in the form:
  - Full Name (required)
  - Phone Number or Email (required)
  - Department (required, dropdown)
  - Preferred Date & Time (required)
  - Reason for Visit (optional)
- Submit and receive confirmation
- Admin receives email notification

### **For Administrators (Admin Panel)**

#### **1. Access Admin Panel**
- Navigate to `/admin` or click "Admin" button in header
- View dashboard with statistics

#### **2. Dashboard Overview**
- **Total Appointments**: All appointment requests
- **New Requests**: Unprocessed appointments (green)
- **Pending**: Appointments in progress (yellow)
- **Completed**: Finished appointments (purple)
- **Recent Activity**: Latest 5 appointments

#### **3. Manage Appointments**
- Click "Appointments" tab
- View all appointments with details
- See patient information and preferences
- Contact patients via phone/email
- Update appointment status

#### **4. View Chat Logs**
- Click "Chat Logs" tab
- Review all patient conversations
- Analyze common queries
- Improve chatbot responses based on feedback

---

## 🔌 API Integrations

### **Mistral AI Integration**

**File**: `src/services/mistral.ts`

**Key Features**:
- Stateful conversations (remembers last 10 messages)
- Medical safety controls (no medical advice)
- Context-aware responses
- Error handling with fallback responses

**Usage Example**:
```typescript
import { askMistral } from './services/mistral';

// Simple query
const response = await askMistral("What are your timings?");

// With conversation history
const history = [
  { role: 'user', content: 'My name is John' },
  { role: 'assistant', content: 'Hello John!' }
];
const response = await askMistral("What's my name?", history);
// Response: "Your name is John"
```

### **EmailJS Integration**

**File**: `src/services/emailjs.ts`

**Usage Example**:
```typescript
import { sendAppointmentEmail } from './services/emailjs';

const emailSent = await sendAppointmentEmail({
  patient_name: 'John Doe',
  phone_or_email: 'john@example.com',
  department: 'Cardiology',
  preferred_time: 'Tomorrow 10:00 AM',
  reason: 'Checkup',
  hospital_name: 'City General Hospital'
});
```

### **Firebase Firestore Integration**

**File**: `src/services/firestore.ts`

**Key Functions**:
```typescript
// Save chat message
await saveChat(userMessage, aiResponse, hospitalId);

// Save appointment
const appointmentId = await saveAppointment({...});

// Fetch appointments
const appointments = await fetchAppointments(50);

// Fetch chat logs
const chats = await fetchChatLogs(50);

// Get statistics
const stats = await getAppointmentStats();
```

---

## 🧩 Components Overview

### **Main Components**

| Component | Purpose | Key Features |
|-----------|---------|--------------|
| `App.tsx` | Main app with routing | Multi-section layout, smooth scrolling |
| `ChatWidget.tsx` | Chatbot interface | Stateful conversations, quick replies |
| `MessageList.tsx` | Display messages | Auto-scroll, timestamps, loading states |
| `InputBox.tsx` | User input field | Enter key support, character limit |
| `QuickReplies.tsx` | Action buttons | Pre-defined queries, hover effects |
| `AppointmentForm.tsx` | Booking form | Validation, EmailJS integration |
| `Dashboard.tsx` | Admin panel | Statistics, tabs, real-time data |
| `AppointmentsList.tsx` | Manage appointments | Table view, status badges |
| `ChatLogs.tsx` | View chat history | Conversation display, timestamps |

---

## 🌐 Deployment

### **Build for Production**

```bash
npm run build
# or
yarn build
```

This creates an optimized production build in the `dist/` folder.

### **Deploy to Vercel**

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

3. Configure environment variables in Vercel dashboard

### **Deploy to Netlify**

1. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

2. Deploy:
```bash
netlify deploy --prod
```

3. Configure environment variables in Netlify dashboard

### **Deploy to Custom Domain**

1. Build the project: `npm run build`
2. Upload `dist/` folder to your web server
3. Configure environment variables on your server
4. Set up HTTPS with SSL certificate
5. Configure domain DNS settings

**Security Note**: Never commit `.env` to version control. Use hosting platform's environment variable settings.

---

## 🐛 Troubleshooting

### **Common Issues**

#### **1. Chatbot Not Remembering Context**

**Symptoms**: AI doesn't remember previous messages

**Solution**:
- Check `ChatWidget.tsx` conversation history implementation
- Verify welcome message is filtered out (`msg.id !== 'welcome'`)
- Ensure `conversationHistory` is passed to `askMistral()`
- Check browser console for errors

#### **2. Emails Not Sending**

**Symptoms**: Appointments saved but no email received

**Solution**:
- Check spam folder
- Verify EmailJS credentials in `.env`
- Check EmailJS dashboard for error logs
- Ensure email service is connected
- Verify template variables match code

#### **3. Firebase Permission Errors**

**Symptoms**: "Missing or insufficient permissions" error

**Solution**:
- Check `firestore.rules` is deployed
- Verify Firebase project is initialized
- Ensure Firestore database is created
- Deploy rules: `firebase deploy --only firestore:rules`

#### **4. Mistral AI Errors**

**Symptoms**: "Invalid API key" or no AI responses

**Solution**:
- Verify API key in `.env` matches Mistral Console
- Check for typos or extra spaces
- Restart development server after changing `.env`
- Check Mistral Console for API usage/errors

#### **5. Build Errors**

**Symptoms**: Build fails with TypeScript errors

**Solution**:
- Run `npm install` to ensure all dependencies installed
- Check TypeScript version compatibility
- Verify all imports use `type` keyword for interfaces
- Clear cache: `rm -rf node_modules package-lock.json && npm install`

#### **6. Styling Issues**

**Symptoms**: Layout broken or styles not applied

**Solution**:
- Ensure Tailwind CSS is properly configured
- Check `tailwind.config.js` includes all content paths
- Verify `@import "tailwindcss"` in `index.css`
- Clear browser cache and restart dev server

---

## 🤝 Contributing

We welcome contributions! Please follow these guidelines:

### **How to Contribute**

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### **Code Style**

- Use TypeScript for all new code
- Follow existing code formatting
- Add comments for complex logic
- Write meaningful commit messages
- Test your changes before submitting

---

## 📄 License

This project is licensed under the MIT License.

---

## 🙏 Acknowledgments

- **Mistral AI** - For providing the AI language model
- **EmailJS** - For client-side email service
- **Firebase** - For cloud database and hosting
- **React Team** - For the amazing UI library
- **Tailwind CSS** - For the utility-first CSS framework

---

## 📞 Support

For support, email bashartc13@gmail.com or open an issue on GitHub.

---

## 📊 Project Status

**Current Version**: 2.1.0

**Status**: ✅ Production Ready

**Last Updated**: February 10, 2024

---

## 🗺️ Roadmap

### **Version 2.2.0** (Planned)
- [ ] Multi-language support (English, Urdu, Arabic)
- [ ] Voice input/output for chatbot
- [ ] SMS notifications via Twilio
- [ ] Patient authentication system
- [ ] Appointment rescheduling

### **Version 2.3.0** (Planned)
- [ ] Video consultation integration
- [ ] Payment gateway integration
- [ ] Medical records upload
- [ ] Doctor availability calendar
- [ ] Advanced analytics dashboard

### **Version 3.0.0** (Future)
- [ ] Mobile app (React Native)
- [ ] Prescription management
- [ ] Lab report integration
- [ ] Insurance claim processing
- [ ] Multi-hospital support

---

**Made with ❤️ for better healthcare**
