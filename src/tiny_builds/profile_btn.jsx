import "../styles/wrapper.css";
import Profile from '../assets/YT/profile.jpg';

export default function ProfileButton() {
    return (
        <div className="profile_btn_rounded" >
            <img src={Profile} alt="Profile" />
        </div>
    )
}