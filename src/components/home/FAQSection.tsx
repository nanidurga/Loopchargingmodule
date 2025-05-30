import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { scrollToContact } from '../../utils/navigation';

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

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    scrollToContact('other');
  };

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

  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-dark-800 to-dark-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-white/70 text-lg">
            Get answers to common questions about LCM technology, performance, and integration.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-dark-800 rounded-xl border border-white/10 p-6 overflow-hidden">
            {faqs.slice(0, 3).map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                toggleOpen={() => toggleFAQ(index)}
              />
            ))}
          </div>
          
          <div className="bg-dark-800 rounded-xl border border-white/10 p-6 overflow-hidden">
            {faqs.slice(3, 6).map((faq, index) => (
              <FAQItem
                key={index + 3}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index + 3}
                toggleOpen={() => toggleFAQ(index + 3)}
              />
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-white/80 mb-4">
            Have more questions? We're here to help.
          </p>
          <a 
            href="#contact" 
            onClick={handleContactClick}
            className="inline-block bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-full font-medium transition-colors"
          >
            Ask Us Anything
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;