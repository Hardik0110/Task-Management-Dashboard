import React from 'react';
import { cn } from '@/lib/utils';
import { AvatarProps, AvatarStackProps } from '@/lib/types';

export const Avatar: React.FC<AvatarProps> = ({ 
  src, 
  alt = 'Avatar',
  size = 'md',
  className 
}) => {
  const sizeClasses = {
    xs: 'w-5 h-5',
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  return (
    <div 
      className={cn(
        'rounded-full overflow-hidden border-2 border-white flex-shrink-0',
        sizeClasses[size],
        className
      )}
    >
      {src ? (
        <img 
          src={src} 
          alt={alt} 
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="w-full h-full bg-gray-200"></div>
      )}
    </div>
  );
};

export const AvatarStack: React.FC<AvatarStackProps> = ({ 
  members = [], 
  maxAvatars = 5,
  size = 'sm'
}) => {
  const displayMembers = members?.slice(0, maxAvatars) || [];
  const placeholderCount = !members || members.length === 0 ? maxAvatars : 0;
  
  return (
    <div className="flex -space-x-2">
      {displayMembers.map((member, i) => (
        <Avatar 
          key={i} 
          src={member.avatar} 
          alt={member.name} 
          size={size}
          className="border-2 border-white"
        />
      ))}
      
      {Array(placeholderCount)
        .fill(0)
        .map((_, i) => (
          <Avatar key={i} size={size} className="border-2 border-white" />
        ))}
    </div>
  );
};