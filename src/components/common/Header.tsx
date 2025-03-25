import React, { useMemo } from "react";
import { useLocation, matchPath } from "react-router-dom";
import { HambergerMenu, Notification, ProfileCircle, SearchNormal, Sort, Element2 } from "iconsax-react";
import { useIsMobile } from "@/hooks/use-mobile"; 
import { pageMessages } from "@/lib/constants";
import { CardContent } from "@/components/ui/Card";
import { HeaderProps } from "@/lib/types";

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  const location = useLocation();
  const isMobile = useIsMobile();

  const { pageTitle, isDashboard, showEnhancedHeader } = useMemo(() => ({
    pageTitle: pageMessages[location.pathname as keyof typeof pageMessages] || "Task Details",
    isDashboard: location.pathname === "/",
    showEnhancedHeader: 
      location.pathname === "/mentors" || 
      location.pathname === "/task" || 
      matchPath("/task/:taskId", location.pathname) !== null
  }), [location.pathname]);

  const userName = "Hardik Kubavat";

  return (
    <div className="bg-white p-6">
      <CardContent>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            {isMobile && toggleSidebar && (
              <button 
                onClick={toggleSidebar}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                aria-label="Toggle sidebar"              
              >
                <HambergerMenu className="w-6 h-6" color="gray" />
              </button>
            )}
            
            <div className="flex flex-col">
              {isDashboard ? (
                <>
                  <h2 className="text-2xl font-bold text-gray-900">Hi, {userName}</h2>
                  <p className="text-sm text-gray-500 mt-1">{pageTitle}</p>
                </>
              ) : (
                <h2 className="text-2xl font-bold text-gray-900">{pageTitle}</h2>
              )}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <Notification className="w-6 h-6 text-gray-600" color="gray"/>
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

        {showEnhancedHeader && (
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-6 gap-4">
            <div className="relative w-full md:w-1/2">
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <SearchNormal className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" color="#333" />
            </div>

            <div className="flex items-center space-x-3 w-full md:w-auto">
              <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors">
                <Element2 className="w-5 h-5" color="#333" />
                <span>Category</span>
              </button>
              <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors">
                <Sort className="w-5 h-5" color="#333" />
                <span>Sort By</span>
              </button>
            </div>
          </div>
        )}
      </CardContent>
    </div>
  );
};

export default Header;