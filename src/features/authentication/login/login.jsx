import '@styles/login.css';
import Logo from '@assets/YT/logo.svg';
import React,{useState} from 'react';

export default function Login() {
  const [formData,setFormData]=useState({email:'',password:''});
  const handleChange=(e)=>{
    const {name,value}=e.target;
    setFormData({...formData,[name]:value});
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    alert('Logging in as '+formData.email);
  }
  return (
    <div className="login-container">
      <div className="login-card">
        {/* The background effect layer */}
        <div className="card-background"></div> 

        <div className="card-content">
          <div className="logo">
            {/* YouTube-like icon */}
            <img src={Logo} alt="Logo" className="logo_img" />
            <span role="img" aria-label="Play Button">▶️</span>
          </div>
          <h2>Welcome Back</h2>
          <form onSubmit={handleSubmit}>
            <input type="email" placeholder="Email" name='email' value={formData.email} onChange={handleChange} />
            <input type="password" onChange={handleChange} placeholder="Password" name='password' value={formData.password}/>
            <button type="submit" className="login-button">{handleSubmit ? <p>logging</p> : <p>Log in</p>}</button>
          </form>
          <p className="separator">Or continue with</p>
          <div className="social-login">
            <button className="social-icon google"></button>
            <button className="social-icon panda"></button>
            <button className="social-icon x"></button>
          </div>
        </div>
      </div>
    </div>
  );
};

