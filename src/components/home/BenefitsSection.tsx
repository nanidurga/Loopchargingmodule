import React from 'react';
import { Wind, Battery, Gauge, Activity, Leaf, Building2 } from 'lucide-react';
import LCMImage from '../../assets/difdesign.webp';

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-dark-800 hover:bg-dark-700 border border-white/10 rounded-xl p-6 transition-all duration-300 group">
      <div className="bg-primary-500/10 text-primary-400 p-3 rounded-lg inline-flex mb-4 group-hover:bg-primary-500 group-hover:text-white transition-all duration-300">
        {icon}
      </div>
      <h3 className="font-display font-semibold text-xl text-white mb-2">{title}</h3>
      <p className="text-white/70">{description}</p>
    </div>
  );
};

const BenefitsSection: React.FC = () => {
  const benefits = [
    {
      icon: <Wind className="h-6 w-6" />,
      title: "Zero Additional Drag",
      description: "Strategically placed to utilize natural airflow without adding resistance to the vehicle's aerodynamics."
    },
    {
      icon: <Battery className="h-6 w-6" />,
      title: "Continuous In-Drive Charging",
      description: "Provides a constant power source while driving, extending range and reducing charging stops."
    },
    {
      icon: <Gauge className="h-6 w-6" />,
      title: "Works at ≥30 km/h",
      description: "Begins generating power at just 30 km/h, making it effective for both city and highway driving."
    },
    {
      icon: <Activity className="h-6 w-6" />,
      title: "Smooth Battery Health Maintenance",
      description: "Delivers consistent power input that helps maintain optimal battery health and longevity."
    },
    {
      icon: <Leaf className="h-6 w-6" />,
      title: "Eco-Friendly Power",
      description: "Generates clean energy from an otherwise wasted resource, further enhancing the sustainability of EVs."
    },
    {
      icon: <Building2 className="h-6 w-6" />,
      title: "Perfect for Urban Conditions",
      description: "Especially effective in traffic conditions where traditional regenerative braking is less efficient."
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-gradient-to-b from-dark-800 to-dark-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">
            Why Choose LCM Technology?
          </h2>
          <p className="text-white/70 text-lg">
            Our innovative charging solution offers unique advantages that complement and enhance existing EV technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>

        <div className="bg-gradient-to-r from-primary-500/20 via-secondary-500/20 to-primary-500/20 rounded-2xl p-8 border border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-display font-semibold text-2xl text-white mb-4">
                Different By Design
              </h3>
              <p className="text-white/80 mb-4">
                Unlike solar panels that depend on sunlight or external chargers that require stopping, LCM works seamlessly while you drive, in any weather, day or night.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-white/80">
                  <span className="h-2 w-2 bg-primary-500 rounded-full mr-2"></span>
                  No dependency on external conditions
                </li>
                <li className="flex items-center text-white/80">
                  <span className="h-2 w-2 bg-primary-500 rounded-full mr-2"></span>
                  Complements regenerative braking
                </li>
                <li className="flex items-center text-white/80">
                  <span className="h-2 w-2 bg-primary-500 rounded-full mr-2"></span>
                  Works during constant-speed highway driving
                </li>
              </ul>
            </div>
            <div className="bg-dark-800 border border-white/10 rounded-xl overflow-hidden">
              <img 
                src={LCMImage} 
                alt="LCM Technology Closeup" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;