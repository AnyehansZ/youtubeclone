import SearchBarContainer from './SearchBarContainer';
import ToolbarContainer from './ToolbarContainer';
import '@styles/wrapper.css';

// Search and toolbar wrapper for top nav
export default function SearchToolbarWrapper() {
  return (
    <div className="st_wrap">
      <SearchBarContainer />
      <ToolbarContainer />
    </div>
  );
}
