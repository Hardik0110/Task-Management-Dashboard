// src/components/common/Header.tsx
import { useLocation } from "react-router-dom";
import { Bell, Menu } from "lucide-react";
import { ProfileCircle } from "iconsax-react";
import { useIsMobile } from "@/hooks/use-mobile"; 
import { pageMessages } from "@/lib/constants";

interface HeaderProps {
  toggleSidebar?: () => void; 
}

const Header = ({ toggleSidebar }: HeaderProps) => {
  const location = useLocation();
  const userName = "Hardik Kubavat";
  const isMobile = useIsMobile();

  const pageTitle = pageMessages[location.pathname as keyof typeof pageMessages] || "let's finish your task today!";

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          {isMobile && toggleSidebar && (
            <button 
              onClick={toggleSidebar}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Toggle sidebar"
            >
              <Menu className="w-6 h-6 text-gray-600" />
            </button>
          )}
          
          <div className="flex flex-col">
            <h2 className="text-2xl font-bold text-gray-900">Hi, {userName}</h2>
            <p className="text-sm text-gray-500 mt-1">{pageTitle}</p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <Bell className="w-6 h-6 text-gray-600" />
          </button>
          <button className="p-1 hover:bg-gray-100 rounded-full transition-colors">
            <ProfileCircle 
              size="32" 
              color="#333" 
              className="cursor-pointer rounded-full"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;