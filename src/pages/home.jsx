import TopNavBar from "../components/top_nav_bar";
import BoxWrap from "../components/box_wrap";
import "../styles/page_container.css";
export default function Home() {
    return (
        <div className="page_container">
            <TopNavBar />
            <BoxWrap />
        </div>
    )
}
