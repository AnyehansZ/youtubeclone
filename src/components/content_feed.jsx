import Filter from "./filter";
import "../styles/content_feed.css";
import HomeContent from "../context/home_content";
export default function ContentFeed() {
    return(
        <div className="content_feed">
            <Filter />
            {/* <h2>Content Feed</h2> */}
            <HomeContent />
        </div>
    )
}