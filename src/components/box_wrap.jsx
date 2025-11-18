import SideNavBar from "./side_nav_bar";
import Contentfeed from "./content_feed";
import "../styles/box_wrap.css";

export default function BoxWrap() {
    return(
        <div className="box_wrap">
            <SideNavBar />
            <Contentfeed />
        </div>
    )
}