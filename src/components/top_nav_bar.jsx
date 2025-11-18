import LogoContainer from "../tiny_builds/logo_container";
import SearchToolbarWrap from "../tiny_builds/search_toolbar_wrap";
import "../styles/wrapper.css"
// import UserMenu from "./user_menu";
import "../styles/top_nav_bar.css"

export default function TopNavBar() {
    return (
        <div className="top_nav_bar ">
            <LogoContainer />
            <SearchToolbarWrap />
            {/* <UserMenu /> */}
        </div>
    )
}