"use client";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Onbording from "./Onbording";

export default function Welcome() {
  const [welcome, setWelcome] = useState<boolean>(true);
  setTimeout(() => {
    setWelcome(false);
  }, 4000);
  return (
    <div className="h-screen md:hidden">
      {welcome ? (
        <div className="flex justify-center items-center h-full">
          <Image
            src="/icons/iconText.png"
            alt="Qwik logo"
            className=""
            width={280}
            height={280}
            quality={100}
          />
        </div>
      ) : (
        <Onbording />
      )}
    </div>
  );
}
