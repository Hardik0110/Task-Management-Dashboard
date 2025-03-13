import { Outlet, useLocation } from "react-router-dom";
import { useState } from "react";
import Sidebar from "../components/common/Sidebar";
import { dashboardRoutes } from "../lib/constants";
import Header from "../components/common/Header"; 

const MainLayout = () => {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex">
      {dashboardRoutes.includes(location.pathname) && (
        <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      )}

      {/* Main Content */}
      <main
        className={`transition-all duration-300 p-4 w-full ${
          isSidebarOpen ? "ml-64" : "ml-20"
        }`}
      >
        {location.pathname !== "/" && <Header />}
        
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
