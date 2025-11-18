import "../styles/navigation.css";
import { Youtube, Dot,  } from 'lucide-react';
import NavButton from "../tiny_builds/nav_button";
export default function MoreNav(){
    return (
        <div className="more_nav">
            <p className="nav_header">More from YouTube</p>
            <NavButton StartIcon={Youtube} ButtonName="Youtube Studio" EndIcon={Dot} Color="inherit" EndSize={24}/>
            <NavButton StartIcon={Youtube} ButtonName="Youtube Kids" EndIcon={Dot} Color="inherit" EndSize={24}/>
        </div>
    )
}