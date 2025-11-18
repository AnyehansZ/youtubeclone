import "../styles/navigation.css";
import { MessageSquareWarning, Dot, Settings, CircleQuestionMark,Flag } from 'lucide-react';
import NavButton from "../tiny_builds/nav_button";

export default function FooterNavigation(){
    return(
        <>
        <div className="footer_nav">
            <NavButton StartIcon={Settings} ButtonName="Settings" EndIcon={Dot} Color="inherit" EndSize={24}/>
            <NavButton StartIcon={Flag} ButtonName="Report History" EndIcon={Dot} Color="inherit" EndSize={24}/>
            <NavButton StartIcon={CircleQuestionMark} ButtonName="Help" EndIcon={Dot} Color="inherit" EndSize={24}/>
            <NavButton StartIcon={MessageSquareWarning} ButtonName="Send feedback" EndIcon={Dot} Color="inherit" EndSize={24}/>    
        </div>
        <div className="foot_note">
            <p>
                <a href="#">About</a>
                <a href="#">Press</a>
                <a href="#">Copyright</a>
                <br />
                <a href="#">Contact us</a>
                <a href="#">Creators</a>
                <a href="#">Advertise</a>
                <br />
                <a href="#">Developers</a>
            </p>
            <p>
                <a href="#">Terms</a>
                <a href="#">Privacy</a>
                <a href="#">Policy & Safety</a>
                <br />
                <a href="#">How YouTube works</a>
                <br />
                <a href="#">Test new features</a>
            </p>
            <p className="copyright">
                &copy; 2023 Google LLC
            </p>
        </div>
        </>
    )
}