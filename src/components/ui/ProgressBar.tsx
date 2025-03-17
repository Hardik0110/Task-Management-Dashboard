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
          <span className="text-xs text-blue-600">{progress}%</span>
        </div>
      )}
      <div 
        className={cn(
          "w-full bg-gray-200 rounded-full",
          height === 'sm' ? 'h-1' : 'h-2'
        )}
      >
        <div 
          className={cn(
            "bg-blue-600 rounded-full",
            height === 'sm' ? 'h-1' : 'h-2'
          )}
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;