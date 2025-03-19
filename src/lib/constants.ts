import { Category2, Book1, UserOctagon, Message, Setting2 } from "iconsax-react";

export const sidebarLinks = [
  { name: "Overview", path: "/", icon: Category2 },
  { name: "Task", path: "/task", icon: Book1 },
  { name: "Mentors", path: "/mentors", icon: UserOctagon },
  { name: "Message", path: "/message", icon: Message },
  { name: "Settings", path: "/settings", icon: Setting2 },
];

export const dashboardRoutes = ["/", "/task", "/mentors", "/message", "/settings", "/task/:taskId"];

export const DAYS_OF_WEEK = [
    { key: "1", label: "S" },
    { key: "2", label: "M" },
    { key: "3", label: "T" },
    { key: "4", label: "W" },
    { key: "5", label: "T" },
    { key: "6", label: "F" },
    { key: "7", label: "S" },
  ];

  const welcomeMessage = `let's finish your task today!`;
  
  export const pageMessages: Record<string, string> = {
    "/": welcomeMessage,
    "/task": "Explore Tasks",
    "/mentors": "Explore Mentors",
    "/message": "Your Messages",
    "/settings": "Settings & Preferences",
    "/task/:taskId": "Task Details"
  };

  export const sizeClasses = {
    xs: 'w-6 h-6',
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
    xl: 'w-14 h-14'
  }
