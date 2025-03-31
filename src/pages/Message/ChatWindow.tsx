import { ScrollArea } from "@/components/ui/ScrollArea";
import { ChatHeader } from "./ChatHeader";
import { ChatInput } from "./ChatInput";
import { useEffect, useRef } from "react";
import { dummyConversations } from "./messageData";

type Props = {
  selectedConversationId: string | null;
  conversations: typeof dummyConversations;
  onBackClick?: () => void;
  onSendMessage: (message: string) => void;
};

export const ChatWindow: React.FC<Props> = ({ 
  selectedConversationId, 
  onBackClick,
  conversations,
  onSendMessage
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const selectedConversation = conversations.find((c) => c.id === selectedConversationId) || 
                              dummyConversations.find((c) => c.id === selectedConversationId);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [selectedConversation?.messages]);

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

  const exceedsWordLimit = (text: string): boolean => {
    if (!text) return false;
    return text.split(' ').length > 30;
  };

  return (
    <div className="flex flex-col h-full">
      <ChatHeader user={selectedConversation.receiver} onBackClick={onBackClick} />

      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4">
          {Object.entries(groupedMessages).map(([dateLabel, messages], dateIndex) => (
            <div key={dateIndex}>
              <div className="flex justify-center mb-2">
                <span className="px-3 py-1 text-xs font-semibold text-white bg-black rounded-full">
                  {dateLabel}
                </span>
              </div>

              {messages.map((msg, index) => {
                const isMe = msg.from === "sender";
                const wordExceeded = exceedsWordLimit(msg.text);

                return (
                  <div
                    key={index}
                    className={`flex flex-col gap-1 ${isMe ? "items-end" : "items-start"} mb-4`}
                  >
                    <div
                      className={`p-3 rounded-2xl ${wordExceeded ? 'max-w-[300px]' : 'max-w-[300px]'} ${
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
                        <p className={`text-sm ${msg.image ? 'mt-2' : ''} break-words`}>
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
          <div ref={scrollRef} />
        </div>
      </ScrollArea>
      
      <div className="flex-shrink-0">
        <ChatInput onSendMessage={onSendMessage} />   
      </div>
    </div>
  );
};