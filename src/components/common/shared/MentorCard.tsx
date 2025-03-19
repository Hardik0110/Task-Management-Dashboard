import React from 'react';
import { Star } from 'lucide-react';
import { Notepad2 } from 'iconsax-react';
import { Avatar } from '../../ui/Avatar';
import { Mentor } from '@/lib/types';
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';

interface MentorCardProps {
  mentor: Mentor;
  isDetailed?: boolean;
}

const MentorCard: React.FC<MentorCardProps> = ({ mentor, isDetailed = false }) => {
  return (
    <Card className='bg-white p-2'>
      <CardHeader>
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Avatar src={mentor.image} alt={mentor.name} size="xl" />
              <div>
                <CardTitle>{mentor.name}</CardTitle>
                <CardDescription>{mentor.role}</CardDescription>
              </div>
            </div>
            <button
              className={`text-xs font-medium px-3 py-1 rounded-full ${
                mentor.followed
                  ? "text-gray-700 bg-gray-100"
                  : "text-blue-600 border border-blue-600"
              }`}
            >
              {mentor.followed ? "Followed" : "+ Follow"}
            </button>
          </div>

          {isDetailed && (
            <CardContent className="">
              <p className="text-sm text-gray-600 line-clamp-2">{mentor.description}</p>
            </CardContent>
          )}

          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Notepad2 className="h-4 w-4 text-gray-500 mr-2" size={16} color="#333" />
              <span className="text-xs">{mentor.taskCount} Task</span>
            </div>
            <div className="flex items-center">
              <Star className="h-4 w-4 text-yellow-400  mr-1" fill="currentColor" />
              <span className="text-xs">
                {mentor.rating} ({mentor.reviews} Reviews)
              </span>
            </div>
          </div>
        </div>
      </CardHeader>
    </Card>
  );
};

export default MentorCard;