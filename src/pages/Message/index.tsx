import { useMainLayout } from "@/hooks/use-mainlayout";
import Header from "@/components/common/Header"
import { useState } from "react";
import { ChatSidebar } from "./ChatSidebar";
import { ChatWindow } from "./ChatWindow";
import { ChatInput } from "./ChatInput";
import { useIsMobile } from "@/hooks/use-mobile";
import { dummyConversations } from "./messageData";

const Message = () => {
  const { toggleSidebar } = useMainLayout();
  const [conversations, setConversations] = useState(dummyConversations);
  const [selectedConversationId, setSelectedConversationId] = useState<string | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const isMobile = useIsMobile();

  const handleSendMessage = (text: string) => {
    if (selectedConversationId) {
      const newMessage = {
        text,
        timestamp: new Date().toISOString(),
        from: "sender" as const
      };

      setConversations(prevConversations => 
        prevConversations.map(conv => 
          conv.id === selectedConversationId 
            ? { ...conv, messages: [...conv.messages, newMessage] }
            : conv
        )
      );
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
    <div className="flex flex-col h-screen overflow-hidden">
      <div className="flex-shrink-0 border-b border-gray-200">
        <Header toggleSidebar={toggleSidebar} />
      </div>
      <div className="flex flex-1 min-h-0">
      <ChatSidebar 
        conversations={conversations} // Make sure this is passed
        onSelectUser={handleSelectUser} 
        selectedConversationId={selectedConversationId}
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
        {selectedConversationId ? (
          <div className="flex flex-col flex-1 min-h-0">
            <ChatWindow 
              selectedConversationId={selectedConversationId}
              onBackClick={handleBackClick} conversations={[]}            />
            <div className="flex-shrink-0">
              <ChatInput onSendMessage={handleSendMessage} />   
            </div>
          </div>
        ) : null}
      </div>
    </div>  
  )
}

export default Message;