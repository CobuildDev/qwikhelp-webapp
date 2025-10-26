"use client";
import React, { useState } from "react";
import { Eye, EyeOff, ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import SocialAuth from "./SocialAuth";

const AuthScreens = () => {};

const LoginScreen = () => {
  const [currentScreen, setCurrentScreen] = useState("login");
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [verificationCode, setVerificationCode] = useState(["", "", "", ""]);
  const [countdown, setCountdown] = useState(60);

  const handleVerificationChange = ({}: any, index: number, value: string) => {
    if (value.length <= 1) {
      const newCode = [...verificationCode];
      newCode[index] = value;
      setVerificationCode(newCode);

      if (value && index < 3) {
        document.getElementById(`code-${index + 1}`)?.focus();
      }
    }
  };

  return (
    <div className="flex flex-col h-full py-12 px-2">
      {/* <Logo /> */}
      <div className="flex justify-center mb-6">
        <Image src="/icons/icon.png" alt="" width={100} height={100} />
      </div>
      <h1 className="text-2xl font-bold text-center mb-2">Login</h1>
      <p className="text-sm text-gray-400 text-center mb-8">
        Welcome back! Please sign in to
        <br />
        access your account.
      </p>

      <div className="flex-1">
        <div className="mb-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 bg-gray-50 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-2 relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 bg-gray-50 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>

        <div className="text-right mb-8">
          <button
            onClick={() => setCurrentScreen("forgot")}
            className="text-sm text-blue-500 font-medium"
          >
            Forget Password?
          </button>
        </div>

        <button
          className={`w-full py-3.5 rounded-xl font-semibold text-white mb-6 ${
            email && password
              ? "bg-blue-500 hover:bg-blue-600"
              : "bg-gray-300 cursor-not-allowed"
          }`}
          disabled={!email || !password}
        >
          Continue
        </button>

        {/* <SocialButtons /> */}
        <SocialAuth />
      </div>

      <div className="text-center text-sm text-gray-600 mt-5">
        Don't have an account?{" "}
        <Link href="/signup" className="text-blue-500 font-semibold">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default LoginScreen;
