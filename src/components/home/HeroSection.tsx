import React from 'react';
import { ArrowRight, PlugZap, UserPlus } from 'lucide-react';
import L1Image from '../../assets/L1.webp';
import { scrollToContact } from '../../utils/navigation'; // no scrollToSection used anymore

const HeroSection: React.FC = () => {
  const handleDemoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    scrollToContact('demo');
  };

  const handlePartnershipClick = (e: React.MouseEvent) => {
    e.preventDefault();
    scrollToContact('partnership');
  };

  const handleCardClick = (e: React.MouseEvent) => {
    e.preventDefault();
    scrollToContact('learnmore'); // or 'form', depending on how you're handling IDs
  };

  return (
    <section className="relative pt-24 pb-20 md:pt-32 md:pb-24 bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[10%] left-[5%] w-72 h-72 bg-primary-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side Text and Buttons */}
          <div>
            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6">
              Charging While Driving — The Future of EVs Starts Now.
            </h1>
            <p className="text-white/80 text-lg md:text-xl mb-8 max-w-2xl">
              LCM is a breakthrough in-vehicle charging technology that generates power while you drive, revolutionizing how electric vehicles maintain their charge.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                onClick={handleDemoClick}
                className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-full font-medium transition-colors inline-flex items-center justify-center"
              >
                <PlugZap className="mr-2 h-5 w-5" /> Book a Demo
              </a>
              <a
                href="#contact"
                onClick={handlePartnershipClick}
                className="bg-dark-700/50 hover:bg-dark-700 backdrop-blur-sm text-white border border-white/20 px-6 py-3 rounded-full font-medium transition-colors inline-flex items-center justify-center"
              >
                <UserPlus className="mr-2 h-5 w-5" /> Contact for Partnership
              </a>
            </div>
          </div>

          {/* Right Side Card - Entirely Clickable */}
          <div className="relative cursor-pointer" onClick={handleCardClick}>
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-2xl blur-xl pointer-events-none"></div>
            <div className="relative bg-dark-800/80 backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-xl animate-float hover:scale-[1.02] transition-transform duration-300">
              <img
                src={L1Image}
                alt="LCM Technology Render"
                className="w-full h-auto rounded-lg mb-4 pointer-events-none"
                loading="eager"
                draggable="false"
              />
              <div className="bg-dark-900/50 backdrop-blur-sm rounded-lg p-4 border border-white/10 pointer-events-none">
                <h3 className="font-display font-semibold text-lg text-white mb-2">
                  Loop Charging Module
                </h3>
                <p className="text-white/70 text-sm">
                  Our 4-component system harnesses ambient airflow to generate electricity, charging your EV's battery in real-time while driving.
                </p>
                <div className="mt-4 flex justify-between items-center">
                  <div className="flex space-x-2">
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-primary-500/20 text-primary-300 rounded-full">Zero Drag</span>
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-secondary-500/20 text-secondary-300 rounded-full">In-Drive Charging</span>
                  </div>
                  <span className="text-primary-400 text-sm font-medium inline-flex items-center">
                    Learn more <ArrowRight size={14} className="ml-1" />
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
