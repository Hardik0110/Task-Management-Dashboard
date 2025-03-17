import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import TaskCard from '../ui/TaskCard';
import avatar1 from '/src/assets/avatar1.png'
import avatar2 from '/src/assets/avatar2.png'
import avatar3 from '/src/assets/avatar3.png'
import Image2 from '/src/assets/Image2.png'
import Image3 from '/src/assets/Image3.png'

const UpcomingTasksSection: React.FC = () => {
  const tasks = [
    {
      id: '1',
      title: 'Creating Mobile App Design',
      role: 'UI/UX Designer',
      progress: 75,
      daysLeft: 3,
      image: Image2,
      teamMembers: [
        { name: 'Alex Johnson', avatar: avatar1 },
        { name: 'Sarah Miller', avatar: avatar2 },
        { name: 'Mike Chen', avatar: avatar3 },
      ],
    },
    {
      id: '2',
      title: 'Creating Perfect Website',
      role: 'Web Designer',
      progress: 85,
      daysLeft: 4,
      image: Image3,
      teamMembers: [
        { name: 'Emily Wilson', avatar: avatar1 },
        { name: 'David Lee', avatar: avatar2 },
        { name: 'Jessica Taylor', avatar: avatar3 },
        { name: 'Ryan Brown', avatar: avatar2 },
      ],
    },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Upcoming Task</h2>
        <div className="flex space-x-4">
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