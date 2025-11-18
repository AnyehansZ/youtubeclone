import Card from './Card';
import '@styles/content_feed.css';
import { videos } from '@services/videoData';

// Video content display component - renders all video cards
export default function HomeContent() {
  return (
    <div className="home_content">
      {videos.map(video => (
        <Card key={video.id} {...video} />
      ))}
    </div>
  );
}
