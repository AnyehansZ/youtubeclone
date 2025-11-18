import { Bell } from 'lucide-react';
import '@styles/wrapper.css';

export default function NotificationButton() {
  return (
    <button className="notif_btn" title="Notifications">
      <Bell size={24} color="white" />
    </button>
  );
}
