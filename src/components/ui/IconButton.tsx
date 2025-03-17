import React from 'react';
import { cn } from '@/lib/utils';
import { IconButtonProps } from '@/lib/types';

const IconButton: React.FC<IconButtonProps> = ({
  icon,
  onClick,
  disabled = false,
  ariaLabel,
  className
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className={cn(
        'p-1 cursor-pointer rounded-lg transition-colors', 
        disabled ? 'text-gray-300 cursor-not-allowed' : 'text-gray-600 hover:bg-gray-100',
        className
      )}
    >
      {icon}
    </button>
  );
};

export default IconButton;