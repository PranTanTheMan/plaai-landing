import Link from "next/link";
import React from "react";

export const NavLogo = () => {
  return (
    <Link href="/">
      <img src="/logo.png" alt="Logo" className="h-10 w-auto" />
    </Link>
  );
};
