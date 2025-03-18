import { useMainLayout } from "@/layout/MainLayout";
import Header from "@/components/common/Header";
import { mentors } from "@/lib/data";
import { useCarousel } from "@/hooks/use-carousel";
import SectionHeader from "@/components/common/SectionHeader";
import MentorCard from "@/components/common/shared/MentorCard";
import {  MentorSectionProps } from "@/lib/types";




const MentorSection: React.FC<MentorSectionProps> = ({ 
  title, 
  carousel, 
  gridClasses, 
  isDetailed, 
  data 
}) => {
  return (
    <div className="p-6 rounded-lg">
      <SectionHeader
        title={title}
        hasNavigation={true}
        onPrevious={carousel.handlePrevious}
        onNext={carousel.handleNext}
        disablePrevious={carousel.isFirstPage}
        disableNext={carousel.isLastPage}
      />
      <div className={`grid gap-4 ${gridClasses}`}>
        {carousel.visibleItems(data).map((mentor) => (
          <MentorCard key={mentor.id} mentor={mentor} isDetailed={isDetailed} />
        ))}
      </div>
    </div>
  );
};

const Mentors = () => {
  const { toggleSidebar } = useMainLayout();

  const recentMentorsCarousel = useCarousel({
    totalItems: mentors.length,
    itemsPerPage: 3,
  });

  const detailedMentorsCarousel = useCarousel({
    totalItems: mentors.length,
    itemsPerPage: 6,
  });

  return (
    <div>
      <Header toggleSidebar={toggleSidebar} />
      <div className="p-6 space-y-6">
        <MentorSection
          title="Recent Mentors"
          carousel={recentMentorsCarousel}
          gridClasses="grid-cols-1 md:grid-cols-3"
          isDetailed={false}
          data={mentors}
        />
        <MentorSection
          title="Detailed Mentors"
          carousel={detailedMentorsCarousel}
          gridClasses="grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          isDetailed={true}
          data={mentors}
        />
      </div>
    </div>
  );
};

export default Mentors;