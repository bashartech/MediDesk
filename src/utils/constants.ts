// API Endpoints
export const MISTRAL_API_URL = "https://api.mistral.ai/v1/chat/completions";

// Mistral Configuration
export const MISTRAL_MODEL = "mistral-small-latest";
export const MISTRAL_TEMPERATURE = 0.2; // Low creativity for consistent responses
export const MISTRAL_MAX_TOKENS = 500;

// Chat Widget Configuration
export const WIDGET_POSITION = {
  bottom: '20px',
  right: '20px'
};

export const WIDGET_SIZE = {
  width: '380px',
  height: '600px',
  mobileHeight: '100vh'
};

// Quick Reply Actions
export const QUICK_REPLIES = [
  {
    id: 'book-appointment',
    label: 'Book Appointment',
    action: 'BOOK_APPOINTMENT',
    icon: '📅'
  },
  {
    id: 'doctors-departments',
    label: 'Doctors & Departments',
    action: 'DOCTORS_DEPARTMENTS',
    icon: '👨‍⚕️'
  },
  {
    id: 'consultation-fees',
    label: 'Consultation Fees',
    action: 'CONSULTATION_FEES',
    icon: '💰'
  },
  {
    id: 'hospital-timings',
    label: 'Hospital Timings',
    action: 'HOSPITAL_TIMINGS',
    icon: '🕐'
  },
  {
    id: 'emergency-contact',
    label: 'Emergency Contact',
    action: 'EMERGENCY_CONTACT',
    icon: '🚨'
  }
];

// Welcome Message
export const WELCOME_MESSAGE = "Hi! I'm MediDesk, your AI front desk assistant. How can I help you today?";

// Fallback Response
export const FALLBACK_RESPONSE = "I'm not sure about that, but I can notify hospital staff to get back to you. Would you like to book an appointment?";

// Firestore Collections
export const COLLECTIONS = {
  CHATS: 'chats',
  APPOINTMENTS: 'appointments'
};

// Admin Configuration
export const ADMIN_CREDENTIALS = {
  username: 'admin',
  password: 'demo123' // Demo only - replace with proper auth in production
};

// Email Configuration
export const ADMIN_EMAIL = 'admin@demomedical.com';

// Error Messages
export const ERROR_MESSAGES = {
  NETWORK_ERROR: 'Network error. Please check your connection and try again.',
  AI_ERROR: 'Sorry, I encountered an error. Please try again.',
  FIRESTORE_ERROR: 'Failed to save data. Please try again.',
  VALIDATION_ERROR: 'Please fill in all required fields correctly.'
};

// Success Messages
export const SUCCESS_MESSAGES = {
  APPOINTMENT_BOOKED: 'Thank you! Your appointment request has been submitted. Our staff will contact you shortly.',
  DATA_SAVED: 'Information saved successfully.'
};
