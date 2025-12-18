import { Home, Dot, Zap, TvMinimalPlay } from 'lucide-react';
// import {useState} from 'react';
import '@styles/navigation.css';
import NavButton from '@components/ui/NavButton';

// Primary navigation section (Home, Shorts, Subscriptions)
export default function PageNavigation() {
  // const [defaultActive, setDefaultActive] = useState(pageNav[0]);
  // const defaultColor = 'inherit';
  // const indicatorColor = '#1b06d8ff';
  const defaultEndSize = 24;
  const pageNav=[
    { name: 'Home', icon: Home },
    { name: 'Shorts', icon: Zap },
    { name: 'Subscriptions', icon: TvMinimalPlay },
  ]
  return (
    <div className="page_nav">
      {pageNav.map((item)=>(
        <NavButton 
          key={item.name}
          StartIcon={item.icon}
          ButtonName={item.name}
          EndIcon={Dot}
          // Color={item.name === defaultActive.name ? indicatorColor : defaultColor}
          EndSize={defaultEndSize}
          // Active={item.name === defaultActive.name}
        />
      ))}
    </div>
  );
}
