import { Youtube, Dot } from 'lucide-react';
import '@styles/navigation.css';
import NavButton from '@components/ui/NavButton';

// Additional YouTube services navigation
export default function MoreNavigation() {
  return (
    <div className="more_nav">
      <p className="nav_header">More from YouTube</p>
      <NavButton StartIcon={Youtube} ButtonName="Youtube Studio" EndIcon={Dot} Color="inherit" EndSize={24} />
      <NavButton StartIcon={Youtube} ButtonName="Youtube Kids" EndIcon={Dot} Color="inherit" EndSize={24} />
    </div>
  );
}
