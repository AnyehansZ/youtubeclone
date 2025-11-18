import Logo from '../assets/YT/logo.svg';
import "../styles/top_nav_bar.css"
import "../styles/wrapper.css"
import MenuButton from './menu_btn';

export default function LogoContainer() {
    return (
        <div className="tl_ml_wrap flex_row">
            <MenuButton />
         <div className='flex_row'>
            <img src={Logo} alt="Logo" className="logo_img" />
            {/* <h2 className="logo">YouTube</h2> */}
         </div>
        </div>
    )
}
