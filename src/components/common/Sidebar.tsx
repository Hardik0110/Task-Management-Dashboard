import { useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {  Book1,  MessageQuestion } from "iconsax-react";
import { sidebarLinks } from "../../lib/constants";

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Sidebar = ({ isOpen, setIsOpen }: SidebarProps) => {
  const sidebarRef = useRef<HTMLDivElement>(null);

  

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [setIsOpen]);

  return (
    <aside
      ref={sidebarRef}
      className={`fixed top-0 left-0 h-full bg-white shadow-md transition-all duration-300 flex flex-col gap-8 p-5 ${
        isOpen ? "w-64" : "w-20"
      }`}
      onClick={() => setIsOpen(true)}
    >
      <div className="flex items-center gap-3">
        <div className="bg-blue-500 p-2 rounded-md">
          <Book1 size="24" variant="Bold" color="white" />
        </div>
        {isOpen && <h2 className="text-3xl font-bold text-gray-900">DNX</h2>}
      </div>

      <nav className=" flex flex-col gap-4 mt-6">
        {sidebarLinks.map(({ name, path, icon: Icon }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-2 py-2 rounded-lg transition ${
                isActive ? "bg-gray-100 text-gray-900 font-semibold" : "text-gray-500"
              }`
            }
          >
            <span className="w-6 flex justify-center">
              <Icon size="24" variant="Outline" color="#555" />
            </span>
            {isOpen && <span>{name}</span>}
          </NavLink>
        ))}
      </nav>

      <div
        className={`mt-auto relative transition-all duration-300 mb-4 ${
          isOpen ? "p-4 bg-gray-900 text-white rounded-lg" : "flex justify-center"
        }`}
      >
        <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-white p-2 rounded-full shadow-lg">
          <MessageQuestion size="24" color="#333" />
        </div>
        {isOpen && (
          <div className="mt-6 text-center">
            <h3 className="text-sm font-semibold">Help Center</h3>
            <p className="text-xs opacity-75">Having trouble? Contact us for help.</p>
            <button className="mt-3 w-full bg-white text-gray-900 text-sm font-medium py-2 rounded-md hover:bg-gray-50 transition-colors">
              Go To Help Center
            </button>
          </div>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
