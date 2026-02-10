import type { MistralMessage, MistralResponse } from '../types';
import {
  MISTRAL_API_URL,
  MISTRAL_MODEL,
  MISTRAL_TEMPERATURE,
  MISTRAL_MAX_TOKENS,
  FALLBACK_RESPONSE
} from '../utils/constants';
import { getHospitalDataForAI } from './hospitalConfig';

/**
 * Mistral AI Service
 * Handles all AI chat interactions with strict safety controls
 */

// System prompt with strict medical safety rules
const getSystemPrompt = (): string => {
  const hospitalData = getHospitalDataForAI();

  return `You are MediDesk, a professional hospital front-desk assistant AI.

STRICT RULES (YOU MUST FOLLOW THESE):
1. You do NOT provide medical advice, diagnosis, or treatment recommendations
2. You do NOT answer medical questions about symptoms, diseases, or medications
3. You ONLY answer questions using the hospital data provided below
4. You act ONLY as a front-desk receptionist helping with:
   - Appointment booking information
   - Hospital timings and contact details
   - Department information and doctor availability
   - Consultation fees
   - Hospital facilities and services
   - General administrative queries

5. If asked about medical conditions, symptoms, or treatment:
   - Politely decline and suggest booking an appointment with a doctor
   - Example: "I cannot provide medical advice. I recommend booking an appointment with our [relevant department] for proper medical consultation."

6. If information is not in the hospital data below, respond with:
   "${FALLBACK_RESPONSE}"

7. Be friendly, professional, and concise
8. Always prioritize patient safety by not giving medical information

HOSPITAL DATA:
${hospitalData}

Remember: You are a front-desk assistant, NOT a medical professional. Your role is to help patients with administrative tasks and direct them to appropriate medical staff.`;
};

/**
 * Send a message to Mistral AI and get response
 * @param userMessage - The user's message
 * @param conversationHistory - Optional conversation history for context
 * @returns AI response text
 */
export const askMistral = async (
  userMessage: string,
  conversationHistory: MistralMessage[] = []
): Promise<string> => {
  try {
    // Validate API key
    const apiKey = import.meta.env.VITE_MISTRAL_API_KEY;
    if (!apiKey) {
      throw new Error('Mistral API key is not configured');
    }

    // Build messages array with system prompt
    const messages: MistralMessage[] = [
      { role: 'system', content: getSystemPrompt() },
      ...conversationHistory,
      { role: 'user', content: userMessage }
    ];

    // Make API request
    const response = await fetch(MISTRAL_API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: MISTRAL_MODEL,
        temperature: MISTRAL_TEMPERATURE,
        max_tokens: MISTRAL_MAX_TOKENS,
        messages: messages
      })
    });

    // Handle HTTP errors
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('Mistral API error:', errorData);
      throw new Error(`Mistral API error: ${response.status}`);
    }

    // Parse response
    const data: MistralResponse = await response.json();

    // Extract AI message
    if (data.choices && data.choices.length > 0) {
      const aiMessage = data.choices[0].message.content;
      return aiMessage;
    } else {
      throw new Error('No response from Mistral AI');
    }

  } catch (error) {
    console.error('Error calling Mistral AI:', error);

    // Return fallback response on error
    return FALLBACK_RESPONSE;
  }
};

/**
 * Validate if a message contains medical advice request
 * This is an additional safety layer
 */
export const containsMedicalQuery = (message: string): boolean => {
  const medicalKeywords = [
    'symptom', 'pain', 'disease', 'medication', 'drug', 'treatment',
    'diagnose', 'diagnosis', 'cure', 'sick', 'illness', 'infection',
    'fever', 'headache', 'prescription', 'medicine', 'tablet', 'injection'
  ];

  const lowerMessage = message.toLowerCase();
  return medicalKeywords.some(keyword => lowerMessage.includes(keyword));
};

/**
 * Get a safe response for medical queries
 */
export const getMedicalQueryResponse = (department?: string): string => {
  const dept = department || 'appropriate department';
  return `I cannot provide medical advice or diagnosis. For medical concerns, I recommend booking an appointment with our ${dept}. Our qualified doctors will be able to help you properly. Would you like to book an appointment?`;
};
