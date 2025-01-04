"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import logo from "@/public/logo.png";

const Logo = () => {
  const router = useRouter();
  return (
    <Image
      alt="airbnb-logo"
      className="hidden md:block cursor-pointer"
      width="100"
      height="100"
      src={logo}
    />
  );
};

export default Logo;
