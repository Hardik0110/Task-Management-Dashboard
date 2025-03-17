import React from 'react';
import { Clock } from 'lucide-react';

type TaskCardProps = {
  title: string;
  role: string;
  progress: number;
  daysLeft: number;
  image: string;
  teamMembers?: { name: string; avatar: string }[];
};

const TaskCard: React.FC<TaskCardProps> = ({
  title,
  role,
  progress,
  daysLeft,
  image,
  teamMembers = [],
}) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm">
      <img src={image} alt={title} className="w-full h-32 object-cover" />
      <div className="p-4">
        <h3 className="font-medium">{title}</h3>
        <p className="text-xs text-gray-500">{role}</p>
        
        <div className="mt-4">
          <div className="flex justify-between items-center mb-1">
            <span className="text-xs">Progress</span>
            <span className="text-xs text-blue-600">{progress}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-1">
            <div 
              className="bg-blue-600 h-1 rounded-full" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
        
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center">
            <Clock className="h-4 w-4 text-gray-500 mr-1" />
            <span className="text-xs">{daysLeft} Days Left</span>
          </div>
          
          <div className="flex -space-x-2">
            {teamMembers.length > 0 ? (
              teamMembers.slice(0, 5).map((member, i) => (
                <img 
                  key={i}
                  src={member.avatar}
                  alt={member.name}
                  className="w-5 h-5 rounded-full border-2 border-white"
                  title={member.name}
                />
              ))
            ) : (
              // Placeholder avatars if no team members provided
              Array(5).fill(0).map((_, i) => (
                <div 
                  key={i}
                  className="w-5 h-5 rounded-full border-2 border-white bg-gray-200"
                />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;