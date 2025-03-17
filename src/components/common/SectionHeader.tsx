import React from 'react';
import { ArrowRight2, ArrowLeft2 } from 'iconsax-react';
import { SectionHeaderProps } from '@/lib/types';
import IconButton from '@/components/ui/IconButton';

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  hasNavigation = false,
  onPrevious,
  onNext,
  disablePrevious = false,
  disableNext = false,
  rightContent
}) => {
  return (
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-lg font-semibold">{title}</h2>
      
      {rightContent && rightContent}
      
      {hasNavigation && (
        <div className="flex space-x-2">
          <IconButton
            icon={<ArrowLeft2 size="20" color="#333" />}
            onClick={onPrevious}
            disabled={disablePrevious}
            ariaLabel="Previous item"
            className={disablePrevious ? 'text-gray-300' : 'text-gray-600'}
          />
          <IconButton
            icon={<ArrowRight2 size="20" color="#333" />}
            onClick={onNext}
            disabled={disableNext}
            ariaLabel="Next item"
            className={disableNext ? 'text-gray-300' : 'text-gray-600'}
          />
        </div>
      )}
    </div>
  );
};

export default SectionHeader;