import { Outlet, useLocation, matchPath } from "react-router-dom";
import { useState, useEffect } from "react";
import Sidebar from "../components/common/Sidebar";
import { dashboardRoutes } from "../lib/constants";
import { useIsMobile } from "@/hooks/use-mobile";



const MainLayout = () => {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const isMobile = useIsMobile();

  const isRouteAllowed = dashboardRoutes.some(route => 
    matchPath({ path: route, end: false }, location.pathname)
  )

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
      {isRouteAllowed && (
          <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
        )}

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