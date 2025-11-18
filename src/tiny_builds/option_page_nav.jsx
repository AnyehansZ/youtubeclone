import "../styles/navigation.css";
import NavButton from "../tiny_builds/nav_button";
import { Home, Dot, SquarePlay, ChevronRight,ListVideo,Clock,ThumbsUp, History } from 'lucide-react';

export default function OptionPageNavigation(){
    const defaultColor="inherit";
    const defaultEndSize=24;
    // const indicatorColor="#1b06d8ff";
    return(
        <div className="option_nav">
            <p className="nav_header">you
                <ChevronRight size={18}/>
            </p>
            <NavButton StartIcon={History} ButtonName="History" EndIcon={Dot} Color={defaultColor} EndSize={defaultEndSize}/>
            <NavButton StartIcon={ListVideo} ButtonName="Playlist" EndIcon={Dot} Color={defaultColor} EndSize={defaultEndSize}/>
            <NavButton StartIcon={SquarePlay} ButtonName="Your Videos" EndIcon={Dot} Color={defaultColor} EndSize={defaultEndSize}/>
            <NavButton StartIcon={Clock} ButtonName="Watch Later" EndIcon={Dot} Color={defaultColor} EndSize={defaultEndSize}/>
            <NavButton StartIcon={ThumbsUp} ButtonName="Liked Videos" EndIcon={Dot} Color={defaultColor} EndSize={defaultEndSize}/>
            
        </div>
    )
}