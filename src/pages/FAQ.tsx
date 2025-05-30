import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

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

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const navigate = useNavigate();

  const faqs = [
    {
      question: "How much power does LCM generate?",
      answer: "LCM typically generates between 1-3 kW of power depending on the vehicle speed and airflow conditions. At highway speeds of 60+ km/h, it reaches optimal performance, providing continuous charging that can significantly extend your EV's range."
    },
    {
      question: "Does it work on existing EVs?",
      answer: "While LCM is primarily designed for integration into new EV models at the manufacturing stage, we are developing retrofit solutions for select existing EV models. The feasibility depends on the vehicle's hood space and front-end design. Contact us for a specific assessment for your vehicle."
    },
    {
      question: "What about battery wear and safety?",
      answer: "LCM is designed with battery health as a priority. The system includes advanced power management that delivers smooth, consistent charging current that complies with all battery management system (BMS) protocols. This helps maintain battery health and can actually extend battery lifespan by reducing deep discharge cycles."
    },
    {
      question: "What happens in dust or rain?",
      answer: "LCM is engineered to automotive-grade specifications for all weather conditions. The system includes protective housing that prevents water ingress and filters that manage dust and debris. Performance remains consistent in rain, and the system is designed to operate across a wide temperature range."
    },
    {
      question: "Does LCM increase vehicle weight significantly?",
      answer: "No, the entire LCM system typically weighs less than 10kg, which is significantly lighter than alternative range-extension solutions such as additional battery capacity. The weight-to-benefit ratio makes it an extremely efficient addition to any EV."
    },
    {
      question: "How does LCM affect vehicle aerodynamics?",
      answer: "LCM is designed to have zero additional aerodynamic drag. The system is integrated within the existing hood space and utilizes airflow that is already entering the vehicle's front-end. Extensive wind tunnel testing confirms that vehicles with LCM maintain their original drag coefficient."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleContactClick = () => {
    navigate('/', { state: { scrollTo: 'contact' } });
  };

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
                onClick={handleContactClick}
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