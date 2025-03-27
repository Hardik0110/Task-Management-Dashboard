import React from 'react';
import { EnhancedTooltipProps } from '@/lib/types';

export const ChartTooltip: React.FC<EnhancedTooltipProps> = ({ 
  active, 
  payload,
  coordinate, 
  suffix = "",
  className = "bg-black text-white text-xs py-1 px-2 rounded-full"
}) => {
  if (!active || !payload?.length || !coordinate) return null;

  return (
    <div 
      className={`${className} absolute pointer-events-none`}
      style={{
        left: coordinate.x!,
        top: coordinate.y! - 10,
        transform: 'translate(-50%, -100%)',
        opacity: active ? 1 : 0,
        transition: 'opacity 150ms ease-in-out'
      }}
    >
      {payload.map((entry, index) => (
        <div key={`tooltip-${index}`} className="whitespace-nowrap">
          {entry.name && `${entry.name}: `}
          {entry.value}{suffix}
        </div>
      ))}
    </div>
  );
};

export default ChartTooltip;