import { Home, Dot, Zap, TvMinimalPlay } from 'lucide-react';
import "../styles/navigation.css";
import NavButton from "../tiny_builds/nav_button"
export default function PageNavigation(){
    const defaultColor="inherit";
    const indicatorColor="#1b06d8ff";
    const defaultEndSize=24;
    return(
        <div className="page_nav">
            <NavButton StartIcon={Home} ButtonName="Home" EndIcon={Dot} Color={defaultColor} EndSize={defaultEndSize}/>
            <NavButton StartIcon={Zap} ButtonName="Shorts" EndIcon={Dot} Color={defaultColor} EndSize={defaultEndSize}/>
            <NavButton StartIcon={TvMinimalPlay} ButtonName="Subscriptions" EndIcon={Dot} Color={indicatorColor} EndSize={defaultEndSize}/>
        </div>
    )
}