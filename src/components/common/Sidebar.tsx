import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, Category2, Book1, User, Message, Setting2, MessageQuestion } from "iconsax-react";
import { Button } from "@/components/ui/button"; // ShadCN Button
import { cn } from "@/lib/utils"; // ShadCN Utility for Styling

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const links = [
    { name: "Overview", path: "/", icon: <Category2 size="24" variant="Outline" color="#555" /> },
    { name: "Task", path: "/task", icon: <Book1 size="24" variant="Outline" color="#555" /> },
    { name: "Mentors", path: "/mentors", icon: <User size="24" variant="Outline" color="#555" /> },
    { name: "Message", path: "/message", icon: <Message size="24" variant="Outline" color="#555" /> },
    { name: "Settings", path: "/settings", icon: <Setting2 size="24" variant="Outline" color="#555" /> },
  ];

  return (
    <aside
      className={cn(
        "h-screen bg-white shadow-md transition-all flex flex-col justify-between",
        isOpen ? "w-64 p-5" : "w-20 p-3"
      )}
    >
      {/* TOP SECTION */}
      <div className="flex items-center justify-between">
        {/* LOGO */}
        <div className="flex items-center gap-3">
          <div className="bg-blue-500 p-2 rounded-md">
            <Book1 size="24" variant="Bold" color="white" />
          </div>
          {isOpen && <h2 className="text-xl font-bold text-gray-900">DNX</h2>}
        </div>

        {/* COLLAPSE BUTTON */}
        <Button
          variant="outline"
          size="icon"
          onClick={toggleSidebar}
          className="rounded-md hover:bg-gray-100"
        >
          <Menu size="32" color="#111111" />
        </Button>
      </div>

      {/* NAV LINKS */}
      <nav className="mt-8 flex flex-col gap-4">
        {links.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 px-4 py-2 rounded-lg transition",
                isActive ? "bg-gray-100 text-gray-900 font-semibold" : "text-gray-500"
              )
            }
          >
            {link.icon}
            {isOpen && <span>{link.name}</span>}
          </NavLink>
        ))}
      </nav>

      {/* HELP CENTER */}
      <div className="mt-auto p-4 bg-gray-900 text-white rounded-lg relative">
        <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-white p-2 rounded-full shadow-lg">
          <MessageQuestion size="24" color="#333" />
        </div>
        {isOpen ? (
          <>
            <h3 className="text-sm font-semibold mt-6">Help Center</h3>
            <p className="text-xs opacity-75">Having trouble? Contact us for help.</p>
            <button className="mt-3 w-full bg-white text-gray-900 text-sm font-medium py-2 rounded-md">
              Go To Help Center
            </button>
          </>
        ) : null}
      </div>
    </aside>
  );
};

export default Sidebar;
