import React from 'react';

type ChartTooltipProps = {
  active?: boolean;
  payload?: any[];
  label?: string;
  suffix?: string;
};

export const ChartTooltip: React.FC<ChartTooltipProps> = ({ 
  active, 
  payload, 
  label,
  suffix = ""
}) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-black text-white text-xs py-1 px-2 rounded-full">
        {payload[0].value} {suffix}
      </div>
    );
  }
  return null;
};