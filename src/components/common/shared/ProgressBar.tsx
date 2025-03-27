import React from 'react';
import { cn } from '@/lib/utils';
import { ProgressBarProps } from '@/lib/types';

const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  showLabel = true,
  height = 'sm',
  className
}) => {
  return (
    <div className={className}>
      {showLabel && (
        <div className="flex justify-between items-center mb-1">
          <span className="text-xs">Progress</span>
          <span className="text-xs text-blue-500">{progress}%</span>
        </div>
      )}
       <div 
        className={cn(
          "w-full bg-blue-200 rounded-full relative", 
          height === 'sm' ? 'h-1' : 'h-2'
        )}
      >
        <div 
          className={cn(
            "bg-blue-500 rounded-full relative",
            height === 'sm' ? 'h-1' : 'h-2'
          )}
          style={{ width: `${progress}%` }}
        >
          <div 
            className={cn(
              "absolute bg-blue-500 rounded-full translate-x-1/2 border-2 border-white shadow-sm", 
              height === 'sm' 
                ? 'w-2.5 h-2.5 -top-0.75 right-0' 
                : 'w-3.5 h-3.5 -top-0.75 right-0'
            )}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;