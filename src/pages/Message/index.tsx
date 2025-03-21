import { useMainLayout } from "@/hooks/use-mainlayout";
import Header from "@/components/common/Header"
import { useState } from "react";
import { ChatSidebar } from "./ChatSidebar";
import { ChatWindow } from "./ChatWindow";
import { ChatInput } from "./ChatInput";
import { useIsMobile } from "@/hooks/use-mobile";
import { teamMembers } from "@/lib/data";

const Message = () => {
  const { toggleSidebar } = useMainLayout();
  const isMobile = useIsMobile();

  const [selectedUser, setSelectedUser] = useState<string | null>(null);
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>([]);

  const selectedUserData = teamMembers.find(member => member.id === selectedUser);

  const handleSendMessage = (text: string) => {
    setMessages([...messages, { sender: "me", text }]);
  };

  return (
    <div>
      <Header toggleSidebar={toggleSidebar} />
      <div className="flex h-[calc(100vh-6em)]">
        <ChatSidebar onSelectUser={setSelectedUser} selectedUserId={selectedUser} />
        <div className="flex flex-col flex-1">
          <ChatWindow 
            messages={messages} 
            selectedUser={selectedUserData || null}
            onBackClick={isMobile ? () => setSelectedUser(null) : undefined}
          />
          <ChatInput onSendMessage={handleSendMessage} />
        </div>
      </div>
    </div>
  )
}

export default Message
