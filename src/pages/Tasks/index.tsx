import { useMainLayout } from "@/layout/MainLayout";
import Header from "@/components/common/Header";
import SectionHeader from "@/components/common/SectionHeader";
import { useCarousel } from "@/hooks/use-carousel";
import { upcomingTasks } from "@/lib/data";
import TaskCard from "@/components/common/shared/TaskCard";

type TaskType = {
  id: string;
  title: string;
  role: string;
  progress: number;
  daysLeft: number;
  image: string;
};

type TaskSectionProps = {
  title: string;
  tasks: TaskType[];
  cardsToShow: number;
};

const TaskSection: React.FC<TaskSectionProps> = ({ title, tasks, cardsToShow }) => {
  const { 
    handlePrevious, 
    handleNext, 
    isFirstPage, 
    isLastPage, 
    visibleItems 
  } = useCarousel({
    totalItems: tasks.length,
    itemsPerPage: cardsToShow,
  });

  return (
    <>
      <SectionHeader 
        title={title}
        hasNavigation={true}
        onPrevious={handlePrevious}
        onNext={handleNext}
        disablePrevious={isFirstPage}
        disableNext={isLastPage}
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {visibleItems(tasks).map((task) => (
          <TaskCard
            key={task.id}
            id={task.id}
            title={task.title}
            role={task.role}
            progress={task.progress}
            daysLeft={task.daysLeft}
            image={task.image}
            teamMembers={task.teamMembers}
          />
        ))}
      </div>
    </>
  );
};

type TaskProps = {
  cardsToShow?: number;
};

const Task: React.FC<TaskProps> = ({ cardsToShow = 3 }) => {
  const { toggleSidebar } = useMainLayout();

  return (
    <div>
      <Header toggleSidebar={toggleSidebar} />
      <div className="p-6 space-y-6">
        {/* New Task Section */}
        <TaskSection 
          title="New Task"
          tasks={upcomingTasks}
          cardsToShow={cardsToShow}
        />
        
        {/* Recent Tasks Section */}
        <TaskSection 
          title="Recent Tasks"
          tasks={upcomingTasks}
          cardsToShow={cardsToShow}
        />
      </div>
    </div>
  );
};

export default Task;
