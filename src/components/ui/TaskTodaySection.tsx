import React from 'react';
import TaskDetailCard from '../common/shared/DetailedTaskCard';
import SectionHeader from '../common/SectionHeader';
import IconButton from './IconButton';
import { taskToday } from '@/lib/data';
import { More } from 'iconsax-react';

const TaskTodaySection: React.FC = () => {
  return (
    <div className="h-full">
      <SectionHeader 
        title="Task Today"
        rightContent={
          <IconButton 
            icon={<More className="h-4 w-4" color='#333' />}
            ariaLabel="More options"
          />
        }
      />
      
      <TaskDetailCard
        id={String(taskToday.id)}
        title={taskToday.title}
        role={taskToday.role}
        progress={taskToday.progress}
        timeLeft={taskToday.timeLeft ?? ''}
        image={taskToday.image}
        teamMembers={taskToday.teamMembers}
        steps={taskToday.steps?.map(step => ({ ...step, completed: false }))}
      />
    </div>
  );
};

export default TaskTodaySection;