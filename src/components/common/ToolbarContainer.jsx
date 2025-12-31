import NotificationButton from '@components/ui/NotificationButton';
import CreateButton from '@components/ui/CreateButton';
import ProfileButton from '@components/ui/ProfileButton';
import '@styles/wrapper.css';

// Toolbar with action buttons
export default function ToolbarContainer() {
  return (
    <div className="tr_cnp_wrap">
      
      <div className="tr_icn_wrap flex_row">
        <NotificationButton />
        <CreateButton />
        <ProfileButton />
      </div>
    </div>
  );
}
