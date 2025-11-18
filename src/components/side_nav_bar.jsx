import "../styles/navigation.css";
import PageNavigation from "../tiny_builds/page_navigation";
import OptionPageNavigation from "../tiny_builds/option_page_nav";
import MoreNav from "../tiny_builds/more_nav";
import SubscriptionNavigation from "../tiny_builds/subscription_nav";
import ExploreNavigation from "../tiny_builds/explore_nav"
import FooterNavigation from "../tiny_builds/footer_nav";
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
                    <MoreNav />
                    <FooterNavigation />
                </div>
            </div>
        </div>
    )
}