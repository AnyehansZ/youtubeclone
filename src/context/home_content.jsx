import Card from "../context/card.jsx";
import "../styles/content_feed.css";
import {videos} from "../data.js";
export default function HomeContent(){
    return(
        <div className="home_content">
            {/* <h1>Content</h1> */}
            {videos.map(video =>(
                <Card key={video.id} {...video} />
            ))}
        </div>
    )
}