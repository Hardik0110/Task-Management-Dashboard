import React, { useState } from 'react';
import { ArrowRight2 , ArrowLeft2 } from  'iconsax-react';
import MentorCard from '../ui/MentorCard';
import avatar1 from '/src/assets/avatar1.png';
import avatar2 from '/src/assets/avatar2.png';

const MonthlyMentorsSection: React.FC = () => {
  const mentors = [
    {
      id: '1',
      name: 'Curious George',
      role: 'UI/UX Design',
      taskCount: 40,
      rating: 4.7,
      reviews: 750,
      followed: false,
      image: avatar1,
    },
    {
      id: '2',
      name: 'Abraham Lincoln',
      role: '3D Design',
      taskCount: 32,
      rating: 4.9,
      reviews: 810,
      followed: false,
      image: avatar2,
    },
    {
      id: '3',
      name: 'Abraham Lincoln',
      role: '3D Design',
      taskCount: 32,
      rating: 4.9,
      reviews: 810,
      followed: false,
      image: avatar2,
    },
    {
      id: '4',
      name: 'Abraham Lincoln',
      role: '3D Design',
      taskCount: 32,
      rating: 4.9,
      reviews: 810,
      followed: false,
      image: avatar1,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsToShow = 2; 

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex - cardsToShow;
      return newIndex < 0 ? 0 : newIndex;
    });
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + cardsToShow;
      return newIndex + cardsToShow > mentors.length ? prevIndex : newIndex;
    });
  };

  const visibleMentors = mentors.slice(currentIndex, currentIndex + cardsToShow);

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Monthly Mentors</h2>
        <div className="flex space-x-2">
          <button
            className={`p-1 cursor-pointer ${
              currentIndex === 0 ? 'text-gray-300' : 'text-gray-600'
            }`}
            onClick={handlePrevious}
            disabled={currentIndex === 0}
          >
            <ArrowLeft2 className="h-5 w-5" color='#333'/>
          </button>
          <button
            className={`p-1 cursor-pointer ${
              currentIndex + cardsToShow >= mentors.length ? 'text-gray-300' : 'text-gray-600'
            }`}
            onClick={handleNext}
            disabled={currentIndex + cardsToShow >= mentors.length}
          >
            <ArrowRight2 className="h-5 w-5" color='#333' />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {visibleMentors.map((mentor) => (
          <div key={mentor.id} className="transition-all duration-300 ease-in-out">
            <MentorCard
              name={mentor.name}
              role={mentor.role}
              taskCount={mentor.taskCount}
              rating={mentor.rating}
              reviews={mentor.reviews}
              followed={mentor.followed}
              image={mentor.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MonthlyMentorsSection;