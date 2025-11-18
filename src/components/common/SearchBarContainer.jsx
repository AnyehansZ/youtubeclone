import SearchBar from '@components/ui/SearchBar';
import SearchButton from '@components/ui/SearchButton';
import '@styles/wrapper.css';

// Search bar container component
export default function SearchBarContainer() {
  return (
    <div className="search_wrap">
      <SearchBar />
      <SearchButton />
    </div>
  );
}
