// src/layout/MainLayout.tsx
import { Outlet, useLocation } from "react-router-dom";
import { useState } from "react";
import Sidebar from "../components/common/Sidebar";
import { dashboardRoutes } from "../lib/constants";
import Header from "../components/common/Header";
import { useIsMobile } from "@/hooks/use-mobile"; // Import the hook

const MainLayout = () => {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const isMobile = useIsMobile(); // Use the hook

  // Toggle sidebar function to pass to Header
  const toggleSidebar = () => {
    setIsSidebarOpen(prev => !prev);
  };

  // Calculate main content margin based on device and sidebar state
  const mainContentClasses = isMobile
    ? "w-full" // On mobile, no margin needed as sidebar overlaps
    : `transition-all duration-300 w-full ${
        isSidebarOpen ? "ml-64" : "ml-20"
      }`;

  return (
    <div className="flex">
      {dashboardRoutes.includes(location.pathname) && (
        <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      )}

      {/* Main Content */}
      <main className={`${mainContentClasses} p-4`}>
        {/* Pass toggleSidebar to Header for mobile */}
        {location.pathname !== "/" ? (
          <Header toggleSidebar={toggleSidebar} />
        ) : (
          <div className="mb-4">
            <Header toggleSidebar={toggleSidebar} />
          </div>
        )}
        
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;