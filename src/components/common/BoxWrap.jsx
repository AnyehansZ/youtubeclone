import SideNavBar from './SideNavBar';
import ContentFeed from './ContentFeed';
import '@styles/box_wrap.css';

// Main layout wrapper - combines sidebar and content feed
export default function BoxWrap() {
  return (
    <div className="box_wrap">
      <SideNavBar />
      <ContentFeed />
    </div>
  );
}
