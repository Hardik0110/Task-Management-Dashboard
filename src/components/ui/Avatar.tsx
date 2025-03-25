import  { memo } from 'react';
import { cn } from '@/lib/utils';
import { AvatarProps, AvatarStackProps } from '@/lib/types';
import { sizeClasses } from '@/lib/constants';

export const Avatar = memo<AvatarProps>(({ 
  src, 
  alt = 'Avatar',
  size = 'md',
  className 
}) => {
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
          loading="lazy"
        />
      ) : (
        <div className="w-full h-full bg-gray-200"></div>
      )}
    </div>
  );
});

Avatar.displayName = 'Avatar';

export const AvatarStack = memo<AvatarStackProps>(({ 
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
          key={member.avatar || i} 
          src={member.avatar} 
          alt={member.name} 
          size={size}
          className="border-2 border-white"
        />
      ))}
      
      {Array(placeholderCount)
        .fill(0)
        .map((_, i) => (
          <Avatar key={`placeholder-${i}`} size={size} className="border-2 border-white" />
        ))}
    </div>
  );
});

AvatarStack.displayName = 'AvatarStack';