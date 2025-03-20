import { useState } from "react";
import { Input } from "@/components/ui/Input";
import Button from "@/components/ui/Button";

type Props = {
  onSendMessage: (message: string) => void;
};

export const ChatInput: React.FC<Props> = ({ onSendMessage }) => {
  const [message, setMessage] = useState("");

  const sendMessage = () => {
    if (message.trim()) {
      onSendMessage(message);
      setMessage("");
    }
  };

  return (
    <div className="p-4 border-t flex">
      <Input value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Type a message..." />
      <Button onClick={sendMessage} className="ml-2">Send</Button>
    </div>
  );
};
