import { Card } from "@/components/ui/Card";
import * as React from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { SearchNormal1 } from "iconsax-react";
import Header from "@/components/common/Header";
import { useMainLayout } from "@/hooks/use-mainlayout";
import { Avatar } from "@/components/ui/Avatar";
import { teamMembers } from "@/lib/data";

type Props = {
  onSelectUser: (userId: string) => void;
  selectedUserId: string | null;
};

export const ChatSidebar: React.FC<Props> = ({ onSelectUser, selectedUserId }) => {
  const isMobile = useIsMobile();
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(true);
  const [searchQuery, setSearchQuery] = React.useState("");
  const { toggleSidebar } = useMainLayout();

  const handleUserClick = (userId: string) => {
    if (isMobile) {
      setIsSidebarOpen(false);
    }
    onSelectUser(userId);
  };

  return (
    <>
      {isMobile && isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      <div
        className={`${
          isMobile
            ? "fixed inset-0 z-20 transform transition-transform duration-300 ease-in-out"
            : "w-64 border-r h-full"
        } ${isMobile && !isSidebarOpen && "-translate-x-full"} bg-white p-4 flex flex-col`}
      >
        {isMobile && <Header toggleSidebar={toggleSidebar} />}

        <div className="relative mb-4 flex-shrink-0">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search..."
            className="w-full px-4 py-2 pl-10 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
          />
          <SearchNormal1
            size={20}
            color="gray"
            className="absolute left-3 top-1/2 transform -translate-y-1/2"
          />
        </div>

        <div className="flex-1 overflow-y-auto">
          {teamMembers
            .filter((member) =>
              member.name.toLowerCase().includes(searchQuery.toLowerCase())
            )
            .map((member) => (
              <Card
                key={member.id}
                className={`p-3 cursor-pointer mb-2 transition-colors ${
                  selectedUserId === member.id 
                    ? "bg-blue-50 border-blue-200" 
                    : "hover:bg-gray-50"
                }`}
                onClick={() => handleUserClick(member.id)}
              >
                <div className="flex items-center gap-3">
                  <Avatar
                    src={member.avatar}
                    alt={member.name}
                    size="sm"
                  />
                  <span className="text-sm font-medium">{member.name}</span>
                </div>
              </Card>
            ))}
        </div>  
      </div>
    </>
  );
}