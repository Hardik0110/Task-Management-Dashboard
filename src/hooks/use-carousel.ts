import { useState } from 'react';

interface UseCarouselProps {
  totalItems: number;
  itemsPerPage: number;
}

export const useCarousel = ({ totalItems, itemsPerPage }: UseCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const handlePrevious = () => {
    setCurrentIndex(prev => Math.max(0, prev - 1));
  };
  
  const handleNext = () => {
    setCurrentIndex(prev => Math.min(totalItems - itemsPerPage, prev + 1));
  };
  
  const isFirstPage = currentIndex === 0;
  const isLastPage = currentIndex >= totalItems - itemsPerPage;
  
  const visibleItems = <T>(items: T[]): T[] => {
    return items.slice(currentIndex, currentIndex + itemsPerPage);
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