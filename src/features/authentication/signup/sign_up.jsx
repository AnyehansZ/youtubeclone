import '@styles/sign_up.css';
import React from 'react';
import Google from '@assets/google.svg';
import X from '@assets/x.svg';
import Logo from '@assets/YT/logo.svg';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const schema = z.object({
  username: z.string().min(3, "Username is required and must be at least 3 characters").max(30, "Username must not exceed 30 characters"),
  email: z.string().email("Invalid email address").min(1, "Email is required"),
  password: z.string().min(6, "Password is required and must be at least 6 characters"),
  confirm_password: z.string().min(1, "Confirm password is required"),
}).refine((data) => data.password === data.confirm_password, {
  message: "Passwords don't match",
  path: ["confirm_password"],
});

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  defaultValues: {
    username: "",
    email: "",
    password:"Must be greater then 8 characters"
  }
  }
  );
  const onSubmit = (data) => console.log("sign up Data:", data);
  
  return (
    <div className="sign-up-container">
      <div className="sign-up-card">
        {/* The background effect layer */}
        <div className="card-background"></div> 
        <div className="card-content">
          <div className="logo">
            <img src={Logo} alt="Logo" className="logo_img" />
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
          <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Userame" {...register("username")} />
            <p>{errors.username?.message}</p>
            <input type="email" placeholder="Email" {...register("email")} />
            <p>{errors.email?.message}</p>
            <input type="password" placeholder="Password" {...register("password")} />
            <p>{errors.password?.message}</p>
            <input type="password" placeholder="Confirm password" {...register("confirm_password")} />
            <p>{errors.confirm_password?.message}</p>
            <button type="submit" className="sign-up-button">Create Account</button>
          </form>
          <p className="separator">Already have an account? <u>Log in</u></p>
        </div>
      </div>
    </div>
  );
};

