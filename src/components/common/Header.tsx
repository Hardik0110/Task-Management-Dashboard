import React, { useMemo, useState } from "react";
import { useLocation, matchPath } from "react-router-dom";
import { 
  HambergerMenu, 
  Notification, 
  SearchNormal, 
  Sort, 
  Element2,
  Setting4 
} from "iconsax-react";
import { useIsMobile } from "@/hooks/use-mobile"; 
import { pageMessages } from "@/lib/constants";
import { CardContent } from "@/components/ui/Card";
import { HeaderProps } from "@/lib/types";
import hardikpfp from '@/assets/hardikpfp.jpg';

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  const location = useLocation();
  const isMobile = useIsMobile();
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

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
    <div className={`${isDashboard ? 'bg-[#F5F5F7]' : 'bg-white'} p-6`}>
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
                  <h2 className="text-2xl  font-bold text-gray-900">Hi, {userName}</h2>
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
            <img 
              src={hardikpfp} 
              alt="Hardik Kubavat"
              className="w-12 h-12 rounded-full object-cover"
            />
            </button>
          </div>
        </div>

        {showEnhancedHeader && (
        <div className="flex flex-col md:flex-row items-start md:items-center mt-6 gap-4">
          <div className="relative flex-1 w-full flex items-center gap-3">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <SearchNormal className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" color="#333" />
            </div>

            {isMobile && (
              <div className="relative">
                <button 
                  onClick={() => setIsSettingsOpen(!isSettingsOpen)}
                  className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors"
                >
                  <Setting4 className="w-5 h-5" color="#333" />
                </button>
                
                {isSettingsOpen && (
                  <div className="absolute top-full right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50 min-w-[160px]">
                    <button 
                      className="flex items-center space-x-2 w-full px-4 py-3 hover:bg-gray-50 transition-colors"
                      onClick={() => setIsSettingsOpen(false)}
                    >
                      <Element2 className="w-5 h-5" color="#333" />
                      <span>Category</span>
                    </button>
                    <button 
                      className="flex items-center space-x-2 w-full px-4 py-3 hover:bg-gray-50 transition-colors border-t border-gray-100"
                      onClick={() => setIsSettingsOpen(false)}
                    >
                      <Sort className="w-5 h-5" color="#333" />
                      <span>Sort By</span>
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          {!isMobile && (
            <div className="flex items-center space-x-3">
              <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors">
                <Element2 className="w-5 h-5" color="#333" />
                <span>Category</span>
              </button>
              <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors">
                <Sort className="w-5 h-5" color="#333" />
                <span>Sort By</span>
              </button>
            </div>
          )}
        </div>
      )}
      </CardContent>
    </div>
  );
};

export default Header;