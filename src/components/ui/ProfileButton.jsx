import '@styles/wrapper.css';

export default function ProfileButton() {
  return (
    <button className="profile_btn_rounded" title="Profile">
      <img 
        src="src/assets/logo.jpg" 
        alt="Profile" 
      />
    </button>
  );
}
