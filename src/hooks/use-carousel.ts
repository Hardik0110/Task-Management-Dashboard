import { useState } from 'react';

interface UseCarouselProps {
  totalItems: number;
  itemsPerPage: number;
}

export function useCarousel({ totalItems, itemsPerPage }: UseCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const isFirstPage = currentIndex === 0;
  const isLastPage = currentIndex + itemsPerPage >= totalItems;
  
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex - itemsPerPage;
      return newIndex < 0 ? 0 : newIndex;
    });
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + itemsPerPage;
      return newIndex + itemsPerPage > totalItems ? prevIndex : newIndex;
    });
  };

  const visibleItems = (items: any[]) => {
    return items.slice(currentIndex, currentIndex + itemsPerPage);
  };

  return {
    currentIndex,
    handlePrevious,
    handleNext,
    isFirstPage,
    isLastPage,
    visibleItems,
    totalPages
  };
}