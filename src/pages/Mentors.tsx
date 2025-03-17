import { useMainLayout } from "@/layout/MainLayout";
import Header from "@/components/common/Header";
import { mentors } from "@/lib/data";
import { useCarousel } from "@/hooks/use-carousel";
import SectionHeader from "@/components/common/SectionHeader";
import { Notepad2 } from "iconsax-react";
import { Star } from "lucide-react";
import { Avatar } from "@/components/ui/Avatar";



const RecentMentorCard = ({ mentor }: any) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center">
          <Avatar src={mentor.image} alt={mentor.name} size="md" className="mr-3" />
          <div>
            <h3 className="font-medium">{mentor.name}</h3>
            <p className="text-xs text-gray-500">{mentor.role}</p>
          </div>
        </div>
        <button 
          className={`text-xs font-medium px-3 py-1 rounded-full ${
            mentor.followed 
              ? 'text-gray-700 bg-gray-100' 
              : 'text-blue-600 border border-blue-600'
          }`}
        >
          {mentor.followed ? 'Followed' : '+ Follow'}
        </button>
      </div>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Notepad2 className="h-4 w-4 text-gray-500 mr-1" size={16} color='#333'/>
          <span className="text-xs">{mentor.taskCount} Task</span>
        </div>
        <div className="flex items-center">
          <Star className="h-4 w-4 text-yellow-400 mr-1" fill="currentColor" />
          <span className="text-xs">{mentor.rating} ({mentor.reviews} Reviews)</span>
        </div>
      </div>
    </div>
  );
};

const DetailedMentorCard = ({ mentor }: any) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center">
          <Avatar src={mentor.image} alt={mentor.name} size="md" className="mr-3" />
          <div>
            <h3 className="font-medium">{mentor.name}</h3>
            <p className="text-xs text-gray-500">{mentor.role}</p>
          </div>
        </div>
        <button 
          className={`text-xs font-medium px-3 py-1 rounded-full ${
            mentor.followed 
              ? 'text-gray-700 bg-gray-100' 
              : 'text-blue-600 border border-blue-600'
          }`}
        >
          {mentor.followed ? 'Followed' : '+ Follow'}
        </button>
      </div>
      
      <p className="text-sm text-gray-600 mb-3 line-clamp-2">{mentor.description}</p>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Notepad2 className="h-4 w-4 text-gray-500 mr-1" size={16} color='#333'/>
          <span className="text-xs">{mentor.taskCount} Task</span>
        </div>
        <div className="flex items-center">
          <Star className="h-4 w-4 text-yellow-400 mr-1" fill="currentColor" />
          <span className="text-xs">{mentor.rating} ({mentor.reviews} Reviews)</span>
        </div>
      </div>
    </div>
  );
};

const Mentors = () => {
  const { toggleSidebar } = useMainLayout();
  const recentMentorsCarousel = useCarousel({
    totalItems: mentors.length,
    itemsPerPage: 3
  });

  const detailMentorCarousel = useCarousel({
    totalItems: mentors.length,
    itemsPerPage: 6
  })

  return (
    <div>
      <Header toggleSidebar={toggleSidebar} /> 
      <div className="p-6 space-y-6">

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <SectionHeader 
            title="Recent Mentors"
            hasNavigation={true}
            onPrevious={recentMentorsCarousel.handlePrevious}
            onNext={recentMentorsCarousel.handleNext}
            disablePrevious={recentMentorsCarousel.isFirstPage}
            disableNext={recentMentorsCarousel.isLastPage}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {recentMentorsCarousel.visibleItems(mentors).map(mentor => (
              <RecentMentorCard key={mentor.id} mentor={mentor} />
            ))}
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm">
        <SectionHeader 
            title="Detailed Mentors"
            hasNavigation={true}
            onPrevious={detailMentorCarousel.handlePrevious}
            onNext={detailMentorCarousel.handleNext}
            disablePrevious={detailMentorCarousel.isFirstPage}
            disableNext={detailMentorCarousel.isLastPage}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {detailMentorCarousel.visibleItems(mentors).map(mentor => (
              <DetailedMentorCard key={mentor.id} mentor={mentor} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mentors;