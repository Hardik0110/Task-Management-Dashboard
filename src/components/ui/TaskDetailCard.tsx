import React from 'react';
import { Clock } from 'lucide-react';

type TaskStep = {
  number: number;
  description: string;
  completed?: boolean;
};

type TaskDetailCardProps = {
  title: string;
  role: string;
  progress: number;
  timeLeft: string;
  image: string;
  teamMembers?: { name: string; avatar: string }[];
  steps: TaskStep[];
};

const TaskDetailCard: React.FC<TaskDetailCardProps> = ({
  title,
  role,
  progress,
  timeLeft,
  image,
  teamMembers = [],
  steps,
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
          <div className="flex justify-between items-center mb-1">
            <span className="text-sm font-medium">Progress</span>
            <span className="text-sm font-medium text-blue-600">{progress}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-600 h-2 rounded-full" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
        
        <div className="flex items-center mt-4">
          <Clock className="h-4 w-4 text-gray-500 mr-1" />
          <span className="text-sm">{timeLeft}</span>
          
          <div className="ml-auto flex -space-x-2">
            {teamMembers.length > 0 ? (
              teamMembers.slice(0, 4).map((member, i) => (
                <img 
                  key={i}
                  src={member.avatar}
                  alt={member.name}
                  className="w-6 h-6 rounded-full border-2 border-white"
                  title={member.name}
                />
              ))
            ) : (
              // Placeholder avatars if no team members provided
              Array(4).fill(0).map((_, i) => (
                <div 
                  key={i}
                  className="w-6 h-6 rounded-full border-2 border-white bg-gray-200"
                />
              ))
            )}
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