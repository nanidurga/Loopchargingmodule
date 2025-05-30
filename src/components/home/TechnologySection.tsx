import React, { useState, useCallback, memo } from 'react';
import { Wind, Cog, Gauge, Zap } from 'lucide-react';

// Import local images
import propellerImage from '../../assets/propeller2.webp';
import torqueConverterImage from '../../assets/torque.webp';
import gearSetImage from '../../assets/Gearset.webp';
import generatorImage from '../../assets/Generator.webp';
import defaultEvCarImage from '../../assets/L2.webp';

// Simple image display component
const TechImageDisplay = memo(({ 
  imageSrc, 
  altText 
}: { 
  imageSrc: string; 
  altText: string; 
}) => {
  return (
    <div className="w-full h-72 bg-dark-700/50 rounded-xl border border-white/10 flex items-center justify-center p-0 relative mb-8 overflow-hidden">
      <img
        src={imageSrc}
        alt={altText}
        className="absolute inset-0 w-full h-full object-cover rounded-lg"
        loading="eager"
        draggable={false}
      />
    </div>
  );
});

// Simple icon component
const TechIcon = memo(({
  icon,
  label,
  isActive,
  componentId,
  onHover,
}: {
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
  componentId: string;
  onHover: (id: string | null) => void;
}) => {
  const handleMouseEnter = useCallback(() => {
    onHover(componentId);
  }, [componentId, onHover]);

  const handleMouseLeave = useCallback(() => {
    onHover(null);
  }, [onHover]);

  return (
    <div className="flex flex-col items-center select-none">
      <div
        className={`w-16 h-16 rounded-full flex items-center justify-center cursor-pointer
          ${isActive 
            ? 'bg-primary-500 text-white' 
            : 'bg-dark-700 text-primary-400 hover:bg-dark-600'
          }`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        tabIndex={0}
        aria-label={label}
        role="button"
      >
        {icon}
      </div>
      <p className="mt-2 text-white font-medium text-center pointer-events-none">{label}</p>
    </div>
  );
});

const TechnologySection: React.FC = () => {
  const [hoveredComponentId, setHoveredComponentId] = useState<string | null>(null);

  const components = [
    {
      id: 'propeller',
      title: 'Propeller',
      description: 'Captures ambient airflow as your vehicle moves, designed for minimal drag and maximum energy capture at speeds ≥30 km/h.',
      icon: <Wind className="h-8 w-8" />,
      image: propellerImage,
    },
    {
      id: 'torque-converter',
      title: 'Torque Converter',
      description: "Transforms the propeller's rotation into smooth, consistent mechanical energy, ensuring stable operation during speed variations.",
      icon: <Cog className="h-8 w-8" />,
      image: torqueConverterImage,
    },
    {
      id: 'gear-set',
      title: 'Gear Set',
      description: 'Optimizes the rotational speed and torque from the converter to maximize efficiency across different driving conditions.',
      icon: <Gauge className="h-8 w-8" />,
      image: gearSetImage,
    },
    {
      id: 'generator',
      title: 'Magnetic Induction Generator',
      description: "Converts the mechanical energy into electricity, directly feeding your EV's battery with a continuous charge while driving.",
      icon: <Zap className="h-8 w-8" />,
      image: generatorImage,
    },
  ];

  const handleHover = useCallback((id: string | null) => {
    setHoveredComponentId(id);
  }, []);

  const activeComponent = components.find(c => c.id === hoveredComponentId);
  const imageSrc = activeComponent ? activeComponent.image : defaultEvCarImage;
  const altText = activeComponent ? activeComponent.title : 'EV Car';

  return (
    <section id="technology" className="py-20 bg-gradient-to-b from-dark-900 to-dark-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">
            How LCM Technology Works
          </h2>
          <p className="text-white/70 text-lg">
            Our breakthrough system converts ambient airflow into usable electricity through a seamless four-stage process, all without creating additional drag.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Image */}
          <div className="bg-dark-800 border border-white/10 rounded-2xl p-6 lg:p-8 shadow-lg">
            <TechImageDisplay imageSrc={imageSrc} altText={altText} />
            <div className="flex flex-col md:flex-row items-center justify-between w-full gap-4 md:gap-2">
              {components.map((component, index) => (
                <React.Fragment key={component.id}>
                  <TechIcon
                    icon={component.icon}
                    label={component.title}
                    isActive={hoveredComponentId === component.id}
                    componentId={component.id}
                    onHover={handleHover}
                  />
                  {index < components.length - 1 && (
                    <div className="h-8 md:h-0 md:w-8 flex-grow mx-2 my-2 md:my-0 flex items-center justify-center pointer-events-none">
                      <div className="w-0.5 h-full md:w-full md:h-0.5 bg-white/30 relative">
                        <div className="absolute top-1/2 right-0 md:top-0 md:right-1/2 transform -translate-y-1/2 md:-translate-x-1/2 md:translate-y-0 h-2 w-2 bg-white/50 rounded-full"></div>
                      </div>
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Right Side - Description */}
          <div>
            <div className="bg-dark-800 border border-white/10 rounded-2xl p-6 lg:p-8 shadow-lg mb-8">
              <h3 className="font-display font-semibold text-2xl text-white mb-4">
                {activeComponent ? activeComponent.title : "Select a component"}
              </h3>
              <p className="text-white/70 mb-6">
                {activeComponent
                  ? activeComponent.description
                  : "Hover over each component's icon in the diagram to learn more about how our system works."}
              </p>
              {!activeComponent && (
                <ul className="space-y-4">
                  {components.map((component) => (
                    <li key={component.id} className="flex items-start">
                      <div className="mr-3 mt-1 text-primary-400">{component.icon}</div>
                      <div>
                        <h4 className="font-medium text-white">{component.title}</h4>
                        <p className="text-white/70 text-sm">{component.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="bg-primary-500/10 border border-primary-500/20 rounded-xl p-5">
              <h4 className="font-medium text-primary-300 mb-2">Key Advantage</h4>
              <p className="text-white/80">
                Unlike other charging methods, LCM works continuously while driving, even in urban stop-and-go traffic where regenerative braking is less effective.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
