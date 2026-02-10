import React from 'react';
import { QUICK_REPLIES } from '../../utils/constants';

interface QuickRepliesProps {
  onQuickReply: (action: string, label: string) => void;
}

const QuickReplies: React.FC<QuickRepliesProps> = ({ onQuickReply }) => {
  return (
    <div className="px-5 pb-4 bg-gray-50">
      <p className="text-xs text-gray-500 mb-3 font-medium">Quick actions:</p>
      <div className="flex text-white flex-wrap gap-2">
        {QUICK_REPLIES.map((reply) => (
          <button
            key={reply.id}
            onClick={() => onQuickReply(reply.action, reply.label)}
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-white hover:bg-blue-50 text-sm text-gray-100 border border-gray-200 rounded-full transition-all hover:border-blue-400 hover:shadow-sm"
          >
            <span>{reply.icon}</span>
            <span>{reply.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuickReplies;
