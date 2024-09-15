import { Send as SendIcon } from 'lucide-react';
import React from 'react';

interface SendProps {
  className?: string; // Make className optional
}

const Send: React.FC<SendProps> = ({ className }) => {
  return (
    <SendIcon
      className={`h-4 w-4 ${className}`} // Apply additional classes if provided
      aria-hidden="true" // Hide the icon from screen readers
    />
  );
};

export default Send;
