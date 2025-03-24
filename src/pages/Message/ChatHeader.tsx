import React from 'react';
import { ArrowLeft2, Call, Video } from 'iconsax-react';
import { Avatar } from '@/components/ui/Avatar';
import { useIsMobile } from '@/hooks/use-mobile';
import { ChatHeaderProps } from '@/lib/types';


export const ChatHeader: React.FC<ChatHeaderProps> = ({ user, onBackClick }) => {
  const isMobile = useIsMobile();

  return (
    <div className="flex items-center justify-between px-4 py-3 bg-white ">
      <div className="flex items-center gap-3">
        {isMobile && (
          <button 
            onClick={onBackClick}
            className="p-1 hover:bg-gray-100 rounded-full"
          >
            <ArrowLeft2 size={24} color="#333" />
          </button>
        )}
        <Avatar src={user.avatar} alt={user.name} size="md" />
        <div>
          <h3 className="font-semibold">{user.name}</h3>
          <span className="text-sm text-gray-500">Online</span>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <Video size={24} color="#333" variant="Linear" />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <Call size={24} color="#333" variant="Linear" />
        </button>
      </div>
    </div>
  );
};