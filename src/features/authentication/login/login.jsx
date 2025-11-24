import '@styles/login.css';
import React from 'react';

export default function Login() {
  return (
    <div className="login-container">
      <div className="login-card">
        {/* The background effect layer */}
        <div className="card-background"></div> 

        <div className="card-content">
          <div className="logo">
            {/* YouTube-like icon */}
            <span role="img" aria-label="Play Button">▶️</span>
          </div>
          <h2>Welcome Back</h2>
          <form>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button type="submit" className="login-button">Log In</button>
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

