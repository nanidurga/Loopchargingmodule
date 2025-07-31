import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { MapPin } from 'lucide-react';
import { Clock } from 'lucide-react';
import { Send } from 'lucide-react';

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
  formLink: string;
  roleType: 'intern' | 'fulltime'; // Added property
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
      formLink: "https://docs.google.com/forms/d/e/1FAIpQLSe0DBBN6Jk3goTz__61O1NlM9SP9dkUQJM9hm4_UWDzO44h5A/viewform?usp=header",
      roleType: 'intern',
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
      formLink: "https://docs.google.com/forms/d/e/1FAIpQLSe0DBBN6Jk3goTz__61O1NlM9SP9dkUQJM9hm4_UWDzO44h5A/viewform?usp=header",
      roleType: 'intern',
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
      formLink: "https://docs.google.com/forms/d/e/1FAIpQLSe0DBBN6Jk3goTz__61O1NlM9SP9dkUQJM9hm4_UWDzO44h5A/viewform?usp=header",
      roleType: 'intern',
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
      formLink: "https://docs.google.com/forms/d/e/1FAIpQLSe0DBBN6Jk3goTz__61O1NlM9SP9dkUQJM9hm4_UWDzO44h5A/viewform?usp=header",
      roleType: 'intern',
    },
    {
      title: "Power Systems Engineer",
      location: "Bengaluru, Karnataka",
      duration: "Full-Time",
      stipend: "Not Disclosed", 
      about: "Join LCM, a pioneering EV tech startup founded by IIT Kharagpur alumni, dedicated to extending electric vehicle range through modular charging innovations. Backed by top incubators like Wadhwani Foundation, Atal Incubation Center, and IIMB NSRCEL, and funded by equity-free grants And we are a funded startup, we're driving India's sustainable mobility revolution.",
      overview: "Lead the design, development, and validation of all high-voltage power systems for LCM's EV prototype. Own end-to-end responsibility for battery systems, charging infrastructure, and power electronics while ensuring compliance, cost efficiency, and scalability.",
      responsibilities: [
        "Battery & High-Voltage Systems:",
        "- Design 400V-800V battery packs with integrated liquid cooling thermal management",
        "- Integrate in-house designed BMS for battery packs",
        "- Optimize energy density (>250 Wh/kg) while meeting ISO 26262 safety standards",
        "Power Electronics Development:",
        "- Develop bi-directional DC-DC converters (3kW-50kW) using SiC/GaN semiconductors",
        "- Achieve >95% efficiency in power conversion stages (AC-DC, DC-DC)",
        "- Implement V2L/V2G capabilities for vehicle-to-grid integration",
        "Charging Infrastructure:",
        "- Design CCS2/Type-2 compliant charging systems with <30-minute DC fast charging (10-80% SOC)",
        "- Integrate ISO 15118 Plug & Charge functionality for user authentication",
        "Reliability & Compliance:",
        "- Conduct HALT/HASS testing (-40°C to +85°C operational range)",
        "- Ensure UN R100/AIS-156 battery safety compliance",
        "- Perform FMEA for critical systems and design iterations",
        "Cost Optimization:",
        "- Reduce BOM costs by 20% through DFM and supplier negotiations",
        "- Source 30% components locally to minimize logistics costs"
      ],
      requirements: [
        "Education: B.E/B.Tech/M.E/M.Tech in Electrical Engineering (Power Systems Focus)",
        "Technical Skills:",
        "- Battery pack design (cell-to-pack integration, thermal runaway mitigation)",
        "- Power electronics topologies (LLC resonant converters, three-phase inverters)",
        "Experience:",
        "- 3-5 years in EV/hybrid systems (OEM/Tier 1 supplier)",
        "- Portfolio with ≥2 production-ready battery/inverter designs",
        "- Startup experience preferred",
        "Certifications:",
        "- AEF Certified High Voltage Specialist",
        "- IPC-9592B (Power Electronics Assembly Certification)"
      ],
      
      formLink: "https://forms.gle/cMgRVFLwnQZnbL568",
      roleType: 'fulltime',
    },    
    {
      title: "Electrical Design & Integration Engineer",
      location: "Bengaluru, Karnataka",
      duration: "Full-Time",
      stipend: "Not Disclosed",
      about: "Join LCM, a pioneering EV tech startup founded by IIT Kharagpur alumni, dedicated to extending electric vehicle range through modular charging innovations. Backed by top incubators like Wadhwani Foundation, Atal Incubation Center, and IIMB NSRCEL, and funded by equity-free grants And we are a funded startup, we're driving India's sustainable mobility revolution.",
      overview: "Lead the design, development, and integration of all electrical systems for LCM's EV prototype. Own end-to-end responsibility for schematics, wiring harnesses, subsystem integration, and cross-functional debugging to ensure seamless vehicle operation.",
      responsibilities: [
        "Electrical System Design:",
        "- Create vehicle-level schematics for wiring harnesses, PCBs, and LV/HV distribution systems using Siemens Capital or Zuken E3.",
        "- Design zonal E/E architecture with CAN FD, Automotive Ethernet (10BASE-T1S), and fail-operational power networks.",
        "- Optimize EMC performance to meet IS 6873-1 (2010)/CISPR 25 Class 5 standards.",
        "Subsystem Integration:",
        "- Integrate battery systems, motors, charging modules, and ADAS sensors into the vehicle platform.",
        "- Develop HIL test benches (dSPACE SCALEXIO) for validation of ECUs and network communication.",
        "- Resolve cross-domain integration issues (mechanical, thermal, software) during prototype bring-up.",
        "- Validate 3D routing (CATIA/NX) with 15mm bend radius minima and >5mm gap from chassis components, ensuring compliance with UL 1063 and SAE J1128.",
        "Compliance & Cost Optimization:",
        "- Ensure compliance with ISO 26262 (functional safety) and ISO/SAE 21434 (cybersecurity).",
        "- Reduce wiring harness costs by 15% through DFM, supplier negotiations and collaboration with local vendors.",
        "- Validate connectors by reviewing manufacturer datasheets for current, voltage, temperature, and vibration ratings, ensuring compliance with USCAR-2 (sealing) and LV214 (automotive durability).",
        "Prototyping & Validation:",
        "- Build and test 3D-printed harness prototypes for fitment and routing validation.",
        "- Conduct EMI/EMC testing and generate reports for certification (e.g., FCC, CE).",
        "- Collaborate with validation teams to achieve ASIL-B/C compliance for safety-critical systems."
      ],
      requirements: [
        "Education:",
        "- Required: B.E or B.Tech/M.E or M.Tech in Electrical Engineering or related field.",
        "Technical Skills:",
        "- Zonal E/E architecture design.",
        "- High-speed communication protocols (CAN FD, Automotive Ethernet).",
        "- DFM for wiring harnesses and PCB assemblies.",
        "Tools:",
        "- Design: Siemens Capital, ANSYS SIwave, SolidWorks Electrical.",
        "- Simulation: PREEvision, MATLAB/Simulink.",
        "- Testing: Vector CANoe, oscilloscopes, network analyzers.",
        "Experience:",
        "- 3-5 years in automotive electrical systems (OEM/Tier 1).",
        "- Portfolio showing ≥2 production-ready harness or ECU designs.",
        "- Startup experience preferred (adaptability to rapid iteration).",
        "Certifications:",
        "- IPC/WHMA-A-620 (Harness Certification).",
        "- Autosar Classic/Adaptive foundational knowledge."
      ],
      formLink: "https://forms.gle/cMgRVFLwnQZnbL568",
      roleType: 'fulltime',
    },
    {
      title: "Embedded Systems & Controls Engineer",
      location: "Bengaluru, Karnataka",
      duration: "Full-Time",
      stipend: "Not Disclosed",
      about: "Join LCM, a pioneering EV tech startup founded by IIT Kharagpur alumni, dedicated to extending electric vehicle range through modular charging innovations. Backed by top incubators like Wadhwani Foundation, Atal Incubation Center, and IIMB NSRCEL, and funded by equity-free grants And we are a funded startup, we're driving India's sustainable mobility revolution.",
      overview: "Lead the design and integration of embedded hardware and control systems for the LCM's EV prototype. Own end-to-end responsibility for motor control, battery management, and vehicle communication networks while ensuring safety, efficiency, and cost-effectiveness.",
      responsibilities: [
        "Embedded Hardware Design:",
        "- Design ASIL-D compliant PCBs for motor control units (MCUs) and battery management systems (BMS).",
        "- Develop 48V auxiliary power distribution systems with ≤5% voltage drop.",
        "- Implement CAN FD networks (1-8 Mbps) for real-time communication between ECUs.",
        "- Implement I2C for Sensor Networks and Safety Systems.",
        "- Implement SPI for BMS, ADAS and Memory Storage.",
        "Control Systems Development:",
        "- Create field-oriented control (FOC) algorithms for permanent magnet synchronous motors (PMSMs) and MPPT algorithms for DC-DC converters.",
        "- Develop thermoelectric cooling control logic for battery packs using PID tuning.",
        "- Implement ISO 14229-compliant diagnostics (UDS/OBD-II) for fault detection.",
        "- Develop fault-clearing GUIs (Qt/C#) compatible with existing ECUs, enabling one-click DTC reset and log export per SAE J1939-73/AIS-004,049.",
        "- Support legacy systems via J2534 pass-thru integration for reprogramming.",
        "Sensor-Actuator Integration:",
        "- Interface Hall-effect sensors (0.1% linearity) and IMUs for vehicle dynamics control.",
        "- Design fail-operational circuits for safety-critical systems (e.g., braking, steering).",
        "Testing & Validation:",
        "- HIL Validation: Develop dSPACE SCALEXIO test benches for ASIL-D systems (motor control, BMS), automating test cases in Simulink/TAE to achieve 98% model coverage.",
        "- Functional Safety Testing: Execute fault injection tests (ISO 26262) for MCU/BMS PCBs, including stuck-at-0/1 failures in CAN FD transceivers.",
        "- Environmental Testing: Validate designs under -40°C to +125°C thermal cycles and 20G vibration profiles per ISO 16750-3/4.",
        "- EMI/EMC Compliance: Perform CISPR 25 radiated emissions testing for 48V systems, ensuring ≤30 dBμV/m margins.",
        "Compliance & Cost Optimization:",
        "- Ensure ISO 26262 ASIL-D compliance for motor control systems.",
        "- Reduce PCB assembly costs by 20% through DFM and JLCPCB partnerships.",
        "- Negotiate volume pricing and NPI terms with domestic partners for critical components, reducing lead times by 30% versus offshore procurement."
      ],
      requirements: [
        "Education:",
        "- Required: B.E or B.Tech/M.E or M.Tech in Electronics and Communication Engineering or related field.",
        "Technical Skills:",
        "- Motor control algorithms (FOC, MTPA).",
        "- PCB design (4-8 layer, impedance-controlled).",
        "- AUTOSAR-compliant software architecture.",
        "Tools:",
        "- Design: Altium/Allegro/orCAD, MATLAB/Simulink.",
        "- Testing: Lauterbach TRACE32, Vector CANoe.",
        "- Version Control: Git, Bitbucket.",
        "Experience:",
        "- 3-5 years in automotive embedded systems (OEM/Tier 1).",
        "- Portfolio demonstrating ≥2 production-ready ECU designs.",
        "- Startup experience preferred (resource-constrained R&D).",
        "Certifications:",
        "- AUTOSAR Certified Engineer.",
        "- IPC-A-610 (PCB Acceptability)."
      ],
      formLink: "https://forms.gle/cMgRVFLwnQZnbL568",
      roleType: 'fulltime',
    },
    {
      title: "Mechanical Design & Integration Engineer",
      location: "Bengaluru, Karnataka",
      duration: "Full-Time",
      stipend: "Not Disclosed",
      about: "Join LCM, a pioneering EV tech startup founded by IIT Kharagpur alumni, dedicated to extending electric vehicle range through modular charging innovations. Backed by top incubators like Wadhwani Foundation, Atal Incubation Center, and IIMB NSRCEL, and funded by equity-free grants And we are a funded startup, we're driving India's sustainable mobility revolution.",
      overview: "Lead the end-to-end design, modeling, and integration of all mechanical systems and components for LCM's EV prototype. Work cross-functionally to ensure all subsystems (chassis, interiors, power electronics housings, etc.) are engineered for performance, manufacturability, and seamless integration with electrical and mechanical systems.",
      responsibilities: [
        "Mechanical System Design:",
        "- Develop 3D CAD models and detailed drawings for chassis, body, battery enclosures, powertrain mounts, and interior modules using tools like SolidWorks, CATIA, or Siemens NX.",
        "- Design for manufacturability (DFM) and assembly (DFA), considering cost, material selection, and supplier capabilities.",
        "- Familiarity with GD&T principles.",
        "- Engineer lightweight structures using advanced materials (aluminum, composites, high-strength steel).",
        "Subsystem Integration:",
        "- Integrate mechanical components with electrical (battery, power electronics) and thermal systems, ensuring proper fit, function, and safety.",
        "- Collaborate with electrical, thermal, and controls engineers to resolve packaging, mounting, and interface challenges.",
        "- Lead packaging studies and digital mock-ups to optimize space utilization and accessibility.",
        "Prototyping & Testing:",
        "- Build and test prototypes (physical and virtual) for critical assemblies (e.g., battery box, crash structures, seats).",
        "- Support validation through FEA (Finite Element Analysis) and physical testing (vibration, crash, thermal cycling).",
        "- Iterate designs based on test results, field feedback, and reliability data.",
        "Documentation & Compliance:",
        "- Create and maintain BOMs, assembly instructions, and technical documentation.",
        "- Ensure designs meet automotive safety standards (FMVSS, AIS, IS) and support homologation efforts.",
        "Supplier & Manufacturing Liaison:",
        "- Interface with suppliers for component sourcing, feasibility reviews, and cost negotiations.",
        "- Support process development for prototype and low-volume manufacturing (sheet metal, plastics, casting, additive manufacturing, 3D Printing (FDM, SLA, SLM))."
      ],
      requirements: [
        "Education:",
        "- Required: B.E. or B.Tech/M.E. or M.Tech in Mechanical Engineering.",
        "Technical Skills:",
        "- Proficiency in CAD (SolidWorks, CATIA, or NX).",
        "- Strong understanding of material properties and manufacturing processes (sheet metal, injection molding, casting, composites).",
        "- Experience with structural and thermal analysis (FEA/CFD).",
        "- Knowledge of automotive standards and safety requirements.",
        "Experience:",
        "- 3-7 years in automotive or related mechanical design roles.",
        "- Portfolio of at least one complete vehicle or major subsystem from concept to prototype/production.",
        "- Startup or rapid prototyping experience preferred.",
        "Certification:",
        "- SolidWorks Certified Professional/Expert (Preferred).",
        "- Siemens NX CAD Associate/Professional (Optional)."
      ],
      formLink: "https://forms.gle/cMgRVFLwnQZnbL568",
      roleType: 'fulltime',
    }, 
    {
      title: "Powertrain & Vehicle Dynamics Engineer",
      location: "Bengaluru, Karnataka",
      duration: "Full-Time",
      stipend: "Not Disclosed",
      about: "Join LCM, a pioneering EV tech startup founded by IIT Kharagpur alumni, dedicated to extending electric vehicle range through modular charging innovations. Backed by top incubators like Wadhwani Foundation, Atal Incubation Center, and IIMB NSRCEL, and funded by equity-free grants,and we are a funded startup. we're driving India's sustainable mobility revolution.",
      overview: "Lead the design, integration, and optimization of the electric powertrain, chassis, and vehicle dynamics systems for the LCM's EV prototype. Ensure seamless interaction between propulsion, suspension, steering, and braking systems for superior performance, safety, and ride quality.",
      responsibilities: [
        "Powertrain Design:",
        "- Design electric powertrain layouts (FWD, RWD, AWD) for optimal packaging and weight distribution.",
        "- Develop single-speed gearboxes with ≥95% mechanical efficiency.",
        "- Integrate regenerative braking systems to recover ≥20% of kinetic energy during deceleration.",
        "Chassis & Suspension Engineering:",
        "- Design modular chassis structures (steel/aluminum) with torsional stiffness ≥25 kN·m/deg.",
        "- Develop MacPherson strut/multi-link suspensions for urban/performance variants.",
        "- Optimize unsprung mass through lightweight knuckle and control arm designs.",
        "Vehicle Dynamics Tuning:",
        "- Conduct lap simulations (MSC Adams/CarSim) to optimize handling balance (understeer gradient: 1-3 deg/g).",
        "- Tune damping profiles for ride comfort (ISO 2631-1 vibration dose value ≤0.8 m/s²).",
        "- Implement torque vectoring algorithms for enhanced cornering stability.",
        "Safety & Compliance:",
        "- Ensure FMVSS/ECE R13 compliance for braking systems (0.8g deceleration @ 100 km/h).",
        "- Validate rollover resistance (SSF ≥1.25) through CAE and physical testing.",
        "Cost & Weight Optimization:",
        "- Reduce chassis weight by 15% via topology optimization and advanced materials (Aluminum alloys, AHSS, FMLs, Magnesium Alloys).",
        "- Achieve powertrain cost through DFM and supplier partnerships."
      ],
      requirements: [
        "Education:",
        "- Required: B.E or B.Tech/M.E or M.Tech in Mechanical Engineering/Automotive Engineering.",
        "Technical Skills:",
        "- Expertise in powertrain/chassis CAD (SolidWorks, CATIA, NX).",
        "- Proficiency in FEA/CFD tools (ANSYS, HyperWorks, Star-CCM+).",
        "- Strong knowledge of vehicle dynamics principles (tire modeling, suspension kinematics).",
        "Experience:",
        "- 3-7 years in automotive powertrain/chassis design (OEM/Tier 1).",
        "- Portfolio demonstrating ≥1 production vehicle or motorsport project.",
        "- Startup experience preferred (agile development, rapid prototyping).",
        "Certification:",
        "- SAE Vehicle Dynamics Certification (preferred).",
        "- ASQ Reliability Engineer (optional)."
      ],
      formLink: "https://forms.gle/cMgRVFLwnQZnbL568",
      roleType: 'fulltime',
    },  
    {
      title: "Thermal & Structural Systems Engineer",
      location: "Bengaluru, Karnataka",
      duration: "Full-Time",
      stipend: "Not Disclosed",
      about: "Join LCM, a pioneering EV tech startup founded by IIT Kharagpur alumni, dedicated to extending electric vehicle range through modular charging innovations. Backed by top incubators like Wadhwani Foundation, Atal Incubation Center, and IIMB NSRCEL, and funded by equity-free grants,and we are a funded startup. we're driving India's sustainable mobility revolution.",
      overview: "Lead the design, analysis, and validation of thermal and structural systems for the LCM's EV prototype. Ensure battery packs, powertrains, and vehicle structures are thermally efficient, structurally robust, and reliable under real-world conditions.",
      responsibilities: [
        "Thermal System Design:",
        "- Develop liquid-cooled battery thermal management systems with ±2°C cell temperature uniformity.",
        "- Design heat pump-based HVAC systems for battery cooling/heating.",
        "- Optimize refrigerant circuits (R1234yf/R744) for energy efficiency and compliance with SAE J2766/AIS-153.",
        "Structural Analysis & Optimization:",
        "- Perform FEA (static, dynamic, fatigue) on chassis, battery enclosures, and crash structures using ANSYS/ABAQUS.",
        "- Conduct CFD simulations for airflow, thermal management, and aerodynamics (reduce drag coefficient by ≥10%).",
        "- Validate designs through virtual and physical testing (vibration, thermal shock, crush tests).",
        "Reliability Engineering:",
        "- Implement HALT/HASS testing (-40°C to +85°C) for battery packs and power electronics.",
        "- Conduct FMEA and root cause analysis for field failures.",
        "- Achieve ASIL-C/D compliance for safety-critical systems (ISO 26262).",
        "Cost & Weight Optimization:",
        "- Reduce thermal system energy consumption by ≥20% through control strategy optimization.",
        "- Lower structural component mass by 15% using topology optimization and advanced materials (Aluminum alloys, AHSS, FMLs, Magnesium Alloys)."
      ],
      requirements: [
        "Education:",
        "- Required: B.E or B.Tech/M.E or M.Tech in Mechanical Engineering/Automotive Engineering.",
        "Technical Skills:",
        "- Expertise in FEA/CFD tools (ANSYS, Star-CCM+, HyperMesh).",
        "- Proficiency in thermal system design (refrigerant circuits, cold plates, heat exchangers).",
        "- Knowledge of automotive materials (high-strength steel, composites, phase-change materials).",
        "Experience:",
        "- 3-7 years in EV/hybrid thermal or structural engineering (OEM/Tier 1).",
        "- Portfolio demonstrating ≥1 production-ready thermal/structural system.",
        "- Startup experience preferred (agile prototyping, cost-driven design).",
        "Certifications:",
        "- ASQ Certified Reliability Engineer (preferred).",
        "- AEF Thermal Management Specialist (optional)."
      ],
      formLink: "https://forms.gle/cMgRVFLwnQZnbL568",
      roleType: 'fulltime',
    },
    {
      title: "Interior Design Engineer",
      location: "Bengaluru, Karnataka",
      duration: "Full-Time",
      stipend: "Not Disclosed",
      about: "Join LCM, a pioneering EV tech startup founded by IIT Kharagpur alumni, dedicated to extending electric vehicle range through modular charging innovations. Backed by top incubators like Wadhwani Foundation, Atal Incubation Center, and IIMB NSRCEL, and funded by equity-free grants,and we are a funded startup. we're driving India's sustainable mobility revolution.",//"Join LCM, a pioneering EV tech startup founded by IIT Kharagpur alumni, dedicated to extending electric vehicle range through modular charging innovations. Backed by top incubators like Wadhwani Foundation, Atal Incubation Center, and IIMB NSRCEL, and funded by equity-free grants, and we are a funded startup. we're driving India's sustainable mobility revolution.",
      overview: "Lead the design, development, and integration of vehicle interior systems, ensuring functional, aesthetic, and safety compliance. Drive innovation in material selection and manufacturability while collaborating cross-functionally to deliver production-ready interiors for electric vehicles.",
      responsibilities: [
        "Interior System Design:",
        "- Develop 3D CAD models (CATIA, Siemens NX) for door trims, headliners, pillars, carpets, and HVAC ducts, ensuring ±1mm tolerances for fitment.",
        "- Design DFM/DFA-optimized components using plastics, composites, and fabrics (e.g., recycled PET, vegan leather).",
        "- Integrate airbags, HVAC systems, and electrical subsystems (infotainment, lighting) into interior layouts.",
        "Cross-Functional Collaboration:",
        "- Partner with electrical teams to route wiring harnesses through trim components without compromising aesthetics.",
        "- Validate thermal/acoustic insulation performance (≤40 dB cabin noise) and airflow efficiency (≥90% HVAC duct efficacy).",
        "- Conduct packaging studies to optimize space for ADAS sensors and battery enclosures.",
        "Prototyping & Validation:",
        "- Build physical prototypes for critical components (e.g., injection-molded door panels) and validate via FEA (structural integrity) and DFMEA (failure mode analysis).",
        "- Execute durability testing (ISO 16750-3) for trim components under Indian conditions (humidity, dust, 20G vibrations).",
        "Compliance & Documentation:",
        "- Ensure designs meet AIS-098 (crash safety) and FMVSS 201 (interior impact) standards.",
        "- Maintain BOMs, GD&T drawings, and validation reports for homologation.",
        "Supplier & Cost Optimization:",
        "- Source BIS-certified materials (IS 14618 for plastics) and negotiate with suppliers for 15% cost reduction.",
        "- Implement tooling feasibility reviews for injection molding and thermoforming processes."
      ],
      requirements: [
        "Education:",
        "- Required: B.E./B.Tech or M.E./M.Tech in Mechanical/Automotive Engineering.",
        "Technical Skills:",
        "- Expertise in CATIA V5/V6 or Siemens NX for surface and solid modeling.",
        "- Proficiency in material selection (thermoplastics, composites) and manufacturing processes (injection molding, compression molding).",
        "- Knowledge of automotive standards (AIS-098, FMVSS 201) and validation protocols (DVP, DFMEA).",
        "Experience:",
        "- 3-7 years in automotive interior design (OEM/Tier 1), with a portfolio showcasing ≥1 production component (e.g., headliner, door trim).",
        "- Experience with cross-functional teams (electrical, safety) and rapid prototyping (3D printing, CNC machining).",
        "Certifications:",
        "- CATIA Certified Professional (preferred).",
        "- Six Sigma Green Belt (for DFM/DFA optimization)."
      ],
      formLink: "https://forms.gle/cMgRVFLwnQZnbL568",
      roleType: 'fulltime',
    },
    {
      title: "HVAC Design Engineer",
      location: "Bengaluru, Karnataka",
      duration: "Full-Time",
      stipend: "Not Disclosed",
      about: "Join LCM, a pioneering EV tech startup founded by IIT Kharagpur alumni, dedicated to extending electric vehicle range through modular charging innovations. Backed by top incubators like Wadhwani Foundation, Atal Incubation Center, and IIMB NSRCEL, and funded by equity-free grants,and we are a funded startup. we're driving India's sustainable mobility revolution.",
      overview: "Lead the design, development, and validation of HVAC systems for the LCM's EV prototype. Ensure thermal comfort, energy efficiency, and seamless integration of cabin climate control and battery thermal management systems under diverse operating conditions.",
      responsibilities: [
        "HVAC System Design:",
        "- Design heat pump-based HVAC systems for cabin cooling/heating and battery thermal management, achieving ±1.5°C temperature uniformity.",
        "- Optimize refrigerant circuits (R1234yf/R744) for energy efficiency, ensuring compliance with SAE J2766, AIS-153, and ECE R742.",
        "- Develop air filtration systems with HEPA/activated carbon filters for cabin air quality (PM2.5 removal ≥95%).",
        "Simulation & Analysis:",
        "- Conduct CFD simulations (ANSYS Fluent/Star-CCM+) for airflow distribution, defrosting performance, and condenser/evaporator efficiency.",
        "- Perform FEA on HVAC assemblies (vibration, structural integrity) and validate against ISO 16750-3 (mechanical loads).",
        "- Collaborate with aerodynamics teams to minimize drag from HVAC intake/exhaust systems.",
        "Prototyping & Validation:",
        "- Build and test HVAC prototypes in environmental chambers (-30°C to +55°C) for performance under extreme conditions.",
        "- Execute HALT/HASS testing on blowers, compressors, and PTC heaters to validate 10-year durability.",
        "- Lead NVH optimization to reduce HVAC noise to ≤40 dB(A) at full load.",
        "Cost & Energy Optimization:",
        "- Reduce HVAC energy consumption by ≥25% via predictive thermal load management and variable-speed compressors.",
        "- Lower system mass by 15% using aluminum/magnesium housings and compact heat exchangers.",
        "- Collaborate with suppliers to source cost-effective components (e.g., TX valves, sensors) meeting IATF 16949 standards."
      ],
      requirements: [
        "Education:",
        "- Required: B.E./B.Tech or M.E./M.Tech in Mechanical Engineering/Automotive Engineering.",
        "Technical Skills:",
        "- Expertise in HVAC simulation tools (ANSYS, Star-CCM+, Kuli).",
        "- Proficiency in refrigerant circuit design and psychrometric analysis.",
        "- Knowledge of automotive HVAC standards (SAE J639, ISO 19453) and thermal materials (phase-change, aerogels).",
        "Experience:",
        "- 3-7 years in automotive HVAC design (OEM/Tier 1), preferably in EVs/hybrids.",
        "- Portfolio demonstrating ≥1 production-ready HVAC system (cabin/battery thermal management).",
        "- Startup or rapid prototyping experience (agile testing, iterative design).",
        "Certifications:",
        "- SAE Thermal Management Professional (preferred).",
        "- ASHRAE Certified HVAC Designer (optional).",
        "- Six Sigma Green Belt (reliability testing)."
      ],
      formLink: "https://forms.gle/cMgRVFLwnQZnbL568",
      roleType: 'fulltime',
    },    
       
    
  ];

  const [selectedPositionTitle, setSelectedPositionTitle] = useState<string | null>(null);
  const [roleFilter, setRoleFilter] = useState<'intern' | 'fulltime'>('intern'); // New state

  const filteredPositions = positions.filter(
    (position) => position.roleType === roleFilter
  );

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
          {/* Toggle for Internships/Full-Time */}
          <div className="flex justify-center mb-12">
            <button
              className={`px-6 py-2 rounded-l-full font-medium border border-primary-500 focus:outline-none transition-colors duration-200 ${roleFilter === 'intern' ? 'bg-primary-500 text-white' : 'bg-dark-800 text-primary-500 hover:bg-primary-500/10'}`}
              onClick={() => setRoleFilter('intern')}
            >
              Internships
            </button>
            <button
              className={`px-6 py-2 rounded-r-full font-medium border-t border-b border-r border-primary-500 focus:outline-none transition-colors duration-200 ${roleFilter === 'fulltime' ? 'bg-primary-500 text-white' : 'bg-dark-800 text-primary-500 hover:bg-primary-500/10'}`}
              onClick={() => setRoleFilter('fulltime')}
            >
              Full-Time
            </button>
          </div>
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
            {filteredPositions.map((position) => (
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
