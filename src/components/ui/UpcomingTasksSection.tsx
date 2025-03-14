import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import TaskCard from '../ui/TaskCard';

const UpcomingTasksSection: React.FC = () => {
  // Sample data - replace with your actual data
  const tasks = [
    {
      id: '1',
      title: 'Creating Mobile App Design',
      role: 'UI/UX Designer',
      progress: 75,
      daysLeft: 3,
      image: '/placeholder.svg?height=150&width=200',
      teamMembers: [
        { name: 'Alex Johnson', avatar: '/placeholder.svg?height=24&width=24&text=1' },
        { name: 'Sarah Miller', avatar: '/placeholder.svg?height=24&width=24&text=2' },
        { name: 'Mike Chen', avatar: '/placeholder.svg?height=24&width=24&text=3' },
      ],
    },
    {
      id: '2',
      title: 'Creating Perfect Website',
      role: 'Web Designer',
      progress: 85,
      daysLeft: 4,
      image: '/placeholder.svg?height=150&width=200',
      teamMembers: [
        { name: 'Emily Wilson', avatar: '/placeholder.svg?height=24&width=24&text=1' },
        { name: 'David Lee', avatar: '/placeholder.svg?height=24&width=24&text=2' },
        { name: 'Jessica Taylor', avatar: '/placeholder.svg?height=24&width=24&text=3' },
        { name: 'Ryan Brown', avatar: '/placeholder.svg?height=24&width=24&text=4' },
      ],
    },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Upcoming Task</h2>
        <div className="flex space-x-2">
          <button className="p-1 rounded-full border">
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button className="p-1 rounded-full border">
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
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