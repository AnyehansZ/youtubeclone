import { Bell } from 'lucide-react';

export default function NotificationButton() {
    return (
        <button className="flex_btn notif_btn" >
            <Bell size={24} strokeWidth={2.5}/>
        </button>
    )
}