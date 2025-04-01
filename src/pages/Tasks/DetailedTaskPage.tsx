import { useNavigate } from 'react-router-dom';
import { useMainLayout } from "@/hooks/use-mainlayout";
import Header from "@/components/common/Header";
import { taskToday } from '@/lib/data';
import { Card, CardContent } from '@/components/ui/Card';
import { Profile2User , Clock , TickCircle , DocumentUpload , ArrowLeft} from 'iconsax-react';
import { studentDetails } from '@/lib/data';

const DetailedTaskPage = () => {
  const navigate = useNavigate();
  const { toggleSidebar } = useMainLayout();

  const task = taskToday;

  return (
    <div>
      <Header toggleSidebar={toggleSidebar} />
      <div className="p-6 space-y-4">
        <button 
          onClick={() => navigate(-1)}
          className="text-sm text-gray-600 hover:text-gray-900 mb-4 flex items-center gap-2"
        >
          <ArrowLeft size={24} color='#333'/> Back to Tasks
        </button>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6 bg-white rounded-lg shadow-sm p-2">
            <Card className="overflow-hidden">
              <div className="relative">
                <img 
                  src={task.image} 
                  alt={task.title} 
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                  <div className="bg-white rounded-full p-2">
                    <button className="h-8 w-8 flex items-center justify-center">
                      ⏸️
                    </button>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-3 flex items-center gap-3">
                  <button className="text-white">⏸️</button>
                  <div className="flex-1 bg-gray-300 h-1 rounded-full">
                    <div className="bg-white h-1 rounded-full w-1/3"></div>
                  </div>
                  <span className="text-white text-sm">2:20/10:00</span>
                </div>
              </div>
            </Card>

            <div>
              <h1 className="text-2xl font-bold">{taskToday.title}</h1>
              <div className="flex flex-wrap gap-4 mt-2">
                <span className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full">UI/UX Design</span>
                <span className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full">Apps Design</span>
                <span className='text-gray-600'>|</span>
                <button className="text-sm text-blue-600 bg-blue-50 px-3 py-1 rounded-full cursor-pointer">+ Add Mentors</button>
              </div>
              
              <div className="flex items-center gap-4 mt-4">
                <div className="flex items-center gap-2">
                 <Profile2User size={16} color='#333' />
                  <span className="text-sm">200 Students Involved</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" color='#333' />
                  <span className="text-sm">{taskToday.timeLeft}</span>
                </div>
              </div>
            </div>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-lg font-semibold mb-3">Description</h2>
                <p className="text-gray-700 mb-4">
                  Follow the video tutorial above. Understand how to use each tool in the Figma application. Also learn 
                  how to make a good and correct design. Starting from spacing, typography, content, and many other 
                  design hierarchies. Then try to make it yourself with your imagination and inspiration.
                </p>
                
                <h2 className="text-lg font-semibold mb-3 mt-6">Essence of Assessment</h2>
                <ul className="space-y-3">
                  {taskToday.steps?.map((step, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <TickCircle color='#546FFF' size={24} variant='Bold' />
                        <span className="text-gray-700">{step.description}</span>
                      </li>
                    )) || []}
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-1 space-y-6">
            <Card className='bg-white rounded-lg shadow-sm'>
              <CardContent className="p-6">
                <h2 className="text-lg font-semibold mb-4">Assigned Assignments</h2>
                
                <h3 className="text-xl font-bold mb-1">{taskToday.title}</h3>
                <p className="text-sm text-gray-600 mb-4">UI/UX Design · Apps Design</p>
                
                <div className="space-y-4 mt-6">
                  <h3 className="font-semibold">Detail Student</h3>
                  
                  <div className=" grid grid-cols-2 gap-y-3">
                    <div className="text-sm text-gray-600">Student's name</div>
                    <div className="text-sm font-medium justify justify-self-end items-end">{studentDetails.name}</div>
                    
                    <div className="text-sm text-gray-600">Student Class</div>
                    <div className="text-sm font-medium justify justify-self-end items-end">{studentDetails.class}</div>
                    
                    <div className="text-sm text-gray-600">Student Number</div>
                    <div className="text-sm font-medium justify justify-self-end items-end">{studentDetails.number}</div>
                  </div>
                </div>

                <div className="mt-6">
                  <h3 className="font-semibold mb-2">File Task</h3>
                  <div className=" grid grid-cols-2 gap-y-3 justify justify-between">
                       <div className="text-sm text-gray-600 mb-1">Last Modified</div>
                      <div className="text-sm mb-4 text-black justify-self-end">{studentDetails.lastModified}</div>
                  </div>
                  
                  <div className="text-sm text-gray-600 mb-2">File submissions</div>
                  <div className="border-2 border-dashed border-gray-300 rounded-md p-8 flex flex-col items-center justify-center">
                    <DocumentUpload size={32} color='#333' />
                    <p className="text-sm text-gray-500 text-center">Drag or browse files here</p>
                  </div>
                  
                  <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors mt-6">
                    Submit
                  </button>
                </div>
              </CardContent>
            </Card>

           
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailedTaskPage;    