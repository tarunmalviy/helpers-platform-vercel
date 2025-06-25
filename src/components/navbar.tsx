"use client"; // attact to top for use react hook , bcz in Nextjs u can't direclty use react hooks, now it is made client componennt

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";

import Link from "next/link";

export default function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href="/">
        <MenuItem setActive={setActive} active={active} item="Home">
        </MenuItem>
        </Link>

        <MenuItem setActive={setActive} active={active} item="Categories">
        <div className="flex flex-col space-y-4 text-sm ">
            <HoveredLink href="/categories">Electrician</HoveredLink>
            <HoveredLink href="/categories">Carpenter</HoveredLink>
            <HoveredLink href="/categories">Plumber</HoveredLink>
            <HoveredLink href="/categories">many more</HoveredLink>
        </div>
        </MenuItem>

        <Link href="/contact">
        <MenuItem setActive={setActive} active={active} item="Contact Us">
        </MenuItem>
        </Link>
      </Menu>
    </div>
  );
}
