import React from 'react';
import { Clock } from 'lucide-react';
import { TaskDetailCardProps } from '@/lib/types';
import ProgressBar from './ProgressBar';
import { AvatarStack } from '../../ui/Avatar';
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  CardTitle,
  CardDescription,
} from '@/components/ui/Card';
import { useNavigate } from 'react-router-dom';

const TaskDetailCard: React.FC<TaskDetailCardProps> = ({
  id,
  title,
  role,
  progress,
  timeLeft,
  image,
  teamMembers = [],
  steps = [],
}) => {
  const navigate = useNavigate();

  const handleGoToDetail = () => {
    navigate(`/task/${id}`);
  };

  return (
    <Card className="overflow-hidden ">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-40 object-cover"
      />
      
      <CardHeader className='mt-2'>
        <CardTitle>{title}</CardTitle>
        <CardDescription className=''>{role}</CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-6 mt-2">
        <ProgressBar 
          progress={progress} 
          showLabel={true}
          height="md"
        />
        
        <div className="flex items-center">
          <Clock className="h-4 w-4 text-gray-500 mr-1" />
          <span className="text-sm">{timeLeft}</span>
          
          <div className="ml-auto">
            <AvatarStack members={teamMembers} maxAvatars={4} size="sm" />
          </div>
        </div>
        
        <div>
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
        </div>
      </CardContent>

      <CardFooter className="mt-auto">
        <button 
          onClick={handleGoToDetail}
          className="w-full bg-blue-600 text-white py-3 mt-5 rounded-lg hover:bg-blue-700 transition-colors" >
          Go To Detail
        </button>
      </CardFooter>
    </Card>
  );
};

export default TaskDetailCard;