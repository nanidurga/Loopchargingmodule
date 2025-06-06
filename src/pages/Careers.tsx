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
      stipend: "25k-30k",
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
    {
      title: "Power Systems Engineer",
      location: "Bengaluru, Karnataka",
      duration: "Full-Time",
      stipend: "6L-8L",
      about:
        "Join LCM, a pioneering EV tech startup founded by IIT Kharagpur alumni, at the forefront of India's sustainable mobility revolution. Backed by leading incubators and equity-free grants,and we are a funded startup, we are building next-generation electric vehicles and charging infrastructure.",
      overview:
        "Lead the design, development, and validation of high-voltage power systems for LCM's first EV prototype. Own end-to-end responsibility for battery systems, charging infrastructure, and power electronics, ensuring compliance, cost efficiency, and scalability.",
      responsibilities: [
        "Design 400V-800V battery packs with integrated thermal management and battery management system (BMS)",
        "Optimize energy density (>250 Wh/kg) while meeting ISO 26262 functional safety standards",
        "Collaborate with cell suppliers (NMC/LFP) to reduce pack-level costs to <$105/kWh",
        "Develop bi-directional DC-DC converters (3kW-50kW) and traction inverters (150kW+) using SiC/GaN semiconductors",
        "Achieve >95% efficiency in power conversion stages (AC-DC, DC-DC)",
        "Implement V2L/V2G capabilities for vehicle-to-grid integration",
        "Design CCS/CHAdeMO-compliant charging systems with <30-minute DC fast charging (10-80% SOC)",
        "Integrate ISO 15118 Plug & Charge functionality for seamless user authentication",
        "Conduct HALT/HASS testing (-40°C to +85°C operational range)",
        "Ensure compliance with UN R100 (battery safety) and EU 2019/631 (emissions)",
        "Perform FMEA for critical systems and mitigate risks through design iterations",
        "Reduce BOM costs by 20% through design-for-manufacturing (DFM) and supplier negotiations",
        "Source 30% of components locally to minimize logistics costs and lead times"
      ],
      requirements: [
        "MS/PhD in Electrical Engineering (Power Systems focus)",
        "3-5 years in EV/hybrid systems (OEM or Tier 1 supplier)",
        "Portfolio demonstrating ≥2 production-ready battery or inverter designs",
        "Core expertise in battery pack design (cell-to-pack integration, thermal runaway mitigation)",
        "Expertise in power electronics topologies (LLC resonant converters, three-phase inverters)",
        "High-voltage safety protocols (ISO 6469, UL 2580)",
        "Proficiency with simulation tools: PLECS, ANSYS Q3D, MATLAB/Simulink",
        "Experience with Keysight PathWave, thermal imaging cameras",
        "Compliance tools: ReliaSoft, Siemens Polarion",
        "Startup experience preferred (adaptability to resource constraints)",
        "Preferred certifications: AEF Certified High Voltage Specialist, IPC-9592B"
      ],
      kpis: [
        "Develop and validate 2+ production-ready battery/inverter designs",
        "Achieve >95% efficiency in power conversion systems",
        "Reduce BOM costs by 20% through DFM and supplier negotiations",
        "Ensure compliance with all relevant safety and emissions standards",
        "Complete HALT/HASS testing across full operational temperature range"
      ],
      perks: [
        "Mentorship from IIT alumni and EV industry experts",
        "Ownership of core EV powertrain systems",
        "Opportunities for rapid career growth in a high-impact startup environment"
      ],
      formLink: "https://forms.gle/cMgRVFLwnQZnbL568"
    },
    {
      title: "Electrical Design & Integration Engineer",
      location: "Bengaluru, Karnataka",
      duration: "Full-Time",
      stipend: "6L-8L",
      about:
        "Join LCM, an innovative EV tech startup founded by IIT Kharagpur alumni, driving India's sustainable mobility revoluti on. Backed by top incubators and equity-free grants,and we are a funded startup, we are building advanced electric vehicles and infrastructure.",
      overview:
        "Lead the design, integration, and validation of all electrical systems for LCM's first EV prototype. Own end-to-end responsibility for schematics, wiring harnesses, subsystem integration, and cross-functional debugging to ensure seamless vehicle operation.",
      responsibilities: [
        "Create vehicle-level schematics for wiring harnesses, PCBs, and LV/HV distribution systems using Siemens Capital or Zuken E3",
        "Design zonal E/E architecture with CAN FD, Automotive Ethernet (10BASE-T1S), and fail-operational power networks",
        "Optimize EMC performance to meet CISPR 25 Class 5 standards",
        "Integrate battery systems, motors, charging modules, and ADAS sensors into the vehicle platform",
        "Develop HIL test benches (dSPACE SCALEXIO) for validation of ECUs and network communication",
        "Resolve cross-domain integration issues (mechanical, thermal, software) during prototype bring-up",
        "Ensure compliance with ISO 26262 (functional safety) and ISO/SAE 21434 (cybersecurity)",
        "Reduce wiring harness costs by 15% through DFM and supplier negotiations",
        "Source 40% of connectors and relays locally to minimize lead times",
        "Build and test 3D-printed harness prototypes for fitment and routing validation",
        "Conduct EMI/EMC testing and generate reports for certification (e.g., FCC, CE)",
        "Collaborate with validation teams to achieve ASIL-B/C compliance for safety-critical systems"
      ],
      requirements: [
        "BS/MS in Electrical Engineering or related field",
        "3-5 years in automotive electrical systems (OEM/Tier 1)",
        "Portfolio showing ≥2 production-ready harness or ECU designs",
        "Core expertise in zonal E/E architecture design",
        "Experience with high-speed communication protocols (CAN FD, Automotive Ethernet)",
        "DFM for wiring harnesses and PCB assemblies",
        "Proficiency with Siemens Capital, ANSYS SIwave, SolidWorks Electrical",
        "Simulation experience with PREEvision, MATLAB/Simulink",
        "Testing experience with Vector CANoe, oscilloscopes, network analyzers",
        "Startup experience preferred (adaptability to rapid iteration)",
        "Preferred: IPC/WHMA-A-620 (Harness Certification), Autosar Classic/Adaptive foundational knowledge"
      ],
      kpis: [
        "Deliver 2+ production-ready harness or ECU designs",
        "Achieve 15% cost reduction in wiring harnesses",
        "Ensure CISPR 25 Class 5 EMC compliance",
        "Complete EMI/EMC certification reports (FCC, CE)",
        "Achieve ASIL-B/C compliance for safety-critical systems"
      ],
      perks: [
        "Mentorship from IIT alumni and senior automotive engineers",
        "Ownership of core vehicle electrical architecture",
        "Opportunities for rapid career growth in a high-impact startup environment",
        "Hands-on experience with cutting-edge EV technology"
      ],
      formLink: "https://forms.gle/cMgRVFLwnQZnbL568"
    },
    {
      title: "Embedded Systems & Controls Engineer",
      location: "Bengaluru, Karnataka",
      duration: "Full-Time",
      stipend: "6L-8L",
      about:
        "Join LCM, an EV tech startup founded by IIT Kharagpur alumni, at the forefront of India's sustainable mobility revolution. Backed by leading incubators and equity-free grants,and we are a funded startup, we are building next-generation electric vehicles and intelligent control systems.",
      overview:
        "Lead the design and integration of embedded hardware and control systems for LCM's first EV prototype. Own end-to-end responsibility for motor control, battery management, and vehicle communication networks while ensuring safety, efficiency, and cost-effectiveness.",
      responsibilities: [
        "Design ASIL-D compliant PCBs for motor control units (MCUs) and battery management systems (BMS)",
        "Develop 24-48V auxiliary power distribution systems with ≤5% voltage drop",
        "Implement CAN FD networks (1-8 Mbps) for real-time communication between ECUs",
        "Create field-oriented control (FOC) algorithms for PMSMs and MPPT algorithms for DC-DC converters",
        "Develop thermoelectric cooling control logic for battery packs using PID tuning",
        "Implement ISO 14229-compliant diagnostics (UDS/OBD-II) for fault detection",
        "Interface Hall-effect sensors (0.1% linearity) and IMUs for vehicle dynamics control",
        "Design fail-operational circuits for safety-critical systems (e.g., braking, steering)",
        "Ensure ISO 26262 ASIL-D compliance for motor control systems",
        "Reduce PCB assembly costs by 20% through DFM and JLCPCB partnerships"
      ],
      requirements: [
        "BS/MS in Electrical Engineering or Robotics",
        "3-5 years in automotive embedded systems (OEM/Tier 1)",
        "Portfolio demonstrating ≥2 production-ready ECU designs",
        "Expertise in motor control algorithms (FOC, MTPA)",
        "Experience in PCB design (4-8 layer, impedance-controlled)",
        "AUTOSAR-compliant software architecture",
        "Proficiency with Altium/KiCad, MATLAB/Simulink",
        "Testing experience with Lauterbach TRACE32, Vector CANoe",
        "Version control: Git, Bitbucket",
        "Startup experience preferred (resource-constrained R&D)",
        "Preferred: AUTOSAR Certified Engineer, IPC-A-610 (PCB Acceptability)"
      ],
      kpis: [
        "Deliver 2+ production-ready ECU designs",
        "Achieve ≤5% voltage drop in auxiliary power systems",
        "Reduce PCB assembly costs by 20% through DFM",
        "Ensure ISO 26262 ASIL-D compliance for all control systems",
        "Implement ISO 14229-compliant diagnostics across all ECUs"
      ],
      perks: [
        "Mentorship from IIT alumni and senior embedded engineers",
        "Ownership of core vehicle control and embedded systems",
        "Opportunities for rapid career growth in a high-impact startup environment",
        "Hands-on experience with cutting-edge EV and controls technology"
      ],
      formLink: "https://forms.gle/cMgRVFLwnQZnbL568"
    },
    {
      title: "Mechanical Design & Integration Engineer",
      location: "Bengaluru, Karnataka",
      duration: "Full-Time",
      stipend: "6L-8L",
      about:
        "Join LCM, a pioneering EV tech startup founded by IIT Kharagpur alumni, dedicated to India's sustainable mobility revolution. Backed by top incubators and equity-free grants,and we are a funded startup, we are building advanced electric vehicles with cutting-edge mechanical design.",
      overview:
        "As the Mechanical Design & Integration Engineer, you will lead the end-to-end design, modeling, and integration of all mechanical systems and components for our first electric vehicle. Collaborate cross-functionally to ensure all subsystems are engineered for performance, manufacturability, and seamless integration with electrical and thermal systems.",
      responsibilities: [
        "Develop 3D CAD models and detailed drawings for chassis, body, battery enclosures, powertrain mounts, and interior modules using SolidWorks, CATIA, or Siemens NX",
        "Design for manufacturability (DFM) and assembly (DFA), considering cost, material selection, and supplier capabilities",
        "Engineer lightweight structures using advanced materials (aluminum, composites, high-strength steel)",
        "Integrate mechanical components with electrical (battery, power electronics) and thermal systems, ensuring proper fit, function, and safety",
        "Collaborate with electrical, thermal, and controls engineers to resolve packaging, mounting, and interface challenges",
        "Lead packaging studies and digital mock-ups to optimize space utilization and accessibility",
        "Build and test prototypes (physical and virtual) for critical assemblies (e.g., battery box, crash structures, seats)",
        "Support validation through FEA (Finite Element Analysis) and physical testing (vibration, crash, thermal cycling)",
        "Iterate designs based on test results, field feedback, and reliability data",
        "Create and maintain BOMs, assembly instructions, and technical documentation",
        "Ensure designs meet automotive safety standards (FMVSS, ECE, AIS), and support homologation efforts",
        "Interface with suppliers for component sourcing, feasibility reviews, and cost negotiations",
        "Support process development for prototype and low-volume manufacturing (sheet metal, plastics, casting, additive manufacturing)"
      ],
      requirements: [
        "B.E./B.Tech/M.E./M.Tech in Mechanical Engineering or related field",
        "3-7 years in automotive or related mechanical design roles",
        "Portfolio of at least one complete vehicle or major subsystem from concept to prototype/production",
        "Proficiency in 3D CAD (SolidWorks, CATIA, or NX)",
        "Strong understanding of material properties and manufacturing processes (sheet metal, injection molding, casting, composites)",
        "Experience with structural and thermal analysis (FEA/CFD)",
        "Knowledge of automotive standards and safety requirements",
        "Startup or rapid prototyping experience preferred"
      ],
      kpis: [
        "Deliver complete 3D CAD models and detailed drawings for major vehicle subsystems",
        "Achieve weight and cost targets through DFM/DFA and material selection",
        "Ensure all designs meet relevant automotive safety standards",
        "Complete FEA/CFD validation and iterate designs based on test results",
        "Support successful prototype builds and supplier engagement"
      ],
      perks: [
        "Mentorship from IIT alumni and senior mechanical engineers",
        "Ownership of core vehicle mechanical architecture",
        "Opportunities for rapid career growth in a high-impact startup environment",
        "Hands-on experience with advanced materials and manufacturing processes"
      ],
      formLink: "https://forms.gle/cMgRVFLwnQZnbL568"
    },
    {
      title: "Thermal & Structural Systems Engineer",
      location: "Bengaluru, Karnataka",
      duration: "Full-Time",
      stipend: "6L-8L",
      about:
        "Join LCM, a pioneering EV tech startup founded by IIT Kharagpur alumni, at the forefront of India's sustainable mobility revolution. Backed by leading incubators and equity-free grants,and we are a funded startup, we are building advanced electric vehicles with cutting-edge thermal and structural engineering.",
      overview:
        "Lead the design, analysis, and validation of thermal and structural systems for LCM's first EV prototype. Ensure battery packs, powertrains, and vehicle structures are thermally efficient, structurally robust, and reliable under real-world conditions.",
      responsibilities: [
        "Develop liquid-cooled battery thermal management systems with ±2°C cell temperature uniformity",
        "Design heat pump-based HVAC systems for cabin and battery cooling/heating",
        "Optimize refrigerant circuits (R1234yf/R744) for energy efficiency and SAE J2766 compliance",
        "Perform FEA (static, dynamic, fatigue) on chassis, battery enclosures, and crash structures using ANSYS/ABAQUS",
        "Conduct CFD simulations for airflow, thermal management, and aerodynamics to reduce drag coefficient by ≥10%",
        "Validate designs through virtual and physical testing (vibration, thermal shock, crush tests)",
        "Implement HALT/HASS testing (-40°C to +85°C) for battery packs and power electronics",
        "Conduct FMEA and root cause analysis for field failures",
        "Achieve ASIL-C/D compliance for safety-critical systems (ISO 26262)",
        "Reduce thermal system energy consumption by ≥20% through control strategy optimization",
        "Lower structural component mass by 15% using topology optimization and advanced materials (CFRP, aluminum alloys)"
      ],
      requirements: [
        "B.E./B.Tech/M.E./M.Tech in Mechanical or Thermal Engineering",
        "3-7 years in EV/hybrid thermal or structural engineering (OEM/Tier 1)",
        "Portfolio demonstrating ≥1 production-ready thermal or structural system",
        "Expertise in FEA/CFD tools (ANSYS, Star-CCM+, HyperMesh)",
        "Proficiency in thermal system design (refrigerant circuits, cold plates, heat exchangers)",
        "Knowledge of automotive materials (high-strength steel, composites, phase-change materials)",
        "Startup experience preferred (agile prototyping, cost-driven design)",
        "Certifications: ASQ Certified Reliability Engineer (preferred), AEF Thermal Management Specialist (optional)"
      ],
      kpis: [
        "Deliver validated thermal and structural designs for battery, powertrain, and vehicle structures",
        "Achieve ±2°C cell temperature uniformity in battery packs",
        "Reduce drag coefficient by ≥10% through CFD-driven design",
        "Lower component mass by 15% and thermal system energy use by ≥20%",
        "Ensure ASIL-C/D compliance and successful completion of HALT/HASS testing"
      ],
      perks: [
        "Mentorship from IIT alumni and senior thermal/structural engineers",
        "Ownership of core EV thermal and structural architecture",
        "Opportunities for rapid career growth in a high-impact startup environment",
        "Hands-on experience with advanced simulation and testing tools"
      ],
      formLink: "https://forms.gle/cMgRVFLwnQZnbL568"
    },
    {
      title: "Powertrain & Vehicle Dynamics Engineer",
      location: "Bengaluru, Karnataka",
      duration: "Full-Time",
      stipend: "6L-8L",
      about:
        "Join LCM, a pioneering EV tech startup founded by IIT Kharagpur alumni, at the forefront of India's sustainable mobility revolution. Backed by top incubators and equity-free grants,and we are a funded startup, we are building advanced electric vehicles with world-class powertrain and vehicle dynamics engineering.",
      overview:
        "Lead the design, integration, and optimization of the electric powertrain, chassis, and vehicle dynamics systems for LCM's first EV prototype. Ensure seamless interaction between propulsion, suspension, steering, and braking systems for superior performance, safety, and ride quality.",
      responsibilities: [
        "Design electric powertrain layouts (motor, inverter, gearbox) for optimal packaging and weight distribution",
        "Develop single-speed gearboxes with ≥95% mechanical efficiency",
        "Integrate regenerative braking systems to recover ≥20% of kinetic energy during deceleration",
        "Design modular chassis structures (steel/aluminum) with torsional stiffness ≥25 kN·m/deg",
        "Develop MacPherson strut/multi-link suspensions for urban/performance variants",
        "Optimize unsprung mass through lightweight knuckle and control arm designs",
        "Conduct lap simulations (MSC Adams/CarSim) to optimize handling balance (understeer gradient: 1-3 deg/g)",
        "Tune damping profiles for ride comfort (ISO 2631-1 vibration dose value ≤0.8 m/s²)",
        "Implement torque vectoring algorithms for enhanced cornering stability",
        "Ensure FMVSS/ECE R13 compliance for braking systems (0.8g deceleration @ 100 km/h)",
        "Validate rollover resistance (SSF ≥1.25) through CAE and physical testing",
        "Reduce chassis weight by 15% via topology optimization and advanced materials (HSLA steel, CFRP)",
        "Achieve powertrain cost ≤$1,500/kW through DFM and supplier partnerships"
      ],
      requirements: [
        "B.E./B.Tech/M.E./M.Tech in Mechanical or Automotive Engineering",
        "3-7 years in automotive powertrain/chassis design (OEM/Tier 1)",
        "Portfolio demonstrating ≥1 production vehicle or motorsport project",
        "Expertise in powertrain/chassis CAD (SolidWorks, CATIA, NX)",
        "Proficiency in FEA/CFD tools (ANSYS, HyperWorks, Star-CCM+)",
        "Strong knowledge of vehicle dynamics principles (tire modeling, suspension kinematics)",
        "Startup experience preferred (agile development, rapid prototyping)",
        "Certifications: SAE Vehicle Dynamics Certification (preferred), ASQ Reliability Engineer (optional)"
      ],
      kpis: [
        "Deliver validated powertrain and chassis designs meeting performance and safety targets",
        "Achieve ≥95% gearbox efficiency and ≥20% energy recovery via regenerative braking",
        "Reduce chassis weight by 15% and powertrain cost to ≤$1,500/kW",
        "Ensure compliance with FMVSS/ECE R13 and rollover resistance standards",
        "Optimize ride and handling through simulation and physical testing"
      ],
      perks: [
        "Mentorship from IIT alumni and senior vehicle dynamics engineers",
        "Ownership of core EV powertrain and dynamics architecture",
        "Opportunities for rapid career growth in a high-impact startup environment",
        "Hands-on experience with advanced simulation and testing tools"
      ],
      formLink: "https://forms.gle/cMgRVFLwnQZnbL568"
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
