import RunningTaskCard from "@/pages/Dashboard/RunningTaskCard";
import Calendar from "@/components/ui/Calendar";
import { ActivityChart } from "@/pages/Dashboard/ActivityChart";
import MonthlyMentorsSection from "./MonthlyMentorsSection";
import UpcomingTasksSection from "@/components/common/shared/UpcomingTasksSection";
import TaskTodaySection from "@/components/ui/TaskTodaySection";
import Header from "@/components/common/Header";
import { useMainLayout } from "@/hooks/use-mainlayout";

const Dashboard = () => {
  const { toggleSidebar } = useMainLayout();

  return (
    <div className="min-h-screen bg-[#F5F5F7]">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-4">
        <div className="space-y-6">
          <Header toggleSidebar={toggleSidebar} />
          <div className="p-4 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-[0.8fr_2.2fr] gap-4">
              <RunningTaskCard />
              <ActivityChart />
            </div>

            <div className="rounded-lg">
              <MonthlyMentorsSection />
            </div>

            <div className="rounded-lg">
              <UpcomingTasksSection />
            </div>
          </div>
        </div>

        <div className="space-y-10 p-2">
          <div className="bg-white rounded-lg p-2 mt-5">
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