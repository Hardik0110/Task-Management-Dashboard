import { FC } from 'react';
import { ArrowLeft2, ArrowRight2 } from "iconsax-react";
import Button from "@/components/ui/Button";
import { SectionHeaderProps } from "@/lib/types";

const SectionHeader: FC<SectionHeaderProps> = ({
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
      <h2 className="text-xl font-semibold">{title}</h2>
      
      {hasNavigation && (
        <div className="flex gap-2">
          <Button
            variant="icon"
            onClick={onPrevious}
            disabled={disablePrevious}
            icon={<ArrowLeft2 className="h-5 w-5" color={disablePrevious ? "#ccc" : "#333"} />}
            ariaLabel="Previous"
          />
          <Button
            variant="icon"
            onClick={onNext}
            disabled={disableNext}
            icon={<ArrowRight2 className="h-5 w-5" color={disableNext ? "#ccc" : "#333"} />}
            ariaLabel="Next"
          />
        </div>
      )}
      
      {rightContent && rightContent}
    </div>
  );
};

export default SectionHeader;