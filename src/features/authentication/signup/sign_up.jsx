import '@styles/sign_up.css';
import React from 'react';
import Google from '@assets/google.svg';
import X from '@assets/x.svg';

export default function SignUp() {
  return (
    <div className="sign-up-container">
      <div className="sign-up-card">
        {/* The background effect layer */}
        <div className="card-background"></div> 

        <div className="card-content">
          <div className="logo">
            {/* YouTube-like icon-button */}
          </div>
          <h2>Create New Account</h2>
          <p className="separator">Continue with</p>
          <div className="social-sign-up">
            <button className="social-icon-button">
                <img src={Google} alt='google svg' />
            </button>
            <button className="social-icon-button">
                <img src={X} alt='X svg' />
            </button>
            <button className="social-icon-button">
                <img src={Google} alt='google svg' />
            </button>
          </div>
          <h2>Or</h2>
          <form>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Confirm password" />
            <button type="submit" className="sign-up-button">Create Account</button>
          </form>
          <p className="separator">Already have an account? <u>Log in</u></p>
        </div>
      </div>
    </div>
  );
};

