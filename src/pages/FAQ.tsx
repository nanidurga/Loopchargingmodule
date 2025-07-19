/* eslint-disable react-refresh/only-export-components */
import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { HelpCircle } from 'lucide-react';
import { useNavigate, NavigateFunction } from 'react-router-dom';
import { faqs } from '../data/faqData';
import FAQItem from '../components/FAQItem';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const navigate = useNavigate();

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleContactClick = useCallback((navigate: NavigateFunction) => {
    navigate('/', { state: { scrollTo: 'contact' } });
  }, []);

  return (
    <div className="min-h-screen bg-dark-900">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-dark-900 to-dark-800" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <HelpCircle className="h-16 w-16 text-primary-500 mx-auto mb-6" />
            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-white/80 text-lg md:text-xl">
              Get answers to common questions about LCM technology, performance, and integration.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {[faqs.slice(0, 3), faqs.slice(3, 6)].map((faqGroup, groupIndex) => (
              <div key={groupIndex} className="bg-dark-800 rounded-xl border border-white/10 p-6 overflow-hidden">
                {faqGroup.map((faq, index) => (
                  <FAQItem
                    key={index + (groupIndex * 3)}
                    question={faq.question}
                    answer={faq.answer}
                    isOpen={openIndex === index + (groupIndex * 3)}
                    toggleOpen={() => toggleFAQ(index + (groupIndex * 3))}
                  />
                ))}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-white/80 mb-4">
              Have more questions? We're here to help.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button 
                onClick={() => handleContactClick(navigate)}
                className="inline-block bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-full font-medium transition-colors"
              >
                Contact Us
              </button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
