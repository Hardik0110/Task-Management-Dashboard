import { useMainLayout } from "@/hooks/use-mainlayout";
import Header from "@/components/common/Header"
import { useState } from "react";
import { ChatSidebar } from "./ChatSidebar";
import { ChatWindow } from "./ChatWindow";
import { ChatInput } from "./ChatInput";
import { useIsMobile } from "@/hooks/use-mobile";

const Message = () => {
  const { toggleSidebar } = useMainLayout();
  const isMobile = useIsMobile();

  const [selectedConversationId, setSelectedConversationId] = useState<number | null>(null);

  const handleSendMessage = (text: string) => {
    console.log(`Meesage:- ${text}`);
  };

  const handleBackClick = () => {
    setSelectedConversationId(null);
  };

  return (
    <div>
      <Header toggleSidebar={toggleSidebar} />
      <div className="flex h-[calc(100vh-6em)]">
        <ChatSidebar 
          onSelectUser={setSelectedConversationId} 
          selectedConversationId={selectedConversationId} 
        />
        <div className="flex flex-col flex-1">
          <ChatWindow 
            selectedConversationId={selectedConversationId}
            onBackClick={isMobile ? handleBackClick : undefined}
          />
          {selectedConversationId && (
            <ChatInput onSendMessage={handleSendMessage} />   
          )}
        </div>
      </div>
    </div>  
  )
}

export default Message