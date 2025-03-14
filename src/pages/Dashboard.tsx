import RunningTaskCard from "@/components/ui/RunningTaskCard";
import Calendar from "../components/ui/Calendar";
import { ActivityChart } from "@/components/ui/ActivityChart";
import MonthlyMentorsSection from "@/components/ui/MonthlyMentorsSection";
import UpcomingTasksSection from "@/components/ui/UpcomingTasksSection";
import TaskTodaySection from "@/components/ui/TaskTodaySection";

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

          {/* Monthly Mentors Section */}
          <MonthlyMentorsSection />

          {/* Upcoming Tasks Section */}
          <UpcomingTasksSection />
        </div>

        {/* Right Column - Calendar and Task Today */}
        <div className="hidden lg:block lg:fixed lg:right-6 lg:top-6 lg:w-[380px] space-y-6">
          <Calendar />
          <TaskTodaySection />
        </div>

        {/* Mobile Calendar and Task Today */}
        <div className="lg:hidden space-y-6">
          <Calendar />
          <TaskTodaySection />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;