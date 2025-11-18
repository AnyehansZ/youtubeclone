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

  return (
    <div className="filter_container">
      <div className="filter_btn_wrap">
        <FilterButton categories={categories} />
      </div>
    </div>
  );
}
