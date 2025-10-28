"use client";
import React, { useState, useEffect } from "react";
import { Eye, EyeOff, ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import SocialAuth from "./SocialAuth";
import { useRouter } from "next/navigation";

export default function ForgotPassword() {
  // Start with the login screen
  const [currentScreen, setCurrentScreen] = useState<"login" | "verify">(
    "login"
  );
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verificationCode, setVerificationCode] = useState(["", "", "", ""]);
  const [countdown, setCountdown] = useState(60);

  // Countdown logic
  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);

  // Handle verification input
  const handleVerificationChange = (index: number, value: string) => {
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
    <div className="flex flex-col h-full py-12 px-4 max-w-md mx-auto">
      {currentScreen === "login" ? (
        <ForgotPasswordScreen
          email={email}
          setEmail={setEmail}
          setCurrentScreen={setCurrentScreen}
        />
      ) : (
        <VerificationScreen
          verificationCode={verificationCode}
          countdown={countdown}
          handleVerificationChange={handleVerificationChange}
          setCurrentScreen={setCurrentScreen}
          setCountdown={setCountdown}
        />
      )}
    </div>
  );
}

// ---------------------- Forgot Password Screen ----------------------

interface ForgotPasswordScreenProps {
  email: string;
  setEmail: (email: string) => void;
  setCurrentScreen: (screen: "login" | "verify") => void;
}

const ForgotPasswordScreen: React.FC<ForgotPasswordScreenProps> = ({
  email,
  setEmail,
  setCurrentScreen,
}) => {
  const router = useRouter();

  return (
    <div className="flex flex-col h-full">
      {/* Header with Back Arrow and Title */}
      <div className="flex items-center gap-4 mb-8">
        <button
          onClick={() => router.back()}
          className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 transition-colors"
        >
          <ArrowLeft size={24} />
        </button>
        <h1 className="text-[21px] w-full font-bold flex-1 text-center mr-10">
          Forgot Password
        </h1>
      </div>

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
        onClick={() => setCurrentScreen("verify")}
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
};

// ---------------------- Verification Screen ----------------------

interface VerificationScreenProps {
  verificationCode: string[];
  countdown: number;
  handleVerificationChange: (index: number, value: string) => void;
  setCurrentScreen: (screen: "login" | "verify") => void;
  setCountdown: (countdown: number) => void;
}

const VerificationScreen: React.FC<VerificationScreenProps> = ({
  verificationCode,
  countdown,
  handleVerificationChange,
  setCurrentScreen,
  setCountdown,
}) => {
  const allFilled = verificationCode.every((code: string) => code !== "");
  const router = useRouter();

  return (
    <div className="flex flex-col h-full">
      {/* Header with Back Arrow and Title */}
      <div className="flex items-center gap-4 mb-8">
        <button
          onClick={() => setCurrentScreen("login")}
          className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 transition-colors"
        >
          <ArrowLeft size={24} />
        </button>
        <h1 className="text-2xl font-bold flex-1 text-center mr-10">
          Verification
        </h1>
      </div>

      <p className="text-sm text-gray-600 text-center mb-6">
        We&apos;ve sent a verification code to <br />
        <span className="font-medium">your email</span>
      </p>

      <div className="flex justify-center gap-3 mb-8">
        {[0, 1, 2, 3].map((index) => (
          <input
            key={index}
            id={`code-${index}`}
            type="text"
            maxLength={1}
            value={verificationCode[index]}
            onChange={(e) => handleVerificationChange(index, e.target.value)}
            className="w-14 h-14 text-center text-xl font-semibold bg-gray-50 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        ))}
      </div>

      <button
        className={`w-full py-3.5 rounded-xl font-semibold text-white mb-6 ${
          allFilled
            ? "bg-blue-500 hover:bg-blue-600"
            : "bg-gray-300 cursor-not-allowed"
        }`}
        disabled={!allFilled}
        onClick={() => router.push("/forgot/reset")}
      >
        Verify Code
      </button>

      <div className="text-center text-sm text-gray-600 mb-2">
        Didn&apos;t receive the code?
      </div>

      <div className="text-center text-sm">
        Request a new code in{" "}
        <span className="text-blue-500 font-semibold">{countdown}s</span>
      </div>

      {countdown === 0 && (
        <button
          onClick={() => setCountdown(60)}
          className="text-center text-sm text-blue-500 mt-4 font-medium"
        >
          Resend Code
        </button>
      )}
    </div>
  );
};
