import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />
      <div className="relative z-10 w-full max-w-3xl bg-hanoi-bg rounded-lg shadow-2xl overflow-hidden animate-[fadeIn_0.3s_ease-out]">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-white/80 hover:bg-hanoi-red hover:text-white rounded-full transition-colors duration-200"
        >
          <X size={24} />
        </button>
        <div className="max-h-[90vh] overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;