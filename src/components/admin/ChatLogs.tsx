import React, { useState } from 'react';
import type { ChatLog } from '../../types';

interface ChatLogsProps {
  chats: ChatLog[];
  onRefresh: () => void;
}

const ChatLogs: React.FC<ChatLogsProps> = ({ chats, onRefresh }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedChat, setExpandedChat] = useState<string | null>(null);

  // Filter chats
  const filteredChats = chats.filter((chat) => {
    const matchesSearch =
      chat.userMessage.toLowerCase().includes(searchTerm.toLowerCase()) ||
      chat.aiMessage.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesSearch;
  });

  const toggleChat = (chatId: string) => {
    setExpandedChat(expandedChat === chatId ? null : chatId);
  };

  return (
    <div className="bg-white rounded-lg shadow">
      {/* Header */}
      <div className="p-6 border-b">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-gray-900">Chat Logs</h2>
          <button
            onClick={onRefresh}
            className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Refresh
          </button>
        </div>

        {/* Search */}
        <div>
          <input
            type="text"
            placeholder="Search chat messages..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Chat List */}
      <div className="divide-y divide-gray-200">
        {filteredChats.length === 0 ? (
          <div className="px-6 py-8 text-center text-gray-500">
            No chat logs found
          </div>
        ) : (
          filteredChats.map((chat) => (
            <div key={chat.id} className="p-6 hover:bg-gray-50">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  {/* User Message */}
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="inline-flex items-center justify-center w-6 h-6 bg-blue-100 text-blue-600 rounded-full text-xs font-medium">
                        U
                      </span>
                      <span className="text-sm font-medium text-gray-900">User</span>
                      <span className="text-xs text-gray-500">
                        {new Date(chat.createdAt).toLocaleString()}
                      </span>
                    </div>
                    <div className="ml-8">
                      <p className="text-sm text-gray-700 bg-blue-50 rounded-lg p-3">
                        {chat.userMessage}
                      </p>
                    </div>
                  </div>

                  {/* AI Response */}
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="inline-flex items-center justify-center w-6 h-6 bg-green-100 text-green-600 rounded-full text-xs font-medium">
                        AI
                      </span>
                      <span className="text-sm font-medium text-gray-900">MediDesk</span>
                    </div>
                    <div className="ml-8">
                      <p className={`text-sm text-gray-700 bg-gray-50 rounded-lg p-3 ${
                        expandedChat === chat.id ? '' : 'line-clamp-3'
                      }`}>
                        {chat.aiMessage}
                      </p>
                      {chat.aiMessage.length > 150 && (
                        <button
                          onClick={() => toggleChat(chat.id!)}
                          className="ml-8 mt-2 text-xs text-blue-600 hover:text-blue-700 font-medium"
                        >
                          {expandedChat === chat.id ? 'Show less' : 'Show more'}
                        </button>
                      )}
                    </div>
                  </div>
                </div>

                {/* Hospital ID Badge */}
                <div className="ml-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                    {chat.hospitalId}
                  </span>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Footer */}
      <div className="px-6 py-4 bg-gray-50 border-t">
        <p className="text-sm text-gray-600">
          Showing {filteredChats.length} of {chats.length} chat logs
        </p>
      </div>
    </div>
  );
};

export default ChatLogs;
