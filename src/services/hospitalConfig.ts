import type { HospitalConfig } from '../types';

// Demo Hospital Configuration
// This can be easily customized for different hospitals
export const hospitalConfig: HospitalConfig = {
  hospitalId: "BT hospital",
  hospitalName: "BT Medical Center",
  departments: [
    "General Medicine",
    "Pediatrics",
    "Cardiology",
    "Orthopedics",
    "Gynecology",
    "Dermatology",
    "ENT (Ear, Nose, Throat)",
    "Neurology",
    "Emergency"
  ],
  consultationFees: {
    "General Medicine": "PKR 2000",
    "Pediatrics": "PKR 2500",
    "Cardiology": "PKR 3000",
    "Orthopedics": "PKR 2800",
    "Gynecology": "PKR 2500",
    "Dermatology": "PKR 2200",
    "ENT (Ear, Nose, Throat)": "PKR 2000",
    "Neurology": "PKR 3500",
    "Emergency": "Free (Emergency cases)"
  },
  timings: "OPD: 9:00 AM - 5:00 PM (Mon-Sat), Emergency: 24/7",
  emergencyContact: "+92-XXX-XXXXXXX",
  facilities: [
    "24/7 Emergency Services",
    "In-house Laboratory",
    "Pharmacy",
    "ICU (Intensive Care Unit)",
    "X-Ray & Ultrasound",
    "Operation Theater",
    "Ambulance Service",
    "Blood Bank"
  ],
  address: "123 Medical Street, City Center, Pakistan",
  email: "info@demomedical.com"
};

// Function to get hospital data as JSON string for AI prompt
export const getHospitalDataForAI = (): string => {
  return JSON.stringify(hospitalConfig, null, 2);
};
