import { useMainLayout } from "@/layout/MainLayout";
import Header from "@/components/common/Header";

const Task = () => {
  const { toggleSidebar } = useMainLayout();

  return (
    <div >
      <Header toggleSidebar={toggleSidebar} />
      <div className="p-6 space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-xl font-semibold mb-4">All Tasks</h2>
        
        <div className="space-y-4">
          <div className="p-4 border border-gray-200 rounded-lg">
            Task Item 1
          </div>
          <div className="p-4 border border-gray-200 rounded-lg">
            Task Item 2
          </div>
          <div className="p-4 border border-gray-200 rounded-lg">
            Task Item 3
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Task;