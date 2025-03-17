import { Outlet, useLocation, useOutletContext } from "react-router-dom";
import { useState, useEffect } from "react";
import Sidebar from "../components/common/Sidebar";
import { dashboardRoutes } from "../lib/constants";
import { useIsMobile } from "@/hooks/use-mobile";

type ContextType = {
  toggleSidebar: () => void;
};

const MainLayout = () => {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (isMobile) {
      setIsSidebarOpen(false);
    }
  }, [location.pathname, isMobile]);

  const toggleSidebar = () => {
    setIsSidebarOpen(prevState => !prevState);
  };

  return (
    <div className="min-h-screen bg-[#F5F5F7]">
      <div className="flex">
        {/* Sidebar */}
        {dashboardRoutes.includes(location.pathname) && (
          <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
        )}

        {/* Main Content */}
        <main 
          className={`flex-1 transition-all duration-300 
            ${isSidebarOpen && !isMobile ? "lg:ml-64" : "lg:ml-20"}`}
        >
          <Outlet context={{ toggleSidebar }} />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;

export function useMainLayout() {
  return useOutletContext<ContextType>();
}