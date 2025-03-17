import React from 'react';
import { MoreHorizontal } from 'lucide-react';
import TaskDetailCard from '../ui/TaskDetailCard';
import avatar1 from '/src/assets/avatar1.png'
import avatar2 from '/src/assets/avatar2.png'
import avatar3 from '/src/assets/avatar3.png'
import Image1 from '/src/assets/Image1.png'

const TaskTodaySection: React.FC = () => {
 
  const taskToday = {
    title: 'Creating Awesome Mobile Apps',
    role: 'UI/UX Designer',
    progress: 90,
    timeLeft: '1 Hour',
    image: Image1,
    teamMembers: [
      { name: 'Alex Johnson', avatar: avatar1 },
      { name: 'Sarah Miller', avatar: avatar2 },
      { name: 'Mike Chen', avatar: avatar3 },
      { name: 'Emily Wilson', avatar: avatar2 },
    ],
    steps: [
      { number: 1, description: 'Understanding the tools in Figma' },
      { number: 2, description: 'Understand the basics of making designs' },
      { number: 3, description: 'Design a mobile application with figma' },
    ],
  };

  return (
    <div className="h-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Task Today</h2>
        <button>
          <MoreHorizontal className="h-4 w-4" />
        </button>
      </div>
      
      <TaskDetailCard
        title={taskToday.title}
        role={taskToday.role}
        progress={taskToday.progress}
        timeLeft={taskToday.timeLeft}
        image={taskToday.image}
        teamMembers={taskToday.teamMembers}
        steps={taskToday.steps}
      />
    </div>
  );
};

export default TaskTodaySection;