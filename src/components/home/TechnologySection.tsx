import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Wind } from 'lucide-react';
import { Cog } from 'lucide-react';
import { Gauge } from 'lucide-react';
import { Zap } from 'lucide-react';
import '@google/model-viewer'; // Import model-viewer web component

const components = [
  {
    title: 'Propeller',
    icon: <Wind className="w-7 h-7 text-primary-400" />,
    image: '/assets/propeller2.webp',
    description: 'Captures ambient airflow as your vehicle moves, designed for minimal drag and maximum energy capture at speeds ≥30 km/h.',
  },
  {
    title: 'Torque Converter',
    icon: <Cog className="w-7 h-7 text-primary-400" />,
    image: '/assets/torque.webp',
    description: "Transforms the propeller's rotation into smooth, consistent mechanical energy, ensuring stable operation during speed variations.",
  },
  {
    title: 'Gear Set',
    icon: <Gauge className="w-7 h-7 text-primary-400" />,
    image: '/assets/Gearset.webp',
    description: 'Optimizes the rotational speed and torque from the converter to maximize efficiency across different driving conditions.',
  },
  {
    title: 'Magnetic Induction Generator',
    icon: <Zap className="w-7 h-7 text-primary-400" />,
    image: '/assets/Generator.webp',
    description: "Converts the mechanical energy into electricity, directly feeding your EV's battery with a continuous charge while driving.",
  },
];

const TechnologySection = () => {
  const sectionRef = useRef(null);

  return (
    <section
      id="technology"
      ref={sectionRef}
      className="py-32 bg-gradient-to-b from-dark-800 to-dark-900 text-white overflow-hidden scroll-mt-[120px]"
    >
      <div className="container mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl font-bold mb-4">How LCM Technology Works</h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            A seamless four-stage process converts ambient airflow into usable electricity — powering your EV without additional drag.
          </p>
        </motion.div>

        {components.map((comp, index) => {
          const delay = index * 0.2;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row items-center gap-10 mb-24"
            >
              <img
                src={comp.image}
                alt={comp.title}
                className="md:w-1/2 w-full h-[300px] object-cover rounded-xl shadow-lg"
              />
              <div className="md:w-1/2 w-full space-y-4">
                <div className="flex items-center gap-3">
                  {comp.icon}
                  <h3 className="text-2xl font-semibold">{comp.title}</h3>
                </div>
                <p className="text-white/70 leading-relaxed text-base">{comp.description}</p>
              </div>
            </motion.div>
          );
        })}

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <h3 className="text-3xl font-bold mb-4">Final Integrated System</h3>
          <p className="text-white/70 mb-6 max-w-xl mx-auto">
            All components combined into a single seamless energy unit that charges your EV while driving.
          </p>
          <div className="w-full max-w-3xl mx-auto rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black">
            {/* 3D Model Viewer */}
            <model-viewer
              src="/assets/models/lcmf.glb"  // Replace with actual model file name
              alt="Final EV Assembly"
              auto-rotate
              camera-controls
              shadow-intensity="1"
              exposure="1"
              ar
              style={{ width: '100%', height: '400px' }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechnologySection;
