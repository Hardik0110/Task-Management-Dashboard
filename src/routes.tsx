import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Task from "./pages/Tasks";
import TaskDetails from "./pages/Tasks/DetailedTaskPage"; 
import Mentors from "./pages/Mentors";
import Message from "./pages/Message";
import Settings from "./pages/Settings";
import MainLayout from "./layout/MainLayout";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/task" element={<Task />} />
        <Route path="/task/:taskId" element={<TaskDetails />} /> 
        <Route path="/mentors" element={<Mentors />} />
        <Route path="/message" element={<Message />} />
        <Route path="/settings" element={<Settings />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;