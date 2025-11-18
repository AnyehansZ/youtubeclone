import { Dot, MoreVertical } from 'lucide-react';
import '@styles/card.css';

// YouTube-style video card component
export default function Card({ logo, poster, title, channel, views, uploadDate }) {
  return (
    <div className="yt-card">
      {/* Thumbnail */}
      <div className="yt-card-thumbnail">
        <img src={poster} alt={title} className="yt-thumbnail-img" />
        <div className="yt-thumbnail-overlay">
          {/* Video duration or live badge could go here */}
        </div>
      </div>

      {/* Card content */}
      <div className="yt-card-content">
        {/* Channel avatar and video info */}
        <div className="yt-card-header">
          <img src={logo} alt={channel} className="yt-channel-avatar" />
          <div className="yt-video-info">
            <h3 className="yt-video-title">{title}</h3>
            <p className="yt-channel-name">{channel}</p>
            <div className="yt-video-meta">
              <span className="yt-views">{views} views</span>
              <span className="yt-separator">•</span>
              <span className="yt-upload-date">{uploadDate}</span>
            </div>
          </div>
          <button className="yt-card-menu" aria-label="Video options">
            <MoreVertical size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
