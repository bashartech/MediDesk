import React, { useState, useEffect } from 'react';
import type { Message } from '../../types';
import { WELCOME_MESSAGE } from '../../utils/constants';
import { askMistral } from '../../services/mistral';
import { saveChat } from '../../services/firestore';
import { hospitalConfig } from '../../services/hospitalConfig';
import MessageList from './MessageList';
import QuickReplies from './QuickReplies';
import InputBox from './InputBox';
import AppointmentForm from './AppointmentForm';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showAppointmentForm, setShowAppointmentForm] = useState(false);
  const [showQuickReplies, setShowQuickReplies] = useState(true);

  // Initialize with welcome message
  useEffect(() => {
    if (messages.length === 0) {
      const welcomeMsg: Message = {
        id: 'welcome',
        role: 'ai',
        content: WELCOME_MESSAGE,
        timestamp: new Date()
      };
      setMessages([welcomeMsg]);
    }
  }, []);

  // Handle user message
  const handleSendMessage = async (content: string) => {
    if (!content.trim()) return;

    // Hide quick replies after first interaction
    setShowQuickReplies(false);

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: content.trim(),
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);

    // Show loading
    setIsLoading(true);

    try {
      // Build conversation history for Mistral (last 10 messages for context)
      // IMPORTANT: Include messages up to but not including the current user message
      // since askMistral will add the current message separately
      const conversationHistory = messages
        .filter(msg => msg.role !== 'system' && msg.id !== 'welcome') // Exclude system/welcome messages
        .slice(-10) // Keep last 10 messages for context
        .map(msg => ({
          role: msg.role === 'ai' ? 'assistant' as const : msg.role as 'user',
          content: msg.content
        }));

      // Get AI response with conversation history
      const aiResponse = await askMistral(content.trim(), conversationHistory);

      // Add AI message
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'ai',
        content: aiResponse,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiMessage]);

      // Save to Firestore
      await saveChat(content.trim(), aiResponse, hospitalConfig.hospitalId);

    } catch (error) {
      console.error('Error sending message:', error);

      // Add error message
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'ai',
        content: 'Sorry, I encountered an error. Please try again.',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle quick reply click
  const handleQuickReply = async (action: string, label: string) => {
    setShowQuickReplies(false);

    if (action === 'BOOK_APPOINTMENT') {
      setShowAppointmentForm(true);
      return;
    }

    // Send as user message
    await handleSendMessage(label);
  };

  // Handle appointment form close
  const handleAppointmentFormClose = () => {
    setShowAppointmentForm(false);
  };

  // Handle appointment success
  const handleAppointmentSuccess = () => {
    setShowAppointmentForm(false);

    const successMessage: Message = {
      id: Date.now().toString(),
      role: 'ai',
      content: 'Thank you! Your appointment request has been submitted. Our staff will contact you shortly.',
      timestamp: new Date()
    };
    setMessages(prev => [...prev, successMessage]);
  };

  return (
    <>
      {/* Chat Widget Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-5 right-5 w-16 h-16 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 z-50 hover:scale-110"
          aria-label="Open chat"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-[400px] h-[650px] bg-white rounded-2xl shadow-2xl flex flex-col z-50 max-h-[90vh] md:max-h-[650px]">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-5 py-4 rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-blue-600 font-bold">
                MD
              </div>
              <div>
                <h3 className="font-semibold">MediDesk</h3>
                <p className="text-xs text-blue-100">AI Front Desk Assistant</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-blue-100 transition-colors"
              aria-label="Close chat"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 text-gray-900 overflow-hidden flex flex-col relative bg-gray-50">
            <MessageList messages={messages} isLoading={isLoading} />

            {/* Quick Replies */}
            {showQuickReplies && messages.length <= 1 && !showAppointmentForm && (
              <QuickReplies onQuickReply={handleQuickReply} />
            )}

            {/* Appointment Form */}
            {showAppointmentForm && (
              <AppointmentForm
                onClose={handleAppointmentFormClose}
                onSuccess={handleAppointmentSuccess}
              />
            )}
          </div>

          {/* Input Box */}
          {!showAppointmentForm && (
            <InputBox
              onSendMessage={handleSendMessage}
              disabled={isLoading}
            />
          )}
        </div>
      )}
    </>
  );
};

export default ChatWidget;
