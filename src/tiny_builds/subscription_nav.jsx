import "../styles/navigation.css";
import { Home, Radio, ChevronRight } from 'lucide-react';

import NavButton from "../tiny_builds/nav_button"
import SubsButton from "../tiny_builds/subs_button"
export default function SubscriptionNavigation(){
    const defaultColor="red";
    const subsEndSize=16;
    const youtubeSubscriptions = [
        {
          channelName: "MrBeast",
          imageLink: "src/assets/YT/profile.jpg"
        },
        {
          channelName: "T-Series",
          imageLink: "src/assets/YT/profile.jpg"
        },
        {
          channelName: "Cocomelon - Nursery Rhymes",
          imageLink: "src/assets/YT/profile.jpg"
        },
        {
          channelName: "PewDiePie",
          imageLink: "src/assets/YT/profile.jpg"
        },
        {
          channelName: "Mark Rober",
          imageLink: "src/assets/YT/profile.jpg"
        },
        {
          channelName: "5-Minute Crafts",
          imageLink: "src/assets/YT/profile.jpg"
        },
        {
          channelName: "Markiplier",
          imageLink: "src/assets/YT/profile.jpg"
        },
        {
          channelName: "Dude Perfect",
          imageLink: "src/assets/YT/profile.jpg"
        },
        {
          channelName: "Gordon Ramsay",
          imageLink: "src/assets/YT/profile.jpg"
        },
        {
          channelName: "The Late Show with Stephen Colbert",
          imageLink: "src/assets/YT/profile.jpg"
        }
      ];
      
    return(
        <div className="subscripton_nav">
            <p className="nav_header">subscriptions
                   <ChevronRight size={18}/>
            </p>
            {youtubeSubscriptions.map((channel, index) => (
                <SubsButton key={index} StartImage={channel.imageLink} ButtonName={channel.channelName} EndIcon={Radio} Color={defaultColor} EndSize={subsEndSize} />
            ))}
        </div>
    )
}