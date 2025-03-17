import React from 'react';
import { MoreHorizontal } from 'lucide-react';
import TaskDetailCard from './TaskDetailCard';
import SectionHeader from '../common/SectionHeader';
import IconButton from './IconButton';
import { taskToday } from '@/lib/data';

const TaskTodaySection: React.FC = () => {
  return (
    <div className="h-full">
      <SectionHeader 
        title="Task Today"
        rightContent={
          <IconButton 
            icon={<MoreHorizontal className="h-4 w-4" />}
            ariaLabel="More options"
          />
        }
      />
      
      <TaskDetailCard
        id={taskToday.id}
        title={taskToday.title}
        role={taskToday.role}
        progress={taskToday.progress}
        timeLeft={taskToday.timeLeft}
        daysLeft={taskToday.daysLeft}
        image={taskToday.image}
        teamMembers={taskToday.teamMembers}
        steps={taskToday.steps}
      />
    </div>
  );
};

export default TaskTodaySection;