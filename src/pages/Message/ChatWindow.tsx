import { ScrollArea } from "@/components/ui/ScrollArea";

type Props = {
  messages: { sender: string; text: string }[];
};

export const ChatWindow: React.FC<Props> = ({ messages }) => {
  return (
    <ScrollArea className="flex-1 p-4 bg-gray-50 h-[30px] overflow">
      {messages.map((msg, index) => (
        <div key={index} className={`mb-2 p-2 rounded-lg ${msg.sender === "me" ? "bg-blue-500 text-white self-end" : "bg-gray-200"}`}>
          {msg.text}
        </div>
      ))}
    </ScrollArea>
  );
};
