import LogoContainer from './LogoContainer';
import SearchToolbarWrapper from './SearchToolbarWrapper';
import '@styles/top_nav_bar.css';

// Top navigation bar main component
export default function TopNavBar() {
  return (
    <div className="top_nav_bar">
      <LogoContainer />
      <SearchToolbarWrapper />
    </div>
  );
}
