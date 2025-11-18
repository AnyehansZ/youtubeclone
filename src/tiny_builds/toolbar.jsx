import "../styles/wrapper.css";
import CreateButton from "./create_btn";
import ProfileButton from "./profile_btn";

// Toolbar component that includes CreateButton and ProfileButton
// This is used in the main app layout to provide quick access to these features

export default function Toolbar() {
    return (
        <div className="tr_cnp_wrap flex_row">
            <CreateButton />
            <ProfileButton />
        </div>
    )
}