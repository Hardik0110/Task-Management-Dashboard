import { useState } from "react";
import { Input } from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import { AttachCircle } from "iconsax-react";

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
    <div className="p-4 border-t flex items-center">
      <div className="relative flex-grow">
        <Input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 w-full"
        />
        <Button
          className="absolute top-1/2 transform -translate-y-1/2 right-2 bg-gray-200 text-gray-600 hover:bg-gray-300 p-2 rounded-full"
        >
          <AttachCircle size={16} color="grey" />
        </Button>
      </div>

      <Button
        onClick={sendMessage}
        className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200"
      >
        Send
      </Button>
    </div>
  );
};