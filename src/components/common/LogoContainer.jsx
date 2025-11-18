import Logo from '@assets/YT/logo.svg';
import MenuButton from '@components/ui/MenuButton';
import '@styles/top_nav_bar.css';
import '@styles/wrapper.css';

// Logo and menu container for top navbar
export default function LogoContainer() {
  return (
    <div className="tl_ml_wrap flex_row">
      <MenuButton />
      <div className="flex_row">
        <img src={Logo} alt="Logo" className="logo_img" />
      </div>
    </div>
  );
}
