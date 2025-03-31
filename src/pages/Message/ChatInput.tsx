import { useState } from "react";
import { Input } from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import { AttachCircle, Send2 } from "iconsax-react";

type Props = {
  onSendMessage: (message: string) => void;
};

export const ChatInput: React.FC<Props> = ({ onSendMessage }) => {
  const [message, setMessage] = useState("")

  const sendMessage = () => {
    if (message.trim()) {
      onSendMessage(message)
      setMessage("")
    }
  }

  return (
    <div className="p-4 bg-white flex items-center gap-2">
      <div className="flex-grow">
        <Input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
          className="px-4 py-2 focus:ring-0 w-full rounded-lg border-0 focus:outline-none "
        />
      </div>

      <Button
        className="p-2 bg-gray-50 text-gray-600 hover:bg-gray-100 rounded-lg"
      >
        <AttachCircle size={24} color="grey" />
      </Button>

      <Button
        onClick={sendMessage}
        className="px-4 py-2 bg-[#546FFF] text-white rounded-lg hover:bg-blue-600 transition-colors duration-200"
      >
        <Send2 variant="Bold" size={24} color="white" />
      </Button>
    </div>
  )
}