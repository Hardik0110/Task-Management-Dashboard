import { Card } from "@/components/ui/Card";
import * as React from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { SearchNormal1 } from "iconsax-react";
import Header from "@/components/common/Header";
import { useMainLayout } from "@/hooks/use-mainlayout";
import { Avatar } from "@/components/ui/Avatar";
import { dummyConversations } from "./messageData";
import Vector from "@/assets/icons/Vector";

type Props = {
  conversations?: typeof dummyConversations; // Make conversations optional
  onSelectUser: (conversationId: string) => void;
  selectedConversationId: string | null;
  isSidebarOpen: boolean;
  setIsSidebarOpen: (isOpen: boolean) => void;
};

export const ChatSidebar: React.FC<Props> = ({ 
  conversations = [], // Add default empty array
  onSelectUser, 
  selectedConversationId,
  isSidebarOpen,
  setIsSidebarOpen
}) => { 
  const isMobile = useIsMobile();
  const [searchQuery, setSearchQuery] = React.useState("");
  const { toggleSidebar } = useMainLayout();

  const handleUserClick = (conversationId: string) => {
    onSelectUser(conversationId);
  };

  return (
    <>
      {isMobile && isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      <div
        className={`${
          isMobile
            ? "fixed inset-0 z-20 transform transition-transform duration-300 ease-in-out"
            : "w-84 h-full"
        } ${isMobile && !isSidebarOpen && "-translate-x-full"} bg-white p-4 flex flex-col`}
      >
        {isMobile && <Header toggleSidebar={toggleSidebar} />}

        <div className="relative mb-4 flex-shrink-0">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search Name..."
            className="w-full px-4 py-2 pl-8 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
          />
          <SearchNormal1
            size={20}
            color="gray"
            className="absolute right-3 top-1/2 transform -translate-y-1/2"
          />
        </div>

        <div className="flex-1 overflow-y-auto">
        {Array.isArray(conversations) && conversations // Add type check
        .filter((conv) =>
          conv.receiver.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .map((conversation) => (
          <Card
            key={conversation.id}
            className={`p-3 cursor-pointer mb-2 transition-colors ${
              selectedConversationId === conversation.id 
                ? "bg-blue-50 border-blue-200" 
                : "hover:bg-gray-50"
            }`}
            onClick={() => handleUserClick(conversation.id)}
          >
            <div className="flex items-center gap-3">
              <Avatar
                src={conversation.receiver.avatar}
                alt={conversation.receiver.name}
                size="sm"
              />
              <div className="flex-1">
                <span className="text-sm font-medium block">{conversation.receiver.name}</span>
                <span className="text-xs text-gray-500">
                  {conversation.messages[conversation.messages.length - 1].text.substring(0, 20)}...
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-xs text-gray-400">
                  {new Date(conversation.messages[conversation.messages.length - 1].timestamp).toLocaleTimeString([], { 
                    hour: '2-digit', 
                    minute: '2-digit' 
                  })}
                </span>
                {conversation.receiver.status === 'offline' && (
                  <span className="ml-9 w-2 h-2 bg-red-500 rounded-full"></span>
                )}
                {conversation.receiver.status === 'online' && (
                  <div className="flex gap-1 ml-7">
                  <Vector />
                  </div>
                )}
              </div>
            </div>
          </Card>
        ))}
        </div>  
      </div>
    </>
  );
};