"use client";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="bg-[#F5F5F5]">
      <div className="mx-auto max-w-[1440px]">
        <div className="container mx-auto flex items-center justify-between p-4">
          <Image
            src="/Frame-logo.png"
            alt="frame"
            width={24}
            height={24}
          />
          <div className="flex items-center gap-3 font-Helvetica-Neue">
            <Link href="/store" className="text-xs sm:text-sm md:text-base lg:text-lg">Find a Store</Link>
            <span className="text-gray-500">|</span>
            <Link href="/help" className="text-xs sm:text-sm md:text-base lg:text-lg">Help</Link>
            <span className="text-gray-500">|</span>
            <Link href="/join" className="text-xs sm:text-sm md:text-base lg:text-lg">Join Us</Link>
            <span className="text-gray-500">|</span>
            <Link href="/login" className="text-xs sm:text-sm md:text-base lg:text-lg">Sign Up</Link>
          </div>
        </div>
      </div>
    </div>
  );
}