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



  return (
    <div className="min-h-screen bg-[#F5F5F7]">
      <div className="flex">
        {/* Sidebar */}
        {dashboardRoutes.includes(location.pathname) && (
          <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
        )}

        {/* Main Content */}
        <main 
          className={`flex-1 p-6 transition-all duration-300 
            ${isSidebarOpen ? "lg:ml-64" : "lg:ml-20"}`}
        >
          {/* Only render header in the left column for dashboard */}
          {location.pathname === "/" ? (
            <div className="lg:max-w-[calc(100%-380px-2rem)]">
              <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
            </div>
          ) : (
            <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
          )}
          
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;