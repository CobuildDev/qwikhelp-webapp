"use client";
import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import SocialAuth from "./SocialAuth";
import { useRouter } from "next/navigation";

export default function AuthScreens() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your login logic here
    router.push("/home");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white pb-20 px-4"> {/* Added pb-20 for navbar spacing */}
      <div className="w-full max-w-md">
        <LoginScreen
          email={email}
          password={password}
          showPassword={showPassword}
          setEmail={setEmail}
          setPassword={setPassword}
          setShowPassword={setShowPassword}
          handleLogin={handleLogin}
        />
      </div>
    </div>
  );
}

// ---------------------- Login Screen ----------------------

interface LoginScreenProps {
  email: string;
  password: string;
  showPassword: boolean;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  setShowPassword: (show: boolean) => void;
  handleLogin: (e: React.FormEvent) => void;
}

const LoginScreen = ({
  email,
  password,
  showPassword,
  setEmail,
  setPassword,
  setShowPassword,
  handleLogin,
}: LoginScreenProps) => {
  const router = useRouter();
  return (
    <div className="w-full">
      <div className="flex justify-center relative mb-6">
        <Image 
          src="/icons/icon.png" 
          alt="App Icon" 
          width={100} 
          height={100} 
          priority
        />
      </div>
      
      <h1 className="text-2xl font-bold text-center mb-2">Login</h1>
      <p className="text-sm text-gray-400 text-center mb-8">
        Welcome back! Please sign in to <br /> access your account.
      </p>

      <div className="flex-1">
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 bg-gray-50 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-200"
              required
            />
          </div>

          <div className="mb-2 relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 bg-gray-50 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 pr-12 border border-gray-200"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          <div className="text-right mb-8">
            <button
              type="button"
              className="text-sm text-blue-500 cursor-pointer font-medium hover:text-blue-600"
              onClick={() => router.push("/forgot")}
            >
              Forget Password?
            </button>
          </div>

          <button
            type="submit"
            className={`w-full py-3.5 rounded-xl font-semibold text-white mb-6 transition-colors ${
              email && password
                ? "bg-blue-500 hover:bg-blue-600"
                : "bg-gray-300 cursor-not-allowed"
            }`}
            disabled={!email || !password}
          >
            Continue
          </button>
        </form>

        <SocialAuth />
      </div>

      <div className="text-center text-sm text-gray-600 mt-5">
        Don't have an account?{" "}
        <Link href="/signup" className="text-blue-500 font-semibold hover:text-blue-600">
          Sign Up
        </Link>
      </div>
    </div>
  );
};