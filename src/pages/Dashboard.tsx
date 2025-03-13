// src/pages/Dashboard.tsx
import RunningTaskCard from "@/components/ui/RunningTaskCard";
import Calendar from "../components/ui/Calendar";

const Dashboard = () => {
  return (
    <div className="bg-[#F5F5F7] min-h-screen">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Side - Content Area */}
        <div className="flex-1">
          {/* Main Content Area */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* RunningTaskCard with responsive width */}
            <div className="w-full sm:col-span-1">
              <RunningTaskCard />
            </div>
          </div>
        </div>

        {/* Right Side - Calendar */}
        <div className="w-full lg:w-[380px] mt-6 lg:mt-0">
          <Calendar />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;