import '@styles/login.css';
import Logo from '@assets/YT/logo.svg';
import React from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";


export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema)
  });
  // const onSubmit = async (data) => {
  //   await login(data.email, data.password)
  //   reset()
  // };
  const onSubmit = (data) => console.log("log in Data:", data);
  const schema = z.object({
    email: z.string().email("Invalid email address").min(1, "Email is required"),
    password: z.string().min(8, "Password must be at least 8 characters").max(32, "Password must not exceed 32 characters"),
  });
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
          <form onSubmit={handleSubmit(onSubmit)}>
            <input type="email" placeholder="Email" autoComplete ="false" {...register("email")} />
            <p>{errors.email?.message}</p>
            {console.log("Email:" + errors.email?.message)}
            <input type="password" placeholder="Password" {...register("password")} />
            <p>{errors.password?.message}</p>
            {console.log("Password:" + errors.password?.message)}
            <button type="submit" className="login-button">Log in</button>
          </form>
          <p className="separator">Or continue with</p>
          <div className="social-login">
            <button className="social-icon google">d</button>
            <button className="social-icon panda">g</button>
            <button className="social-icon x">h</button>
          </div>
        </div>
      </div>
    </div>
  );
};

