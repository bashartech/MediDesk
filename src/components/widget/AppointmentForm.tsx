import React, { useState } from 'react';
import { saveAppointment } from '../../services/firestore';
import { sendAppointmentEmail } from '../../services/emailjs';
import { hospitalConfig } from '../../services/hospitalConfig';
import { ERROR_MESSAGES } from '../../utils/constants';

interface AppointmentFormProps {
  onClose: () => void;
  onSuccess: () => void;
}

const AppointmentForm: React.FC<AppointmentFormProps> = ({ onClose, onSuccess }) => {
  const [formData, setFormData] = useState({
    name: '',
    phoneOrEmail: '',
    department: '',
    preferredTime: '',
    reason: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
  };

  const validateForm = (): boolean => {
    if (!formData.name.trim()) {
      setError('Please enter your name');
      return false;
    }
    if (!formData.phoneOrEmail.trim()) {
      setError('Please enter your phone or email');
      return false;
    }
    if (!formData.department) {
      setError('Please select a department');
      return false;
    }
    if (!formData.preferredTime.trim()) {
      setError('Please enter your preferred time');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setError('');

    try {
      // Save to Firestore
      const appointmentId = await saveAppointment({
        name: formData.name.trim(),
        phoneOrEmail: formData.phoneOrEmail.trim(),
        department: formData.department,
        preferredTime: formData.preferredTime.trim(),
        reason: formData.reason.trim(),
        status: 'new',
        hospitalId: hospitalConfig.hospitalId
      });

      if (!appointmentId) {
        setError(ERROR_MESSAGES.FIRESTORE_ERROR);
        setIsSubmitting(false);
        return;
      }

      // Send email notification via EmailJS
      const emailSent = await sendAppointmentEmail({
        patient_name: formData.name.trim(),
        phone_or_email: formData.phoneOrEmail.trim(),
        department: formData.department,
        preferred_time: formData.preferredTime.trim(),
        reason: formData.reason.trim() || 'Not specified',
        hospital_name: hospitalConfig.hospitalName
      });

      if (emailSent) {
        console.log('✅ Email notification sent successfully to admin');
      } else {
        console.warn('⚠️ Email notification failed, but appointment was saved');
      }

      // Show success message regardless of email status
      onSuccess();
    } catch (err) {
      console.error('Error submitting appointment:', err);
      setError(ERROR_MESSAGES.FIRESTORE_ERROR);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="absolute inset-0 bg-white z-10 flex flex-col rounded-2xl">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-5 py-4 flex items-center justify-between rounded-t-2xl">
        <h3 className="font-semibold text-lg">Book Appointment</h3>
        <button
          onClick={onClose}
          className="text-white hover:text-blue-100 transition-colors"
          aria-label="Close form"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Form */}
      <div className="flex-1 overflow-y-auto px-5 py-5">
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your full name"
              required
            />
          </div>

          {/* Phone or Email */}
          <div>
            <label htmlFor="phoneOrEmail" className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number or Email *
            </label>
            <input
              type="text"
              id="phoneOrEmail"
              name="phoneOrEmail"
              value={formData.phoneOrEmail}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="+92-XXX-XXXXXXX or email@example.com"
              required
            />
          </div>

          {/* Department */}
          <div>
            <label htmlFor="department" className="block text-sm font-medium text-gray-700 mb-2">
              Department *
            </label>
            <select
              id="department"
              name="department"
              value={formData.department}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            >
              <option value="">Select a department</option>
              {hospitalConfig.departments.map((dept) => (
                <option key={dept} value={dept}>
                  {dept}
                </option>
              ))}
            </select>
          </div>

          {/* Preferred Time */}
          <div>
            <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-2">
              Preferred Date & Time *
            </label>
            <input
              type="text"
              id="preferredTime"
              name="preferredTime"
              value={formData.preferredTime}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="e.g., Tomorrow 10:00 AM"
              required
            />
          </div>

          {/* Reason (Optional) */}
          <div>
            <label htmlFor="reason" className="block text-sm font-medium text-gray-700 mb-2">
              Reason for Visit (Optional)
            </label>
            <textarea
              id="reason"
              name="reason"
              value={formData.reason}
              onChange={handleChange}
              rows={3}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              placeholder="Brief description..."
            />
          </div>

          {/* Error Message */}
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm">
              {error}
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3.5 rounded-xl transition-all shadow-md hover:shadow-lg disabled:bg-gray-400 disabled:cursor-not-allowed disabled:shadow-none"
          >
            {isSubmitting ? 'Submitting...' : 'Submit Appointment Request'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AppointmentForm;
