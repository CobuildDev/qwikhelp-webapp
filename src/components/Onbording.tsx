import Image from "next/image";
import React from "react";
import Button from "./Button";
import { Router } from "next/router";
import { useRouter } from "next/navigation";

export default function Onbording() {
  const router = useRouter();
  return (
    <section className="h-screen md:hidden">
      <div className="flex flex-col gap-8 justify-center items-center h-full">
        <div className="justify-center items-center flex flex-col gap-4">
          <Image src="/icons/icon.png" alt="" width={130} height={130} />
          <h2 className="text-[30px] font-bold">Sign Up</h2>
        </div>
        <div className="flex-col gap-3 flex w-full px-4">
          <button
            className="p-3 bg-blue-600 text-white px-6 w-full rounded-xl"
            onClick={() => {
              router.push("/signup");
            }}
          >
            Customer
          </button>
          <button
            className="p-3 bg-blue-600 text-white px-6 w-full rounded-xl"
            onClick={() => {
              router.push("/signup");
            }}
          >
            Provider
          </button>
        </div>
        <div>
          Already have an account?{" "}
          <button
            className="text-blue-600/90 font-bold"
            onClick={() => {
              router.push("/login");
            }}
          >
            Login
          </button>
        </div>
      </div>
    </section>
  );
}
