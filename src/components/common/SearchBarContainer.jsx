import SearchBar from '@components/ui/SearchBar';
import SearchButton from '@components/ui/SearchButton';
import '@styles/wrapper.css';
import MicrophoneButton from '@components/ui/MicrophoneButton';

// Search bar container component
export default function SearchBarContainer() {
  return (
    <div className="search_wrap">
      <form action="#">
      <SearchBar />
      <SearchButton />
      </form>
      <div className="tr_icn_wrap">
        <MicrophoneButton />
      </div>
    </div>
  );
}
