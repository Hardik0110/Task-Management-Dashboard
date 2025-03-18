import React from 'react';
import { Clock } from 'lucide-react';
import { Task } from '@/lib/types';
import ProgressBar from './ProgressBar';
import { AvatarStack } from './Avatar';

const TaskDetailCard: React.FC<Task> = ({
  title,
  role,
  progress,
  timeLeft,
  image,
  teamMembers = [],
  steps = [],
}) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-40 object-cover"
      />
      
      <div className="p-4">
        <h3 className="font-semibold">{title}</h3>
        <p className="text-xs text-gray-500">{role}</p>
        
        <div className="mt-4">
          <ProgressBar 
            progress={progress} 
            showLabel={true}
            height="md"
          />
        </div>
        
        <div className="flex items-center mt-4">
          <Clock className="h-4 w-4 text-gray-500 mr-1" />
          <span className="text-sm">{timeLeft}</span>
          
          <div className="ml-auto">
            <AvatarStack members={teamMembers} maxAvatars={4} size="sm" />
          </div>
        </div>
        
        <div className="mt-6">
          <h4 className="text-sm font-medium mb-3">Detail Task</h4>
          <p className="text-xs text-gray-500 mb-2">{role}</p>
          
          <ol className="space-y-3 mt-4">
            {steps.map((step) => (
              <li key={step.number} className="flex">
                <span className="mr-2 text-sm">{step.number}</span>
                <span className={`text-sm ${step.completed ? 'line-through text-gray-400' : ''}`}>
                  {step.description}
                </span>
              </li>
            ))}
          </ol>
          
          <button className="w-full bg-blue-600 text-white py-3 rounded-lg mt-6 hover:bg-blue-700 transition-colors">
            Go To Detail
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskDetailCard;