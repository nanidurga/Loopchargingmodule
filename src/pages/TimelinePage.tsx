import React from 'react';
import TimelineSection from '../components/home/TimelineSection';

const TimelinePage: React.FC = () => {
  return (
      <div className="pt-16 md:pt-20"> {/* Added padding to account for fixed header */}
        <TimelineSection />
      </div>
  );
};

export default TimelinePage; 
