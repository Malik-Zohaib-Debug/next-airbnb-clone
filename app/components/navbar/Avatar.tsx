"use client";

import Image from "next/image";
import avatar from "@/public/placeholder-avatar.png";

const Avatar = () => {
  return (
    <Image
      className="rounded-full"
      height="30"
      width="30"
      alt="avatar"
      src={avatar}
    />
  );
};

export default Avatar;
