import { Home, Dot, SquarePlay, ChevronRight, ListVideo, Clock, ThumbsUp, History } from 'lucide-react';
import '@styles/navigation.css';
import NavButton from '@components/ui/NavButton';

// User-specific options navigation (History, Playlist, etc.)
export default function OptionPageNavigation() {
  const defaultColor = 'inherit';
  const defaultEndSize = 24;

  return (
    <div className="option_nav">
      <p className="nav_header">
        you
        <ChevronRight size={18} />
      </p>
      <NavButton StartIcon={History} ButtonName="History" EndIcon={Dot} Color={defaultColor} EndSize={defaultEndSize} />
      <NavButton StartIcon={ListVideo} ButtonName="Playlist" EndIcon={Dot} Color={defaultColor} EndSize={defaultEndSize} />
      <NavButton StartIcon={SquarePlay} ButtonName="Your Videos" EndIcon={Dot} Color={defaultColor} EndSize={defaultEndSize} />
      <NavButton StartIcon={Clock} ButtonName="Watch Later" EndIcon={Dot} Color={defaultColor} EndSize={defaultEndSize} />
      <NavButton StartIcon={ThumbsUp} ButtonName="Liked Videos" EndIcon={Dot} Color={defaultColor} EndSize={defaultEndSize} />
    </div>
  );
}
