import emailjs from 'emailjs-com';

/**
 * EmailJS Service for sending appointment notifications
 * No backend required - sends emails directly from frontend
 */

interface AppointmentEmailData {
  patient_name: string;
  phone_or_email: string;
  department: string;
  preferred_time: string;
  reason?: string;
  hospital_name: string;
}

/**
 * Send appointment notification email to admin
 * @param appointmentData - Appointment details
 * @returns Promise<boolean> - Success status
 */
export const sendAppointmentEmail = async (
  appointmentData: AppointmentEmailData
): Promise<boolean> => {
  try {
    // Get EmailJS credentials from environment variables
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // Validate credentials
    if (!serviceId || !templateId || !publicKey) {
      console.error('EmailJS credentials are missing in .env file');
      return false;
    }

    // Prepare template parameters
    // IMPORTANT: These variable names must match your EmailJS template
    const templateParams = {
      patient_name: appointmentData.patient_name,
      phone_or_email: appointmentData.phone_or_email,
      department: appointmentData.department,
      preferred_time: appointmentData.preferred_time,
      reason: appointmentData.reason || 'Not specified',
      hospital_name: appointmentData.hospital_name,
      submission_date: new Date().toLocaleString()
    };

    // Send email via EmailJS
    const response = await emailjs.send(
      serviceId,
      templateId,
      templateParams,
      publicKey
    );

    console.log('Email sent successfully:', response.status, response.text);
    return true;

  } catch (error) {
    console.error('Failed to send email:', error);
    return false;
  }
};

/**
 * Initialize EmailJS (optional - for better performance)
 * Call this once when app loads
 */
export const initEmailJS = () => {
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  if (publicKey) {
    emailjs.init(publicKey);
    console.log('EmailJS initialized');
  }
};
