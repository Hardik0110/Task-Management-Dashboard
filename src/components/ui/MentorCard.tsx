import React from 'react';
import { Star } from 'lucide-react';
import { Notepad2 } from 'iconsax-react';
import { Avatar } from './Avatar';
import { Mentor } from '@/lib/types';

const MentorCard: React.FC<Mentor> = ({
  name,
  role,
  taskCount,
  rating,
  reviews,
  followed,
  image
}) => {
  return (
    <div className="bg-white p-4 rounded-lg flex items-center shadow-sm">
      <Avatar src={image} alt={name} size="lg" className="mr-3" />
      
      <div className="flex-1">
        <h3 className="font-medium">{name}</h3>
        <p className="text-xs text-gray-500">{role}</p>
        <div className="flex items-center mt-2">
          <div className="flex items-center mr-4">
            <Notepad2 className="h-4 w-4 text-gray-500 mr-1" size={16} color='#333'/>
            <span className="text-xs">{taskCount} Task</span>
          </div>
          <div className="flex ">
            <Star className="h-4 w-4 text-yellow-400 mr-1" fill="currentColor" />
            <span className="text-xs justify-self-end">{rating} ({reviews} Reviews)</span>
          </div>
        </div>
      </div>
      
      <button 
        className={`text-xs font-medium px-3 py-1 rounded-full ${
          followed 
            ? 'text-gray-700 bg-gray-100' 
            : 'text-blue-600 border border-blue-600'
        }`}
      >
        {followed ? 'Followed' : '+ Follow'}
      </button>
    </div>
  );
};

export default MentorCard;