import { Search } from 'lucide-react';
import '@styles/wrapper.css';

export default function SearchButton() {
  return (
    <button className="search_btn" title="Search">
      <Search size={20} color="white" />
    </button>
  );
}
