"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface OnlyMobileProps {
  children: React.ReactNode;
}

export default function OnlyMobile({ children }: OnlyMobileProps) {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // While checking screen size, render nothing to prevent flicker
  if (isMobile === null) return null;

  // If desktop, show message
  if (!isMobile) {
    return (
      <div>
        <div className="flex flex-row items-center overflow-hidden justify-center h-screen text-center px-6 bg-gradient-to-b from-gray-50 to-blue-50">
          <div>
            <Image src="/imageview1.png" alt="" height={600} width={450} />
          </div>
          <div className="flex flex-col items-center overflow-hidden justify-center h-screen text-center px-6 ">
            {" "}
            <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
              Desktop is not available in your region.
              <br />
              Please open this site on a mobile device 📱
            </h1>
            <p className="text-gray-500 mb-6">
              Or download our mobile app to continue using Qwik Help
            </p>
            <div className="flex gap-4">
              <Link
                href="#"
                className="bg-blue-600/90 text-white px-5 py-3 rounded-xl flex items-center gap-2 shadow-lg hover:scale-105 active:scale-95 transition-transform"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.707 12.293 9.414 4H8v16h1.414l8.293-8.293a1 1 0 0 0 0-1.414Z" />
                </svg>
                Download App
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // If mobile, show actual app
  return <>{children}</>;
}
