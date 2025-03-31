import React from 'react';
import { ArrowLeft, Call, Video } from 'iconsax-react';
import { Avatar } from '@/components/ui/Avatar';
import { useIsMobile } from '@/hooks/use-mobile';
import { User } from './messageData';

interface ChatHeaderProps {
  user: User;
  onBackClick?: () => void;
}

export const ChatHeader: React.FC<ChatHeaderProps> = ({ user, onBackClick }) => {
  const isMobile = useIsMobile();

  return (
    <div className="flex items-center justify-between px-4 py-5 bg-white">
      <div className="flex items-center gap-3">
        {isMobile && (
          <button
            onClick={onBackClick}
            className="p-1 hover:bg-gray-100 rounded-full"
          >
            <ArrowLeft size={24} color="#333" />
          </button>
        )}
        <Avatar src={user.avatar} alt={user.name} size="md" />
        <div>
          <h3 className="font-semibold">{user.name}</h3>
          {user.status === 'online' && (
            <div className="flex items-center gap-1">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <span className="text-sm text-gray-500">Online</span>
            </div>
          )}
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button className="p-2 hover:bg-gray-100 border-1 border-gray-200 rounded-full">
          <Video size={24} color="gray" variant="Linear" />
        </button>
        <button className="p-2 hover:bg-gray-100 border-1 border-gray-200 rounded-full">
          <Call size={24} color="gray" variant="Linear" />
        </button>
      </div>
    </div>
  );
};