import { Category2, Book1, UserOctagon, Message, Setting2 } from "iconsax-react";

/** 📌 Sidebar Navigation Links */
export const sidebarLinks = [
  { name: "Overview", path: "/", icon: Category2 },
  { name: "Task", path: "/task", icon: Book1 },
  { name: "Mentors", path: "/mentors", icon: UserOctagon },
  { name: "Message", path: "/message", icon: Message },
  { name: "Settings", path: "/settings", icon: Setting2 },
];

/** 📌 Routes that should have the Sidebar */
export const dashboardRoutes = ["/", "/task", "/mentors", "/message", "/settings"];

export const DAYS_OF_WEEK = [
    { key: "1", label: "S" },
    { key: "2", label: "M" },
    { key: "3", label: "T" },
    { key: "4", label: "W" },
    { key: "5", label: "T" },
    { key: "6", label: "F" },
    { key: "7", label: "S" },
  ];
