"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function Page() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    termsAccepted: false,
  });

  const router = useRouter();

  // Check if all fields are filled and terms are accepted
  const allFilled =
    formData.firstName &&
    formData.lastName &&
    formData.email &&
    formData.password &&
    formData.confirmPassword &&
    formData.termsAccepted;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  return (
    <section className="bg-[#fafafa] h-screen py-14">
      <div className="flex flex-col justify-center gap-8">
        {/* Heading */}
        <div className="flex justify-center flex-col gap-2 items-center px-4">
          <h1 className="text-[30px] font-bold text-[#333]">Create Account</h1>
          <p className="font-normal text-[#A1A1A1] text-center">
            Fill your information below or register with your social account
          </p>
        </div>

        {/* Form */}
        <form className="px-4 gap-6 flex flex-col">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            className="border border-[#e4e4e4a9] px-3 w-full py-3 rounded-lg bg-white"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            className="border border-[#e4e4e4a9] px-3 w-full py-3 rounded-lg bg-white"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="border border-[#e4e4e4a9] px-3 w-full py-3 rounded-lg bg-white"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="border border-[#e4e4e4a9] px-3 w-full py-3 rounded-lg bg-white"
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="border border-[#e4e4e4a9] px-3 w-full py-3 rounded-lg bg-white"
          />

          {/* Terms & Condition */}
          <div className="flex gap-4 items-center">
            <input
              type="checkbox"
              name="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleChange}
              className="scale-150"
            />{" "}
            <span>
              I have agreed to{" "}
              <Link href="/" className="text-blue-600 underline">
                Terms and Conditions
              </Link>
            </span>
          </div>

          <button
            type="button"
            className={`py-2 px-6 w-full rounded-xl font-bold text-white transition-all ${
              allFilled
                ? "bg-blue-600 cursor-pointer"
                : "bg-gray-400 cursor-not-allowed"
            }`}
            disabled={!allFilled}
            onClick={() => router.push("/login")}
          >
            Sign Up
          </button>
        </form>
      </div>
    </section>
  );
}
