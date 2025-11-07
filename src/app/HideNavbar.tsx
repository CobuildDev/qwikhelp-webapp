"use client";

import Navbar from "@/components/Navbar";
import { usePathname } from "next/navigation";

export default function ClientLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // 👇 hide in /admin routes
  const hideHeaderAndProfile = pathname?.startsWith("/login");

  return (
    <>
      {!hideHeaderAndProfile && (
        <div className="fixed top-0 left-0 h-screen w-[350px] z-20 hidden lg:block">
        </div>
      )}
      {children}
      {!hideHeaderAndProfile && <Navbar />}
    </>
  );
}
