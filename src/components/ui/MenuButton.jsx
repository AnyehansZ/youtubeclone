import { Menu } from 'lucide-react';
import '@styles/wrapper.css';

export default function MenuButton() {
  return (
    <button className="menu_btn" title="Menu">
      <Menu size={20} color="white" />
    </button>
  );
}
