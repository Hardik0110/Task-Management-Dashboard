import React from 'react';
import { Clock } from 'lucide-react';
import { Task } from '@/lib/types';
import ProgressBar from './ProgressBar';
import { AvatarStack } from '../../ui/Avatar';
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from '@/components/ui/Card';

const TaskCard: React.FC<Task> = ({
  title,
  role,
  progress,
  daysLeft,
  image,
  teamMembers,
}) => {
  return (
    <Card className="overflow-hidden shadow-sm">
      <CardHeader className="p-0">
        <img src={image} alt={title} className="w-full h-32 object-cover" />
      </CardHeader>

      <CardContent className="p-4">
        <h3 className="font-medium">{title}</h3>
        <p className="text-xs text-gray-500">{role}</p>

        <div className="mt-4">
          <ProgressBar progress={progress} />
        </div>
      </CardContent>

      <CardFooter className="flex items-center justify-between p-4">
        <div className="flex items-center">
          <Clock className="h-4 w-4 text-gray-500 mr-1" />
          <span className="text-xs">{daysLeft} Days Left</span>
        </div>

        <AvatarStack members={teamMembers} maxAvatars={5} size="xs" />
      </CardFooter>
    </Card>
  );
};

export default TaskCard;