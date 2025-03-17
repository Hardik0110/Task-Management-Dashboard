import { useMainLayout } from "@/layout/MainLayout";
import Header from "@/components/common/Header";

const Mentors = () => {
  const { toggleSidebar } = useMainLayout();

  return (
    <div >
      <Header toggleSidebar={toggleSidebar} /> 
      <div className="p-6 space-y-6">
      <div className=" bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-xl font-semibold mb-4">All Mentors</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="h-40 bg-gray-100 rounded-lg flex items-center justify-center">
            Mentor Card 1
          </div>
          <div className="h-40 bg-gray-100 rounded-lg flex items-center justify-center">
            Mentor Card 2
          </div>
          <div className="h-40 bg-gray-100 rounded-lg flex items-center justify-center">
            Mentor Card 3
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Mentors;