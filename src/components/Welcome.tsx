"use client";
import Image from "next/image";
import React, { useState } from "react";
import Onbording from "./Onbording";

export default function Welcome() {
  const [welcome, setWelcome] = useState<boolean>(true);
  setTimeout(() => {
    setWelcome(false);
    // window.location.href = "/home";
  }, 4000);

  return (
    <div className="h-screen relative md:hidden bg-white z-[9999]">
      {welcome ? (
        <div className="fixed inset-0 flex justify-center items-center ">
          <Image
            src="/icons/iconText.png"
            alt="Qwik logo"
            width={280} 
            height={280}
            quality={100}
            priority
          />
        </div>
      ) : (
        <Onbording />
      )}
    </div>
  );
}
