import React from 'react';
import { CheckCircle } from 'lucide-react';
import { Clock } from 'lucide-react';
import { AlertCircle } from 'lucide-react';

interface TimelineItemProps {
  title: string;
  description: string;
  status: 'completed' | 'in-progress' | 'upcoming';
  date: string;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ title, description, status, date }) => {
  const statusIcons = {
    'completed': <CheckCircle className="h-5 w-5 text-green-500" />,
    'in-progress': <Clock className="h-5 w-5 text-primary-500 animate-pulse" />,
    'upcoming': <AlertCircle className="h-5 w-5 text-yellow-500" />
  };

  const statusLabels = {
    'completed': 'Completed',
    'in-progress': 'In Progress',
    'upcoming': 'Upcoming'
  };

  const statusClasses = {
    'completed': 'bg-green-500/10 text-green-500 border-green-500/20',
    'in-progress': 'bg-primary-500/10 text-primary-500 border-primary-500/20',
    'upcoming': 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20'
  };

  return (
    <div className="relative flex items-start pb-12">
      {/* Timeline line */}
      <div className="absolute top-0 left-6 h-full w-px bg-white/10"></div>
      
      {/* Timeline dot */}
      <div className={`absolute top-0 left-0 w-12 h-12 rounded-full flex items-center justify-center z-10 ${
        status === 'completed' ? 'bg-green-500/20' : 
        status === 'in-progress' ? 'bg-primary-500/20' : 
        'bg-dark-700'
      }`}>
        {statusIcons[status]}
      </div>
      
      {/* Content */}
      <div className="ml-20">
        <div className="flex flex-col md:flex-row md:items-center mb-2 gap-2">
          <h3 className="font-display font-semibold text-xl text-white mr-3">{title}</h3>
          <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${statusClasses[status]}`}>
            {statusLabels[status]}
          </span>
        </div>
        <p className="text-white/70 mb-2">{description}</p>
        <p className="text-sm text-white/50">{date}</p>
      </div>
    </div>
  );
};

const TimelineSection: React.FC = () => {
  const timelineItems: TimelineItemProps[] = [
    {
      title: "Prototype Built",
      description: "First working prototype of LCM technology developed and tested in controlled laboratory environment.",
      status: "completed",
      date: "Feb 2025"
    },
    {
      title: "Bench Testing",
      description: "Comprehensive performance testing across various simulated conditions to refine the technology.",
      status: "completed",
      date: "Mar 2025"
    },
    {
      title: "Electrical Integration Research for Electric Vehicles (EVs)",
      description: " Conducting in-depth research on the seamless electrical integration of the Loop Charging Module (LCM) with electric vehicle systems.",
      status: "in-progress",
      date: "May - Jun 2025"
    },
    {
      title: "BMS modification",
      description: "Modifying the EV's Battery Management System (BMS) to enable simultaneous charging and discharging of the battery pack",
      status: "upcoming",
      date: "Jul 2025"
    },
    {
      title: "Initial Trials of Electrical Integration",
      description: "Executing preliminary trials to evaluate the electrical integration of the Loop Charging Module (LCM) with electric vehicle systems",
      status: "upcoming",
      date: "Jul 2025"
    },
    {
      title: "Vehicle-Level Integration",
      description: "Integrating the Loop Charging Module (LCM) into an electric vehicle for real-world testing, performance evaluation, and system validation.",
      status: "upcoming",
      date: "Aug 2025"
    },
    {
      title: "Regulatory Compliance and Certifications",
      description: " Securing essential certifications and regulatory approvals to enable large-scale manufacturing and market deployment.",
      status: "upcoming",
      date: "Sep 2025"
    },
    {
      title: "OEM Pilot Program",
      description: "Partnerships with select vehicle manufacturers for initial production integration.",
      status: "upcoming",
      date: "Oct 2025"
    }
  ];

  return (
    <section id="timeline" className="py-20 bg-gradient-to-b from-dark-900 to-dark-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">
            Development Timeline
          </h2>
          <p className="text-white/70 text-lg">
            Follow our journey from prototype to OEM integration as we bring this revolutionary technology to market.
          </p>
        </div>

        <div className="bg-dark-800 border border-white/10 rounded-2xl p-8 shadow-lg relative">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-500/5 to-secondary-500/5 rounded-2xl"></div>
          
          <div className="relative z-10">
            {timelineItems.map((item, index) => (
              <TimelineItem
                key={index}
                title={item.title}
                description={item.description}
                status={item.status}
                date={item.date}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;