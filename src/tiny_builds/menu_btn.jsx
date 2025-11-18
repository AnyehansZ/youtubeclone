// import MenuIcon from '@mui/icons-material/Menu';
import "../styles/wrapper.css";
import { Menu } from 'lucide-react';


export default function MenuButton() {
    return (
        <button className="menu_btn">
            <Menu size={23} strokeWidth={2.5}/>
        </button>
    )
}
