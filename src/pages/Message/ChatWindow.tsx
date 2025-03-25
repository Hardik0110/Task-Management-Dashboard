import { ScrollArea } from "@/components/ui/ScrollArea";
import { ChatHeader } from "./ChatHeader";
import { dummyConversations } from "./messageData";

type Props = {
  selectedConversationId: string | null; 
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

  const formatDateLabel = (timestamp: string): string => {
    const today = new Date();
    const yesterday = new Date();
    yesterday.setDate(today.getDate() - 1);

    const messageDate = new Date(timestamp);

    if (messageDate.toDateString() === today.toDateString()) {
      return "Today";
    } else if (messageDate.toDateString() === yesterday.toDateString()) {
      return "Yesterday";
    } else {
      return messageDate.toLocaleDateString([], {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
    }
  };

  const groupedMessages = selectedConversation.messages.reduce((acc, msg) => {
    const dateLabel = formatDateLabel(msg.timestamp);
    if (!acc[dateLabel]) {
      acc[dateLabel] = [];
    }
    acc[dateLabel].push(msg);
    return acc;
  }, {} as Record<string, typeof selectedConversation.messages>);

  return (
    <div className="flex flex-col h-full">
      <ChatHeader user={selectedConversation.receiver} onBackClick={onBackClick} />

      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4">
          {Object.entries(groupedMessages).map(([dateLabel, messages], dateIndex) => (
            <div key={dateIndex}>
              <div className="flex justify-center mb-2">
                <span className="px-3 py-1 text-xs font-semibold text-gray-500 bg-gray-100 rounded-full">
                  {dateLabel}
                </span>
              </div>

              {messages.map((msg, index) => {
                const isMe = msg.from === "sender";

                return (
                  <div
                    key={index}
                    className={`flex flex-col gap-1 ${isMe ? "items-end" : "items-start"}`}
                  >
                    <div
                      className={`p-3 rounded-2xl max-w-[300px] ${
                        isMe
                          ? "bg-[#546FFF] text-white rounded-tr-none"
                          : "bg-white border border-gray-200 rounded-tl-none"
                      }`}
                    >
                      {msg.image && (
                        <div className="mb-2 rounded-lg overflow-hidden">
                          <img
                            src={msg.image}
                            alt="Message attachment"
                            className="w-full h-48 object-cover"
                          />
                        </div>
                      )}
                      
                      {msg.text && (
                        <p className={`text-sm ${msg.image ? 'mt-2' : ''}`}>
                          {msg.text}
                        </p>
                      )}
                    </div>

                    <span className="text-xs text-gray-400">
                      {new Date(msg.timestamp).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </span>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};