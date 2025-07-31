import React from 'react';
import { ChevronDown } from 'lucide-react';
import { ChevronUp } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  toggleOpen: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, toggleOpen }) => {
  return (
    <div className="border-b border-white/10 last:border-0">
      <button
        className="w-full flex justify-between items-center py-5 text-left focus:outline-none"
        onClick={toggleOpen}
      >
        <h3 className="font-display font-medium text-lg text-white">{question}</h3>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-primary-400 flex-shrink-0" />
        ) : (
          <ChevronDown className="h-5 w-5 text-white/60 flex-shrink-0" />
        )}
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100 pb-5' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-white/70">{answer}</p>
      </div>
    </div>
  );
};

export default FAQItem;
