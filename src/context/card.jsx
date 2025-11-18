import "./card.css";
import { Dot,FolderDot } from 'lucide-react';

export default function Card({logo,poster,title,channel,views,uploadDate}){
    return(
        <div className="card_box">
            <div className="image_view" style={{backgroundImage:{poster}}}>
                <img src={poster} alt="poster" />
            </div>
            <div className="detail_info">
             <div className="details">
                <div className="channel_logo" style={{backgroundImage:{logo}}}>
                    <img src={logo} alt="Channel_logo" />
                </div>
                <div className="video_details">
                    <p className="video_title">{title}</p>
                    <p className="channel_name">{channel}</p>
                    <div className="view_days">
                        <p className="views">{views}</p>
                        <Dot size={20} color="#2c2c2c"/>
                        <p className="upload_date">{uploadDate}</p>
                    </div>
                </div>
             </div>
             <div className="option">
                <FolderDot size={20} />
             </div>
            </div>
        </div>
    )
}