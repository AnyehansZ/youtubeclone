import { Music4, Radio, Gamepad2, Newspaper, Trophy, Lightbulb, Handbag, Dot } from 'lucide-react';
import '@styles/navigation.css';
import NavButton from '@components/ui/NavButton';

// Explore categories navigation section
export default function ExploreNavigation() {
  const defaultColor = 'inherit';
  const defaultEndSize = 24;

  return (
    <div className="explore_nav">
      <p className="nav_header">explore</p>
      <NavButton StartIcon={Music4} ButtonName="Music" EndIcon={Dot} Color={defaultColor} EndSize={defaultEndSize} />
      <NavButton StartIcon={Radio} ButtonName="Live" EndIcon={Dot} Color={defaultColor} EndSize={defaultEndSize} />
      <NavButton StartIcon={Gamepad2} ButtonName="Gaming" EndIcon={Dot} Color={defaultColor} EndSize={defaultEndSize} />
      <NavButton StartIcon={Newspaper} ButtonName="News" EndIcon={Dot} Color={defaultColor} EndSize={defaultEndSize} />
      <NavButton StartIcon={Trophy} ButtonName="Sports" EndIcon={Dot} Color={defaultColor} EndSize={defaultEndSize} />
      <NavButton StartIcon={Lightbulb} ButtonName="Learning" EndIcon={Dot} Color={defaultColor} EndSize={defaultEndSize} />
      <NavButton StartIcon={Handbag} ButtonName="Fashion & Beauty" EndIcon={Dot} Color={defaultColor} EndSize={defaultEndSize} />
    </div>
  );
}
