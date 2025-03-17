import React from 'react';
import { TooltipProps } from 'recharts';

interface EnhancedTooltipProps extends TooltipProps<any, any> {
  suffix?: string;
  className?: string;
}

export const ChartTooltip: React.FC<EnhancedTooltipProps> = ({ 
  active, 
  payload, 
  suffix = "",
  className = "bg-black text-white text-xs py-1 px-2 rounded-full"
}) => {
  if (active && payload && payload.length) {
    return (
      <div className={className}>
        {payload.map((entry, index) => (
          <div key={`tooltip-${index}`}>
            {entry.name && `${entry.name}: `}
            {entry.value}{suffix}
          </div>
        ))}
      </div>
    );
  }
  return null;
};

export default ChartTooltip;