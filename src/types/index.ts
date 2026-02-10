// Message Types
export interface Message {
  id: string;
  role: 'user' | 'ai' | 'system';
  content: string;
  timestamp: Date;
}

// Appointment/Lead Types
export interface Appointment {
  id?: string;
  name: string;
  phoneOrEmail: string;
  department: string;
  preferredTime: string;
  reason?: string;
  status: 'new' | 'pending' | 'completed';
  hospitalId: string;
  createdAt: Date;
}

// Chat Log Types
export interface ChatLog {
  id?: string;
  userMessage: string;
  aiMessage: string;
  hospitalId: string;
  createdAt: Date;
}

// Hospital Configuration Types
export interface HospitalConfig {
  hospitalId: string;
  hospitalName: string;
  departments: string[];
  consultationFees: Record<string, string>;
  timings: string;
  emergencyContact: string;
  facilities: string[];
  address?: string;
  email?: string;
}

// Chat Widget State Types
export interface ChatWidgetState {
  isOpen: boolean;
  messages: Message[];
  isLoading: boolean;
  showAppointmentForm: boolean;
}

// Quick Reply Button Types
export interface QuickReply {
  id: string;
  label: string;
  action: string;
  icon?: string;
}

// Mistral API Types
export interface MistralMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

export interface MistralResponse {
  id: string;
  object: string;
  created: number;
  model: string;
  choices: Array<{
    index: number;
    message: {
      role: string;
      content: string;
    };
    finish_reason: string;
  }>;
  usage: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
  };
}
