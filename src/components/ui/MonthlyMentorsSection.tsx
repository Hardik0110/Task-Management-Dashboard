import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import MentorCard from '../ui/MentorCard';

const MonthlyMentorsSection: React.FC = () => {
  // Sample data - replace with your actual data
  const mentors = [
    {
      id: '1',
      name: 'Curious George',
      role: 'UI/UX Design',
      taskCount: 40,
      rating: 4.7,
      reviews: 750,
      followed: false,
      image: '/placeholder.svg?height=60&width=60',
    },
    {
      id: '2',
      name: 'Abraham Lincoln',
      role: '3D Design',
      taskCount: 32,
      rating: 4.9,
      reviews: 810,
      followed: true,
      image: '/placeholder.svg?height=60&width=60',
    },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Monthly Mentors</h2>
        <div className="flex space-x-2">
          <button className="p-1 rounded-full border">
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button className="p-1 rounded-full border">
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {mentors.map((mentor) => (
          <MentorCard
            key={mentor.id}
            name={mentor.name}
            role={mentor.role}
            taskCount={mentor.taskCount}
            rating={mentor.rating}
            reviews={mentor.reviews}
            followed={mentor.followed}
            image={mentor.image}
          />
        ))}
      </div>
    </div>
  );
};

export default MonthlyMentorsSection;