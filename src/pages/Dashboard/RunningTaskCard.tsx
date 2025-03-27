import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

const RunningTaskCard: React.FC = () => {
  const totalTasks = 100;
  const completedTasks = 65;
  const progressPercentage = 45;
  const isMobile = useIsMobile();
  
  return (
    <div className="bg-[#111] text-white p-2 sm:p-3 rounded-lg shadow-md">
      <h2 className="text-sm font-medium mb-4">Running Task</h2>
      <div className={`${isMobile ? 'flex items-center justify-between' : ''}`}>
        <p className={`text-4xl font-bold ${isMobile ? 'mb-0' : 'mb-4'}`}>{completedTasks}</p>

        {isMobile && (
          <div className="flex items-center gap-8">
            <div className="relative flex items-center justify-center scale-90">
              <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 100 100">
                <circle
                  className="text-gray-700"
                  stroke="currentColor"
                  fill="transparent"
                  strokeWidth="8"
                  cx="50"
                  cy="50"
                  r="40"
                />
                <circle
                  className="text-blue-500"
                  stroke="currentColor"
                  fill="transparent"
                  strokeWidth="8"
                  strokeDasharray="251.2" 
                  strokeDashoffset={251.2 - (progressPercentage / 100) * 251.2}
                  cx="50"
                  cy="50"
                  r="40"
                  strokeLinecap="round"
                  style={{ transition: 'stroke-dashoffset 0.5s ease' }}
                />
              </svg>
              <span className="absolute text-base font-semibold">{progressPercentage}%</span>
            </div>

            <div className="flex flex-col">
              <span className="text-3xl font-bold">{totalTasks}</span>
              <span className="text-xl text-gray-400">Task</span>
            </div>
          </div>
        )}
      </div>

      {!isMobile && (
        <div className="flex justify-between items-center">
          <div className="relative flex items-center justify-center"> 
            <svg className="w-18 h-18 transform -rotate-90" viewBox="0 0 100 100">
              <circle
                className="text-gray-700"
                stroke="currentColor"
                fill="transparent"
                strokeWidth="8"
                cx="50"
                cy="50"
                r="40"
              />
              <circle
                className="text-blue-500"
                stroke="currentColor"
                fill="transparent"
                strokeWidth="8"
                strokeDasharray="251.2" 
                strokeDashoffset={251.2 - (progressPercentage / 100) * 251.2}
                cx="50"
                cy="50"
                r="40"
                strokeLinecap="round"
                style={{ transition: 'stroke-dashoffset 0.5s ease' }}
              />
            </svg>
            <span className="absolute text-sm font-semibold">{progressPercentage}%</span>
          </div>

          <div className="flex flex-col mr-10">
            <span className="text-3xl font-bold">{totalTasks}</span>
            <span className="text-xl text-gray-400">Task</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default RunningTaskCard;