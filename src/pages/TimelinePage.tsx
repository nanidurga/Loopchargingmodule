import React from 'react';
import TimelineSection from '../components/home/TimelineSection';
import PageTransition from '../components/layout/PageTransition';

const TimelinePage: React.FC = () => {
  return (
    <PageTransition>
      <div className="pt-16 md:pt-20"> {/* Added padding to account for fixed header */}
        <TimelineSection />
      </div>
    </PageTransition>
  );
};

export default TimelinePage; 