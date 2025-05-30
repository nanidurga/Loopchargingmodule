import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, MapPin, Clock, Send } from 'lucide-react';

// Use Unicode INR symbol
const InrIcon = () => (
  <span className="mr-1 text-lg font-bold" style={{ lineHeight: 0.9 }}>₹</span>
);

interface JobPosition {
  title: string;
  location: string;
  duration: string;
  stipend: string;
  about: string;
  overview: string;
  responsibilities: string[];
  requirements: string[];
  kpis: string[];
  perks: string[];
  formLink: string;
}

const Careers: React.FC = () => {
  const positions: JobPosition[] = [
    {
      title: "EV Infrastructure Design Intern (Mechanical/CAD-CFD-CAM)",
      location: "Bangalore",
      duration: "3 Months",
      stipend: "25k–30k",
      about:
        "LCM is a trailblazing EV tech startup founded by three IIT Kharagpur alumni, dedicated to extending electric vehicle range through modular charging innovations. Backed by top incubators like Wadhwani Foundation, StrongHer, Atal Incubation Center, and IIMB NSRCEL, and funded by equity-free grants, we are driving India's sustainable mobility revolution.",
      overview:
        "Mechanical Design Intern specializing in CAD, CFD, and CAM to optimize EV infrastructure components. Focus on redesigning car chassis, bonnet layouts, and integrating LCM technology into vehicle structures. Use simulation tools to ensure performance, safety, and manufacturability.",
      responsibilities: [
        "Create detailed 3D CAD models (SolidWorks, CATIA, AutoCAD)",
        "Redesign vehicle components for LCM integration",
        "Prepare CAM-ready designs",
        "Perform CFD simulations (ANSYS Fluent, OpenFOAM)",
        "Optimize for weight, aerodynamics, heat dissipation",
        "Collaborate on prototyping and integration",
        "Document design iterations and results",
      ],
      requirements: [
        "Proficiency in CAD, CFD, and CAM software",
        "Basic understanding of automotive infrastructure",
        "Strong problem-solving and teamwork skills",
        "Pursuing/completed Bachelor's/Master's in Mechanical/Automotive Engineering",
      ],
      kpis: [
        "Deliver 3 optimized CAD models",
        "Achieve 10-15% weight reduction",
        "Ensure 90%+ CAM manufacturability",
        "Submit thermal/structural improvement reports",
      ],
      perks: [
        "Mentorship from IIT alumni",
        "Hands-on EV infrastructure experience",
        "Certificate and future role opportunities",
      ],
      formLink: "https://docs.google.com/forms/d/e/1FAIpQLSe0DBBN6Jk3goTz__61O1NlM9SP9dkUQJM9hm4_UWDzO44h5A/viewform?usp=header",
    },
    {
      title: "BMS Design Intern",
      location: "Bengaluru",
      duration: "3 Months",
      stipend: "25k-30k",
      about:
        "LCM is an innovative EV tech startup founded by three IIT Kharagpur alumni, dedicated to enhancing the range and efficiency of electric vehicles through cutting-edge solutions. Backed by incubators like the Wadhwani Foundation, StrongHer, Atal Incubation Center, and IIMB NSRCEL, and supported by equity-free grants, we are at the forefront of sustainable mobility.",
      overview:
        "Motivated BMS Design Intern with hands-on expertise in Battery Management System design. Work on PCB modeling, algorithm development, virtual testing, and prototyping BMS solutions.",
      responsibilities: [
        "Study and improve BMS architectures",
        "Design and simulate master-slave communication",
        "Develop algorithms for cell balancing, SOC, SOH",
        "PCB design and virtual testing (Altium, Eagle, KiCad)",
        "Collaborate with hardware/firmware teams",
        "Document processes and results",
      ],
      requirements: [
        "Proficiency in PCB design tools",
        "Understanding of BMS architectures",
        "Familiarity with embedded systems and protocols",
        "Pursuing/completed Bachelor's/Master's in Electrical/Electronics/Embedded Systems",
      ],
      kpis: [
        "Deliver functional PCB prototype",
        "Develop and validate SOC/SOH algorithms",
        "Integrate BMS with dummy battery pack",
      ],
      perks: [
        "Mentorship from IIT alumni",
        "Hands-on BMS and EV prototyping",
        "Certificate and future role opportunities",
      ],
      formLink: "https://docs.google.com/forms/d/e/1FAIpQLSe0DBBN6Jk3goTz__61O1NlM9SP9dkUQJM9hm4_UWDzO44h5A/viewform?usp=header",
    },
    {
      title: "EV Infrastructure Design Intern (Electronics & Circuit Design)",
      location: "Bangalore",
      duration: "3 Months",
      stipend: "25k-30k",
      about:
        "LCM is a pioneering EV tech startup founded by three IIT Kharagpur alumni, dedicated to solving EV range anxiety through innovative modular charging solutions. Supported by top-tier incubators and funded by equity-free grants, we are reshaping sustainable mobility in India.",
      overview:
        "Intern with expertise in electronics, circuit design, and EV control systems to optimize EV electrical infrastructure and redesign circuits for LCM integration.",
      responsibilities: [
        "Analyze and redesign circuit layouts for LCM integration",
        "Develop circuit schematics and ensure compliance",
        "Integrate ECU/VCU systems",
        "Simulate and prototype circuits (Altium, KiCad, LTspice)",
        "Document iterations and test results",
      ],
      requirements: [
        "Proficiency in circuit design tools",
        "Understanding of EV electronics architecture",
        "Familiarity with ECU/VCU and protocols",
        "Pursuing/completed Bachelor's/Master's in Electrical/Electronics/Automotive Engineering",
      ],
      kpis: [
        "Deliver 3 optimized circuit designs",
        "Achieve 95%+ compatibility with ECU/VCU",
        "Reduce inefficiencies by 10–15%",
      ],
      perks: [
        "Mentorship from IIT alumni",
        "Hands-on EV infrastructure experience",
        "Certificate and future role opportunities",
      ],
      formLink: "https://docs.google.com/forms/d/e/1FAIpQLSe0DBBN6Jk3goTz__61O1NlM9SP9dkUQJM9hm4_UWDzO44h5A/viewform?usp=header",
    },
    {
      title: "EV Infrastructure & Electrical Design Intern",
      location: "Bengaluru",
      duration: "3 Months",
      stipend: "25k-30k",
      about:
        "LCM is an innovative EV tech startup founded by three IIT Kharagpur alumni, focused on advancing electric vehicle range through modular charging solutions. Supported by top incubators and funded by equity-free grants, we are redefining sustainable mobility in India.",
      overview:
        "Intern with a strong foundation in electrical systems to design EV infrastructure components, optimize vehicle layouts, and develop circuital systems for LCM integration.",
      responsibilities: [
        "Analyze and redesign car bonnet layouts",
        "Create circuit designs for LCM connections",
        "Integrate ECU/VCU systems",
        "Prototype and test designs",
        "Perform risk assessments for safety compliance",
      ],
      requirements: [
        "Proficiency in circuit design tools",
        "Understanding of EV architecture",
        "Familiarity with ECU/VCU and protocols",
        "Pursuing/completed Bachelor's/Master's in Electrical/Automotive Engineering",
      ],
      kpis: [
        "Deliver optimized CAD model",
        "Complete circuit schematics",
        "Achieve 100% safety compliance",
      ],
      perks: [
        "Mentorship from IIT alumni",
        "Hands-on EV infrastructure experience",
        "Certificate and future role opportunities",
      ],
      formLink: "https://docs.google.com/forms/d/e/1FAIpQLSe0DBBN6Jk3goTz__61O1NlM9SP9dkUQJM9hm4_UWDzO44h5A/viewform?usp=header",
    },
  ];

  const [selectedPositionTitle, setSelectedPositionTitle] = useState<string | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  const expandedVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
      },
    },
    visible: {
      opacity: 1,
      height: 'auto',
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <div className="min-h-screen bg-dark-900">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg"
            alt="LCM Workspace"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-dark-900/80 backdrop-blur-sm" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6">
              Join the Future of EV Technology
            </h1>
            <p className="text-white/80 text-lg md:text-xl mb-8">
              Help us revolutionize electric vehicle charging with innovative solutions that make a real impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Briefcase className="h-12 w-12 text-primary-500 mx-auto mb-4" />
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">
              Open Positions
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Join our team of innovators and help shape the future of sustainable mobility.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {positions.map((position) => (
              <motion.div
                key={position.title}
                variants={itemVariants}
                className="bg-dark-800 rounded-xl p-6 border border-white/10 hover:border-primary-500/30 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                  <div>
                    <h3 className="font-display font-semibold text-xl text-white mb-2">
                      {position.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm">
                      <span className="flex items-center text-white/70">
                        <MapPin className="h-4 w-4 mr-1" /> {position.location}
                      </span>
                      <span className="flex items-center text-white/70">
                        <Clock className="h-4 w-4 mr-1" /> {position.duration}
                      </span>
                      <span className="flex items-center text-white/70">
                        <InrIcon /> {position.stipend}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() =>
                      setSelectedPositionTitle(
                        selectedPositionTitle === position.title ? null : position.title
                      )
                    }
                    className="mt-4 md:mt-0 bg-primary-500 hover:bg-primary-600 text-white px-6 py-2 rounded-full font-medium transition-colors inline-flex items-center"
                  >
                    {selectedPositionTitle === position.title ? 'View Less' : 'View More'}
                  </button>
                </div>

                <AnimatePresence>
                  {selectedPositionTitle === position.title && (
                    <motion.div
                      variants={expandedVariants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      className="border-t border-white/10 pt-6 mt-6 space-y-6"
                    >
                      <div>
                        <h4 className="font-medium text-white mb-2">About LCM</h4>
                        <p className="text-white/70">{position.about}</p>
                      </div>
                      <div>
                        <h4 className="font-medium text-white mb-2">Position Overview</h4>
                        <p className="text-white/70">{position.overview}</p>
                      </div>
                      <div>
                        <h4 className="font-medium text-white mb-2">Key Responsibilities</h4>
                        <ul className="list-disc list-inside text-white/70 space-y-1">
                          {position.responsibilities.map((resp, i) => (
                            <li key={i}>{resp}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-white mb-2">Requirements</h4>
                        <ul className="list-disc list-inside text-white/70 space-y-1">
                          {position.requirements.map((req, i) => (
                            <li key={i}>{req}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-white mb-2">KPIs</h4>
                        <ul className="list-disc list-inside text-white/70 space-y-1">
                          {position.kpis.map((kpi, i) => (
                            <li key={i}>{kpi}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-white mb-2">Perks</h4>
                        <ul className="list-disc list-inside text-white/70 space-y-1">
                          {position.perks.map((perk, i) => (
                            <li key={i}>{perk}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-4 mt-6">
                        <a
                          href={position.formLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-full font-medium transition-colors inline-flex items-center justify-center"
                        >
                          <Send className="mr-2 h-5 w-5" /> Apply Now
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
