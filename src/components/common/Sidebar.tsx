import React from "react";
import { NavLink } from "react-router-dom";
import { Book1, MessageQuestion } from "iconsax-react";
import { X } from "lucide-react";
import { sidebarLinks } from "../../lib/constants";
import { useIsMobile } from "@/hooks/use-mobile";
import { SidebarProps } from "@/lib/types";

const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen }) => {
  const isMobile = useIsMobile();

  const sidebarClasses = isMobile
    ? `fixed top-0 left-0 h-full bg-white shadow-md z-40 transition-all duration-300 ${
        isOpen ? "w-64 translate-x-0" : "w-64 -translate-x-full"
      }`
    : "fixed top-0 left-0 h-full w-64 bg-white shadow-md"; 

  return (
    <aside className={`${sidebarClasses} flex flex-col gap-8 p-5`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-blue-500 p-2 rounded-md">
            <Book1 size="24" variant="Bold" color="white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900">DNX</h2>
        </div>

        {isMobile && isOpen && (
          <button onClick={() => setIsOpen(false)} className="text-gray-500">
            <X size={24} />
          </button>
        )}
      </div>

      <nav className="flex flex-col gap-4 mt-6">
        {sidebarLinks.map(({ name, path, icon: Icon }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-2 py-2 rounded-lg transition ${
                isActive
                  ? "bg-gray-100 text-gray-900 font-semibold"
                  : "text-gray-500"
              }`
            }
            onClick={() => isMobile && setIsOpen(false)}
          >
            <span className="w-6 flex justify-center">
              <Icon size="24" variant="Outline" color="#555" />
            </span>
            <span>{name}</span>
          </NavLink>
        ))}
      </nav>

      <div className="mt-auto relative transition-all duration-300 mb-4 p-4 bg-gray-900 text-white rounded-lg">
        <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-white p-2 rounded-full shadow-lg">
          <MessageQuestion size="24" color="#333" />
        </div>
        <div className="mt-6 text-center">
          <h3 className="text-sm font-semibold">Help Center</h3>
          <p className="text-xs opacity-75">
            Having trouble? Contact us for help.
          </p>
          <button className="mt-3 w-full bg-white text-gray-900 text-sm font-medium py-2 rounded-md hover:bg-gray-50 transition-colors">
            Go To Help Center
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;