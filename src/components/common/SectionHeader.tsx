import { ArrowLeft, ArrowRight } from "iconsax-react";

interface SectionHeaderProps {
  title: string;
  hasNavigation?: boolean;
  onPrevious?: () => void;
  onNext?: () => void;
  disablePrevious?: boolean;
  disableNext?: boolean;
  rightContent?: any;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  hasNavigation = false,
  onPrevious,
  onNext,
  disablePrevious = false,
  disableNext = false
}) => {
  return (
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-xl font-semibold">{title}</h2>
      
      {hasNavigation && (
        <div className="flex space-x-2">
          <button 
            onClick={onPrevious}
            disabled={disablePrevious}
            className={`p-1 rounded-full border ${disablePrevious ? 'text-gray-300 cursor-not-allowed' : 'text-gray-600 hover:bg-gray-100'}`}
            aria-label="Previous"
          >
            <ArrowLeft className="h-5 w-5" color="#333" />
          </button>
          <button 
            onClick={onNext}
            disabled={disableNext}
            className={`p-1 rounded-full border ${disableNext ? 'text-gray-300 cursor-not-allowed' : 'text-gray-600 hover:bg-gray-100'}`}
            aria-label="Next"
          >
            <ArrowRight className="h-5 w-5" color="#333" />
          </button>
        </div>
      )}
    </div>
  );
};

export default SectionHeader;