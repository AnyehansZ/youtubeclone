import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import FilterButton from '@components/ui/FilterButton';
import '@styles/filter.css';

// Filter categories component for content feed
export default function FilterCategories() {
  const categories = [
    "All",
    "Music",
    "Sports",
    "Gaming",
    "Movies & Shows",
    "News",
    "Live",
    "Learning",
    "Fashion & Beauty",
    "Podcasts",
    "Comedy",
    "Auto & Vehicles",
    "Technology",
    "Science & Tech",
    "Cooking & Recipes",
    "Art & Design",
    "Travel & Events",
    "How-to & DIY"
  ];

  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      if (direction === 'left') {
        scrollContainerRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="filter_container">
      <button className="filter_scroll_btn filter_scroll_left" onClick={() => scroll('left')} aria-label="Scroll left">
        <ChevronLeft size={20} />
      </button>
      <div className="filter_btn_wrap" ref={scrollContainerRef}>
        <FilterButton categories={categories} />
      </div>
      <button className="filter_scroll_btn filter_scroll_right" onClick={() => scroll('right')} aria-label="Scroll right">
        <ChevronRight size={20} />
      </button>
    </div>
  );
}
