import React from 'react';
import { MoreHorizontal } from 'lucide-react';
import TaskDetailCard from '../ui/TaskDetailCard';

const TaskTodaySection: React.FC = () => {
  // Sample data - replace with your actual data
  const taskToday = {
    title: 'Creating Awesome Mobile Apps',
    role: 'UI/UX Designer',
    progress: 90,
    timeLeft: '1 Hour',
    image: '/placeholder.svg?height=150&width=300',
    teamMembers: [
      { name: 'Alex Johnson', avatar: '/placeholder.svg?height=24&width=24&text=1' },
      { name: 'Sarah Miller', avatar: '/placeholder.svg?height=24&width=24&text=2' },
      { name: 'Mike Chen', avatar: '/placeholder.svg?height=24&width=24&text=3' },
      { name: 'Emily Wilson', avatar: '/placeholder.svg?height=24&width=24&text=4' },
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