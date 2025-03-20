import { Card } from "@/components/ui/Card";

const users = [
  { id: "1", name: "Alice" },
  { id: "2", name: "Bob" },
];

type Props = {
  onSelectUser: (userId: string) => void;
  selectedUserId: string | null;
};

export const ChatSidebar: React.FC<Props> = ({ onSelectUser, selectedUserId }) => {
  return (
    <div className="w-64 border-r h-full p-4">
      <h2 className="text-lg font-semibold mb-4">Users</h2>
      {users.map((user) => (
        <Card 
          key={user.id} 
          className={`p-3 cursor-pointer mb-2 ${selectedUserId === user.id ? "bg-gray-200" : ""}`}
          onClick={() => onSelectUser(user.id)}
        >
          {user.name}
        </Card>
      ))}
    </div>
  );
};
