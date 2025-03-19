import { useState, useEffect } from 'react';
import { useIsMobile } from './use-mobile';

interface UseCarouselProps {
  totalItems: number;
  itemsPerPage: number;
  forceItemsPerPage?: boolean;
}

export const useCarousel = ({ totalItems, itemsPerPage, forceItemsPerPage }: UseCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isMobile = useIsMobile();
  const effectiveItemsPerPage = forceItemsPerPage ? itemsPerPage : (isMobile ? 1 : itemsPerPage);

  useEffect(() => {
    setCurrentIndex(0);
  }, [isMobile]);
  
  const handlePrevious = () => {
    setCurrentIndex(prev => Math.max(0, prev - 1));
  };
  
  const handleNext = () => {
    setCurrentIndex(prev => Math.min(totalItems - effectiveItemsPerPage, prev + 1));
  };
  
  const isFirstPage = currentIndex === 0;
  const isLastPage = currentIndex >= totalItems - effectiveItemsPerPage;
  
  const visibleItems = <T>(items: T[]): T[] => {
    return items.slice(currentIndex, currentIndex + effectiveItemsPerPage);
  };
  
  return {
    currentIndex,
    handlePrevious,
    handleNext,
    isFirstPage,
    isLastPage,
    visibleItems
  };
};