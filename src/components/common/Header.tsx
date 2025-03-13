// src/components/common/Header.tsx
import { useLocation } from "react-router-dom";
import { Bell, Menu } from "lucide-react";
import { ProfileCircle } from "iconsax-react";
import { useIsMobile } from "@/hooks/use-mobile"; 

interface HeaderProps {
  toggleSidebar?: () => void; 
}

const Header = ({ toggleSidebar }: HeaderProps) => {
  const location = useLocation();
  const userName = "Hardik Kubavat";
  const isMobile = useIsMobile(); 

  const welcomeMessage = `let's finish your task today!`;
  const pageMessages: Record<string, string> = {
    "/": welcomeMessage,
    "/task": "Explore Tasks",
    "/mentors": "Meet Your Mentors",
    "/message": "Your Messages",
    "/settings": "Settings & Preferences",
  };

  const pageTitle = pageMessages[location.pathname as keyof typeof pageMessages] || "Welcome!";

  return (
    <div className="flex justify-between items-center bg-white p-4 shadow-md rounded-lg">
      {/* Left Side - Menu (Mobile) and Name/Title */}
      <div className="flex items-center gap-3">
        {isMobile && toggleSidebar && (
          <button onClick={toggleSidebar} className="mr-2">
            <Menu className="w-6 h-6 text-gray-600" />
          </button>
        )}
        
        <div className="flex flex-col">
          {location.pathname === "/" ? (
            <>
              <h2 className="text-2xl font-bold text-gray-900">Hi, {userName}</h2>
              <p className="text-sm text-gray-500 mt-1">{pageTitle}</p>
            </>
          ) : (
            <h2 className="text-xl font-semibold">{pageTitle}</h2>
          )}
        </div>
      </div>

      {/* Right Side - Bell Icon & Profile */}
      <div className="flex items-center space-x-4">
        <Bell className="w-6 h-6 text-gray-600 cursor-pointer" />
        <ProfileCircle size="28" color="#333" className="w-8 h-8 cursor-pointer rounded-full" />
      </div>
    </div>
  );
};

export default Header;