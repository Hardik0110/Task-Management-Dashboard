import RunningTaskCard from "@/components/ui/RunningTaskCard";
import Calendar from "../components/ui/Calendar";
import { ActivityChart } from "@/components/ui/ActivityChart";
import MonthlyMentorsSection from "@/components/ui/MonthlyMentorsSection";
import UpcomingTasksSection from "@/components/ui/UpcomingTasksSection";
import TaskTodaySection from "@/components/ui/TaskTodaySection";
import Header from "../components/common/Header";
import { useMainLayout } from "@/layout/MainLayout";

const Dashboard = () => {
  const { toggleSidebar } = useMainLayout();

  return (
    <div className="min-h-screen bg-[#F5F5F7] p-6">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-6">
        <div className="space-y-6">
          <Header toggleSidebar={toggleSidebar} />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="h-[200px]">
              <RunningTaskCard />
            </div>
            
            <div className="md:col-span-2">
              <ActivityChart />
            </div>
          </div>

          <div className="bg-white rounded-lg p-6">
            <MonthlyMentorsSection />
          </div>

          <div className="bg-white rounded-lg p-6">
            <UpcomingTasksSection />
          </div>
        </div>

        <div className="space-y-16">
          <div className="bg-white rounded-lg p-6">
            <Calendar />
          </div>

          <div className="bg-white rounded-lg p-6">
            <TaskTodaySection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;