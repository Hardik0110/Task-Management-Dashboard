import React from 'react';
import TaskCard from './TaskCard';
import SectionHeader from '../common/SectionHeader';
import { useCarousel } from '@/hooks/use-carousel';
import { upcomingTasks } from '@/lib/data';

const UpcomingTasksSection: React.FC = () => {
  const cardsToShow = 2;
  const { 
    handlePrevious, 
    handleNext, 
    isFirstPage, 
    isLastPage, 
    visibleItems 
  } = useCarousel({
    totalItems: upcomingTasks.length,
    itemsPerPage: cardsToShow
  });

  return (
    <div>
      <SectionHeader 
        title="Upcoming Task"
        hasNavigation={true}
        onPrevious={handlePrevious}
        onNext={handleNext}
        disablePrevious={isFirstPage}
        disableNext={isLastPage}
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {visibleItems(upcomingTasks).map((task) => (
          <TaskCard
            key={task.id}
            id={task.id}
            title={task.title}
            role={task.role}
            progress={task.progress}
            daysLeft={task.daysLeft}
            image={task.image}
            teamMembers={task.teamMembers}
          />
        ))}
      </div>
    </div>
  );
};

export default UpcomingTasksSection;