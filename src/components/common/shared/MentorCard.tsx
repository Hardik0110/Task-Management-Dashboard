import React from 'react';
import { Star } from 'lucide-react';
import { Notepad2 } from 'iconsax-react';
import { Avatar } from './Avatar';
import { Mentor } from '@/lib/types';

interface MentorCardProps {
  mentor: Mentor;
  isDetailed?: boolean;
}

const MentorCard: React.FC<MentorCardProps> = ({ mentor, isDetailed = false }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
    <div className="flex items-center justify-between mb-3">
      <div className="flex items-center">
        <Avatar src={mentor.image} alt={mentor.name} size="md" className="mr-3" />
        <div>
          <h3 className="font-medium">{mentor.name}</h3>
          <p className="text-xs text-gray-500">{mentor.role}</p>
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
      <p className="text-sm text-gray-600 mb-3 line-clamp-2">{mentor.description}</p>
    )}

    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <Notepad2 className="h-4 w-4 text-gray-500 mr-1" size={16} color="#333" />
        <span className="text-xs">{mentor.taskCount} Task</span>
      </div>
      <div className="flex items-center">
        <Star className="h-4 w-4 text-yellow-400 mr-1" fill="currentColor" />
        <span className="text-xs">
          {mentor.rating} ({mentor.reviews} Reviews)
        </span>
      </div>
    </div>
  </div>
)
};

export default MentorCard;