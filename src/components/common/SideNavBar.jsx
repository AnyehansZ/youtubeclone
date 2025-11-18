import '@styles/navigation.css';
import PageNavigation from './PageNavigation';
import OptionPageNavigation from './OptionPageNavigation';
import SubscriptionNavigation from './SubscriptionNavigation';
import ExploreNavigation from './ExploreNavigation';
import MoreNavigation from './MoreNavigation';
import FooterNavigation from './FooterNavigation';

// Side navigation bar main component with all nav sections
export default function SideNavBar() {
  return (
    <div className="side_nav_bar">
      <div className="side_bar_scroll flex-1">
        <div className="side_middle">
          <PageNavigation />
        </div>
        <div className="side_left flex-1">
          <OptionPageNavigation />
          <SubscriptionNavigation />
          <ExploreNavigation />
          <MoreNavigation />
          <FooterNavigation />
        </div>
      </div>
    </div>
  );
}
