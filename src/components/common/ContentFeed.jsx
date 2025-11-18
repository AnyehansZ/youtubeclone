import FilterCategories from './FilterCategories';
import HomeContent from './HomeContent';
import '@styles/content_feed.css';

// Content feed main component with filters and video list
export default function ContentFeed() {
  return (
    <div className="content_feed">
      <FilterCategories />
      <HomeContent />
    </div>
  );
}
