MediDesk by Aykays Assist — Developer Task Brief

Objective
Build a fully functional MediDesk AI Front-Desk Assistant for hospitals, clinics, and healthcare centers that can be deployed on any website (WordPress, Wix, Webflow, or custom PHP server) to handle patient inquiries, appointment requests, and basic follow-ups.
The initial version will use generic hospital data for demonstration purposes and can later be configured with real hospital-specific data.
The solution should be fully frontend-based, using React for the widget, and data stored in Supabase, Firebase, or Google Sheets. AI processing will use Mistral API. No Node.js or backend is required on the client server.

Core Features
1. Website Chat Widget
Lightweight, responsive React widget deployable via a simple <script> tag on any website platform.
Display:
Welcome message:
 "Hi, I'm MediDesk. How can I assist you today?"


Quick reply buttons:
Book Appointment


Doctors & Departments


Consultation Fees


Hospital Timings


Emergency Contact


Features:
Supports multiple concurrent users


Mobile-friendly interface


Optional WhatsApp integration (secure API, no login required)



2. AI Knowledge Base (Generic Hospital Data)
Train the chatbot on common hospital queries, including:
Doctors and departments


Consultation fees


Appointment process


OPD timings


Emergency services


Available facilities (lab, pharmacy, ICU, etc.)


Contact information (email, phone, address)


Fallback response:
"I’m not sure about that, but I can notify hospital staff to get back to you."
AI processing via Mistral API.

3. Patient Inquiry & Lead Capture
Collect patient information:
Patient Name


Phone Number / Email


Department or Doctor Required


Preferred Appointment Date & Time


Brief Reason for Visit (optional)


Store captured leads securely in:
Supabase, Firebase, or Google Sheets


Admin panel (future version) will allow viewing captured inquiries.

4. Follow-ups and Notifications
Automated follow-up messages for incomplete appointment requests


Notify hospital admin via email or WhatsApp API when a new inquiry is captured


Reminder messages for pending appointment confirmations



5. Human Escalation
Detect queries AI cannot confidently answer.
Provide option:
 "Talk to Hospital Reception"
System will:
Forward user information to admin via email/notification


Mark chat as requiring human follow-up



6. Admin Panel (Basic — Demo Purpose)
Simple internal page to view:
Chat logs


Patient inquiries


Appointment requests


Features:
Login with fixed demo account


Read-only demo environment for testing purposes



7. Security & Privacy
Chatbot does not require WhatsApp login credentials from hospital


Data stored securely


No medical records or sensitive patient data stored in demo version


Only inquiry-level information collected



Technical Requirements
Frontend:
React (chat widget)


Data Storage:
Supabase, Firebase, or Google Sheets


AI Engine:
Mistral API


Website Integration:
Simple <script> tag deployment


Compatible with WordPress, Wix, Webflow, and custom PHP sites


Configuration via JSON file:
{
  "hospital_name": "Demo Hospital",
  "departments": ["General Medicine", "Pediatrics", "Cardiology"],
  "consultation_fees": {
    "General Medicine": "PKR 2000",
    "Pediatrics": "PKR 2500"
  },
  "hospital_timings": "24/7 Emergency, OPD 9am - 5pm",
  "contact_number": "+92XXXXXXXXXX"
}

Hosting:
Widget hosted on developer/Aykays server


Client embeds script on their website



Deliverables
Working MediDesk chatbot deployed as a widget on a demo hospital website


Generic healthcare knowledge base with sample hospital data


Inquiry capture system storing data securely


Demo admin panel to view chat logs and inquiries


Deployment instructions and script snippet for embedding on any website



Notes
Initial version uses generic data but must be scalable for future hospital-specific configurations


Focus on trust, fast response, and reliability


One universal solution should work for multiple hospitals without requiring a custom backend per client



