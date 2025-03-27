import { useMainLayout } from "@/hooks/use-mainlayout";
import Header from "@/components/common/Header"
import { useState } from "react";
import { ChatSidebar } from "./ChatSidebar";
import { ChatWindow } from "./ChatWindow";
import { ChatInput } from "./ChatInput";
import { useIsMobile } from "@/hooks/use-mobile";

const Message = () => {
  const { toggleSidebar } = useMainLayout();
  const [selectedConversationId, setSelectedConversationId] = useState<string | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const isMobile = useIsMobile();

  const handleSendMessage = (text: string) => {
    if (selectedConversationId) {
      console.log(`Sending message in conversation ${selectedConversationId}: ${text}`);
    }
  };

  const handleSelectUser = (conversationId: string) => {
    setSelectedConversationId(conversationId);
    if (isMobile) {
      setIsSidebarOpen(false);
    }
  };

  const handleBackClick = () => {
    if (isMobile) {
      setIsSidebarOpen(true);
      setSelectedConversationId(null);
    }
  };

  return (
    <div>
      <Header toggleSidebar={toggleSidebar} />
      <div className="flex h-[calc(100vh-6em)]">
        
        <ChatSidebar 
          onSelectUser={handleSelectUser} 
          selectedConversationId={selectedConversationId}
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        {selectedConversationId ? (
          <div className="flex flex-col flex-1">
            <ChatWindow 
              selectedConversationId={selectedConversationId}
              onBackClick={handleBackClick}
            />
            <ChatInput onSendMessage={handleSendMessage} />   
          </div>
        ) : null}
      </div>
    </div>  
  )
}

export default Message;