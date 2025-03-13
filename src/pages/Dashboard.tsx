import RunningTaskCard from "@/components/ui/RunningTaskCard";
import Calendar from "../components/ui/Calendar";
import { ActivityChart } from "@/components/ui/ActivityChart";

const Dashboard = () => {
    return (
      <div className="min-h-screen p-4">
        {/* Main Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-6">
          {/* Left Column - Main Content */}
          <div className="space-y-6">
            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Running Task Card - Takes 1 column */}
              <div className="lg:col-span-1 h-[200px]">
                <RunningTaskCard />
              </div>
              
              {/* Activity Chart - Takes 2 columns */}
              <div className="lg:col-span-2">
                <ActivityChart />
              </div>
            </div>
          </div>
  
          {/* Right Column - Calendar */}
          <div className="hidden lg:block lg:fixed lg:right-6 lg:top-6 lg:w-[380px]">
            <Calendar />
          </div>
  
          {/* Mobile Calendar */}
          <div className="lg:hidden">
            <Calendar />
          </div>
        </div>
      </div>
    );
  };

export default Dashboard;