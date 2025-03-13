import { useLocation } from "react-router-dom";
import { Bell } from "lucide-react"; // Icons
import { ProfileCircle } from "iconsax-react";

const Header = () => {
  const location = useLocation();
  const userName = "Hardik Kubavat"; 

  // Dynamic messages based on the current page
  const welcomeMessage = `let's finish your task today!`;
  const pageMessages: Record<string, string> = {
    "/": welcomeMessage,
    "/task": "Explore Tasks",
    "/mentors": "Meet Your Mentors",
    "/message": "Your Messages",
    "/settings": "Settings & Preferences",
  };

  // Get the message based on the current route (default to "Welcome!")
  const pageTitle = pageMessages[location.pathname as keyof typeof pageMessages] || "Welcome!";

  return (
    <div className="flex justify-between items-center bg-white p-4 shadow-md rounded-lg">
      {/* Left Side - Name and Title */}
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

      {/* Right Side - Bell Icon & Profile */}
      <div className="flex items-center space-x-4">
        <Bell className="w-6 h-6 text-gray-600 cursor-pointer" />
        <ProfileCircle size="28" color="#333" className="w-8 h-8 cursor-pointer rounded-full bg-[]" />
      </div>
    </div>
  );
};

export default Header;
