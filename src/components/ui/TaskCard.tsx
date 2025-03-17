import React from 'react';
import { Clock } from 'lucide-react';
import { Task } from '@/lib/types';
import ProgressBar from './ProgressBar';
import { AvatarStack } from './Avatar';

const TaskCard: React.FC<Task> = ({
  title,
  role,
  progress,
  daysLeft,
  image,
  teamMembers,
}) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm">
      <img src={image} alt={title} className="w-full h-32 object-cover" />
      <div className="p-4">
        <h3 className="font-medium">{title}</h3>
        <p className="text-xs text-gray-500">{role}</p>
        
        <div className="mt-4">
          <ProgressBar progress={progress} />
        </div>
        
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center">
            <Clock className="h-4 w-4 text-gray-500 mr-1" />
            <span className="text-xs">{daysLeft} Days Left</span>
          </div>
          
          <AvatarStack members={teamMembers} maxAvatars={5} size="xs" />
        </div>
      </div>
    </div>
  );
};

export default TaskCard;