import "../styles/wrapper.css";
import { Plus } from 'lucide-react';

// import {AddOutlinedIcon} from '@mui/icons-material/AddOutlinedIcon';
import NotificationButton from "./notification_btn";
// import AddRoundedIcon from '@mui/icons-material/AddRounded';

export default function CreateButton() {
    return (
        <div className="tr_icn_wrap flex_row">
            <button className="create_btn flex_btn">
            <Plus size={28}/>
            <p>Create</p>
            </button>
            <NotificationButton />
        </div>
    )
}
