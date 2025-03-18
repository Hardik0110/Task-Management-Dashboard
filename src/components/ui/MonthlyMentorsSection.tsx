import React from 'react';
import MentorCard from './MentorCard';
import SectionHeader from '../common/SectionHeader';
import { useCarousel } from '@/hooks/use-carousel';
import { mentors } from '@/lib/data';

const MonthlyMentorsSection: React.FC = () => {
  const cardsToShow = 2;
  const { 
    handlePrevious, 
    handleNext, 
    isFirstPage, 
    isLastPage, 
    visibleItems 
  } = useCarousel({
    totalItems: mentors.length,
    itemsPerPage: cardsToShow
  });

  return (
    <div>
      <SectionHeader 
        title="Monthly Mentors"
        hasNavigation={true}
        onPrevious={handlePrevious}
        onNext={handleNext}
        disablePrevious={isFirstPage}
        disableNext={isLastPage}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {visibleItems(mentors).map((mentor) => (
          <div key={mentor.id} className="transition-all duration-300 ease-in-out">
            <MentorCard
              mentor={mentor}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MonthlyMentorsSection;