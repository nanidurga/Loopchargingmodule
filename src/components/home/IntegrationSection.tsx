import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { Cpu } from 'lucide-react';
import { Cable } from 'lucide-react';
import { Car } from 'lucide-react';
import { scrollToContact } from '../../utils/navigation';
import manufactIMG from '../../assets/Manufacturing.webp';

interface IntegrationFeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const IntegrationFeature: React.FC<IntegrationFeatureProps> = ({ icon, title, description }) => {
  return (
    <div className="flex items-start">
      <div className="mr-4 mt-1 bg-primary-500/20 p-2 rounded-lg text-primary-400">
        {icon}
      </div>
      <div>
        <h3 className="font-medium text-white text-lg mb-2">{title}</h3>
        <p className="text-white/70">{description}</p>
      </div>
    </div>
  );
};

const IntegrationSection: React.FC = () => {
  const handlePartnershipClick = (e: React.MouseEvent) => {
    e.preventDefault();
    scrollToContact('partnership');
  };

  const features = [
    {
      icon: <Car className="h-5 w-5" />,
      title: "Integration Feasibility",
      description: "Designed for seamless integration into existing EV hood spaces with minimal modifications to the vehicle's structure."
    },
    {
      icon: <ShieldCheck className="h-5 w-5" />,
      title: "Safety & Compliance",
      description: "Engineered to meet all automotive safety standards with comprehensive testing for durability, vibration resistance, and weatherproofing."
    },
    {
      icon: <Cable className="h-5 w-5" />,
      title: "Real-Time Battery Communication",
      description: "Advanced BMS integration allows for intelligent charging that adapts to your battery's current state and requirements."
    },
    {
      icon: <Cpu className="h-5 w-5" />,
      title: "OEM Customization",
      description: "Flexible design allows for customization to meet specific OEM requirements and vehicle form factors."
    }
  ];

  return (
    <section id="integration" className="py-20 bg-gradient-to-b from-dark-800 to-dark-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">
            EV Integration
          </h2>
          <p className="text-white/70 text-lg">
            We're currently testing LCM with modified EVs to ensure seamless integration for manufacturers.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-dark-800 border border-white/10 rounded-2xl overflow-hidden shadow-lg mb-6">
              <img 
                src={manufactIMG} 
                alt="EV CAD Diagram with LCM" 
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
            <div className="bg-dark-800 border border-white/10 rounded-xl p-4">
              <h4 className="font-display font-medium text-white mb-2">Implementation Process</h4>
              <ol className="space-y-2">
                <li className="flex items-center text-white/70">
                  <span className="bg-primary-500 text-white w-5 h-5 rounded-full flex items-center justify-center mr-3 flex-shrink-0 text-xs font-medium">1</span>
                  Initial assessment of vehicle hood space and airflow dynamics
                </li>
                <li className="flex items-center text-white/70">
                  <span className="bg-primary-500 text-white w-5 h-5 rounded-full flex items-center justify-center mr-3 flex-shrink-0 text-xs font-medium">2</span>
                  Custom LCM design adaptation for specific vehicle model
                </li>
                <li className="flex items-center text-white/70">
                  <span className="bg-primary-500 text-white w-5 h-5 rounded-full flex items-center justify-center mr-3 flex-shrink-0 text-xs font-medium">3</span>
                  Integration with vehicle's battery management system
                </li>
                <li className="flex items-center text-white/70">
                  <span className="bg-primary-500 text-white w-5 h-5 rounded-full flex items-center justify-center mr-3 flex-shrink-0 text-xs font-medium">4</span>
                  Testing phase with performance monitoring and optimization
                </li>
                <li className="flex items-center text-white/70">
                  <span className="bg-primary-500 text-white w-5 h-5 rounded-full flex items-center justify-center mr-3 flex-shrink-0 text-xs font-medium">5</span>
                  Final implementation and production setup
                </li>
              </ol>
            </div>
          </div>

          <div>
            <div className="space-y-8">
              {features.map((feature, index) => (
                <IntegrationFeature
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>

            <div className="mt-10 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-xl p-6 border border-white/10">
              <h3 className="font-display font-semibold text-xl text-white mb-3">
                Partner with us for early integration
              </h3>
              <p className="text-white/80 mb-4">
                We're looking for forward-thinking EV manufacturers interested in being at the forefront of this technology. Early adopters will have the opportunity to shape the development and gain a competitive advantage.
              </p>
              <a 
                href="#contact" 
                onClick={handlePartnershipClick}
                className="inline-block bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-full font-medium transition-colors"
              >
                Explore Partnership Opportunities
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationSection;