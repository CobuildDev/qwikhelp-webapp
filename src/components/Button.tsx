"use client";
import React, { useState } from "react";
import { Eye, EyeOff, ArrowLeft } from "lucide-react";

const AuthScreens = () => {
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

  const Logo = () => (
    <div className="flex justify-center mb-6">
      <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center transform -rotate-12">
        <div className="text-white text-3xl font-bold transform rotate-12">
          ⚡
        </div>
      </div>
    </div>
  );

  const SocialButtons = () => (
    <>
      <div className="flex items-center gap-3 my-6">
        <div className="flex-1 h-px bg-gray-200"></div>
        <span className="text-xs text-gray-400">or sign up with</span>
        <div className="flex-1 h-px bg-gray-200"></div>
      </div>
      <div className="flex justify-center gap-4 mb-6">
        <button className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:shadow-md transition-shadow">
          <svg
            className="w-5 h-5 text-[#1877f2]"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
        </button>
        <button className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:shadow-md transition-shadow">
          <svg
            className="w-5 h-5 text-black"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
          </svg>
        </button>
        <button className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:shadow-md transition-shadow">
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
          </svg>
        </button>
      </div>
    </>
  );

  const LoginScreen = () => (
    <div className="flex flex-col h-full">
      <Logo />
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

        <SocialButtons />
      </div>

      <div className="text-center text-sm text-gray-600 mt-auto">
        Don't have an account?{" "}
        <button className="text-blue-500 font-semibold">Sign Up</button>
      </div>
    </div>
  );

  const ForgotPasswordScreen = () => (
    <div className="flex flex-col h-full">
      <button
        onClick={() => setCurrentScreen("login")}
        className="self-start mb-6"
      >
        <ArrowLeft size={24} />
      </button>

      <h1 className="text-2xl font-bold mb-8">Forgot Password</h1>

      <p className="text-sm text-gray-600 mb-6">Enter your registered email</p>

      <div className="mb-8">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-3 bg-gray-50 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <button
        onClick={() => setCurrentScreen("verification")}
        className={`w-full py-3.5 rounded-xl font-semibold text-white mb-6 ${
          email
            ? "bg-blue-500 hover:bg-blue-600"
            : "bg-gray-300 cursor-not-allowed"
        }`}
        disabled={!email}
      >
        Continue
      </button>

      <div className="text-center text-sm text-gray-600">
        Don't have an account?{" "}
        <button className="text-blue-500 font-semibold">Sign Up</button>
      </div>
    </div>
  );

  const VerificationScreen = () => {
    const allFilled = verificationCode.every((code) => code !== "");

    return (
      <div className="flex flex-col h-full">
        <button
          onClick={() => setCurrentScreen("forgot")}
          className="self-start mb-6"
        >
          <ArrowLeft size={24} />
        </button>

        <h1 className="text-2xl font-bold mb-8">Verification</h1>

        <p className="text-sm text-gray-600 text-center mb-6">
          We have sent a verification code to
          <br />
          <span className="font-medium">nwanerijoseph3@gmail.com</span>
        </p>

        <div className="flex justify-center gap-3 mb-8">
          {[0, 1, 2, 3].map((index) => (
            <input
              key={index}
              id={`code-${index}`}
              type="text"
              maxLength="1"
              value={verificationCode[index]}
              onChange={(e) => handleVerificationChange(index, e.target.value)}
              className="w-14 h-14 text-center text-xl font-semibold bg-gray-50 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          ))}
        </div>

        <button
          onClick={() => setCurrentScreen("newPassword")}
          className={`w-full py-3.5 rounded-xl font-semibold text-white mb-6 ${
            allFilled
              ? "bg-blue-500 hover:bg-blue-600"
              : "bg-gray-300 cursor-not-allowed"
          }`}
          disabled={!allFilled}
        >
          Set automatically
        </button>

        <div className="text-center text-sm text-gray-600 mb-2">
          Didn't receive the verification code?
        </div>
        <div className="text-center text-sm">
          Request a new code in{" "}
          <span className="text-blue-500 font-semibold">{countdown}s</span>
        </div>

        <button className="text-center text-sm text-gray-400 mt-4">
          Resend Code
        </button>
      </div>
    );
  };

  const NewPasswordScreen = ({ filled = false }) => (
    <div className="flex flex-col h-full">
      <button
        onClick={() => setCurrentScreen("verification")}
        className="self-start mb-6"
      >
        <ArrowLeft size={24} />
      </button>

      <h1 className="text-2xl font-bold mb-8">New Password</h1>

      <div className="mb-4">
        <input
          type="password"
          placeholder="Password"
          value={filled ? "******" : password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-3 bg-gray-50 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mb-8">
        <input
          type="password"
          placeholder="Confirm Password"
          value={filled ? "******" : confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-full px-4 py-3 bg-gray-50 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <button
        className={`w-full py-3.5 rounded-xl font-semibold text-white ${
          filled || (password && confirmPassword)
            ? "bg-blue-500 hover:bg-blue-600"
            : "bg-gray-300 cursor-not-allowed"
        }`}
        disabled={!filled && (!password || !confirmPassword)}
      >
        Continue
      </button>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-200 p-8 flex gap-6 overflow-x-auto">
      {/* Login Screen */}
      <div className="bg-white rounded-3xl shadow-lg p-6 w-80 flex-shrink-0">
        <div className="flex justify-between items-center mb-8 text-xs">
          <span>12:22</span>
          <div className="flex gap-1">
            <div className="w-4 h-3 bg-black rounded-sm"></div>
            <div className="w-4 h-3 bg-black rounded-sm"></div>
            <div className="w-4 h-3 bg-black rounded-sm"></div>
          </div>
        </div>
        <LoginScreen />
      </div>

      {/* Forgot Password Screen */}
      <div className="bg-white rounded-3xl shadow-lg p-6 w-80 flex-shrink-0">
        <div className="flex justify-between items-center mb-8 text-xs">
          <span>12:22</span>
          <div className="flex gap-1">
            <div className="w-4 h-3 bg-black rounded-sm"></div>
            <div className="w-4 h-3 bg-black rounded-sm"></div>
            <div className="w-4 h-3 bg-black rounded-sm"></div>
          </div>
        </div>
        <ForgotPasswordScreen />
      </div>

      {/* Verification Screen */}
      <div className="bg-white rounded-3xl shadow-lg p-6 w-80 flex-shrink-0">
        <div className="flex justify-between items-center mb-8 text-xs">
          <span>12:22</span>
          <div className="flex gap-1">
            <div className="w-4 h-3 bg-black rounded-sm"></div>
            <div className="w-4 h-3 bg-black rounded-sm"></div>
            <div className="w-4 h-3 bg-black rounded-sm"></div>
          </div>
        </div>
        <VerificationScreen />
      </div>

      {/* New Password Screen - Empty */}
      <div className="bg-white rounded-3xl shadow-lg p-6 w-80 flex-shrink-0">
        <div className="flex justify-between items-center mb-8 text-xs">
          <span>12:22</span>
          <div className="flex gap-1">
            <div className="w-4 h-3 bg-black rounded-sm"></div>
            <div className="w-4 h-3 bg-black rounded-sm"></div>
            <div className="w-4 h-3 bg-black rounded-sm"></div>
          </div>
        </div>
        <NewPasswordScreen filled={false} />
      </div>

      {/* New Password Screen - Filled */}
      <div className="bg-white rounded-3xl shadow-lg p-6 w-80 flex-shrink-0">
        <div className="flex justify-between items-center mb-8 text-xs">
          <span>12:22</span>
          <div className="flex gap-1">
            <div className="w-4 h-3 bg-black rounded-sm"></div>
            <div className="w-4 h-3 bg-black rounded-sm"></div>
            <div className="w-4 h-3 bg-black rounded-sm"></div>
          </div>
        </div>
        <NewPasswordScreen filled={true} />
      </div>

      {/* Navigation Helper */}
      <div className="bg-white rounded-3xl shadow-lg p-6 w-80 flex-shrink-0">
        <h2 className="text-xl font-bold mb-4">Screen Navigator</h2>
        <div className="space-y-2">
          <button
            onClick={() => setCurrentScreen("login")}
            className="w-full p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Login Screen
          </button>
          <button
            onClick={() => setCurrentScreen("forgot")}
            className="w-full p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Forgot Password
          </button>
          <button
            onClick={() => setCurrentScreen("verification")}
            className="w-full p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Verification
          </button>
          <button
            onClick={() => setCurrentScreen("newPassword")}
            className="w-full p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            New Password
          </button>
        </div>
        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-600">
            <strong>Current:</strong> {currentScreen}
          </p>
          <p className="text-xs text-gray-500 mt-2">
            Scroll horizontally to see all screens →
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthScreens;
