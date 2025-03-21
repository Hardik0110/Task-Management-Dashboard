import { ScrollArea } from "@/components/ui/ScrollArea";
import { ChatHeader } from "./ChatHeader";

type Props = {
  selectedUser: {
    id: string;
    name: string;
    avatar: string;
  } | null;
  messages: { sender: string; text: string }[];
  onBackClick?: () => void;
};

export const ChatWindow: React.FC<Props> = ({ selectedUser, messages, onBackClick }) => {
  if (!selectedUser) {
    return (
      <div className="flex-1 flex items-center justify-center bg-gray-50">
        <p className="text-gray-500">Select a conversation to start messaging</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full">
      <ChatHeader user={selectedUser} onBackClick={onBackClick} />
      <ScrollArea className="flex-1 p-4 bg-gray-50">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`mb-2 p-2 rounded-lg max-w-[80%] ${
              msg.sender === "me"
                ? "bg-blue-500 text-white ml-auto"
                : "bg-gray-200"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </ScrollArea>
    </div>
  );
};