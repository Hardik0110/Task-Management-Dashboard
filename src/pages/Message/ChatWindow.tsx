import { ScrollArea } from "@/components/ui/ScrollArea";
import { ChatHeader } from "./ChatHeader";
import { dummyConversations } from "./messageData";

type Props = {
  selectedConversationId: number | null;
  onBackClick?: () => void;
};

export const ChatWindow: React.FC<Props> = ({ selectedConversationId, onBackClick }) => {
  const selectedConversation = dummyConversations.find((c) => c.id === selectedConversationId);

  if (!selectedConversation) {
    return (
      <div className="flex-1 flex items-center justify-center bg-gray-50">
        <p className="text-gray-500">Select a conversation to start messaging</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full">
      <ChatHeader user={selectedConversation.receiver} onBackClick={onBackClick} />
      <ScrollArea className="flex-1 p-4 ">
        <div className="space-y-4">
          {selectedConversation.messages.map((msg, index) => {
            const isMe = msg.from === "sender";
            return (
              <div
                key={index}
                className={`flex flex-col gap-1 ${
                  isMe ? "items-end" : "items-start"
                }`}
              >

                <div
                  className={`p-3 rounded-2xl max-w-[60%] ${
                    isMe
                      ? "bg-[#546FFF] text-white rounded-tr-none"
                      : "bg-white border border-gray-200 rounded-tl-none"
                  }`}
                >
                  <p className="text-sm">{msg.text}</p>
                </div>

                <span
                  className={`text-xs ${
                    isMe ? "text-blue-100" : "text-gray-400"
                  }`}
                >
                  {new Date(msg.timestamp).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </span>
              </div>
            );
          })}
        </div>
      </ScrollArea>
    </div>
  );
};