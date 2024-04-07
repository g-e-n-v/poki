"use client";

import Link from "next/link";
import { useState } from "react";

import IconHome from "@/assets/icons/home.svg";
import IconSearch from "@/assets/icons/search.svg";
import Logo from "@/assets/images/logo.svg";
import { Sidebar } from "@/components/Sidebar";
import { cn } from "@/utils/cn.util";

export function Navigation() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <nav className="sticky left-1 top-4 z-20 size-cell overflow-hidden rounded-2xl bg-white">
        <Link href="/" className="flex h-1/2 items-center justify-center border-b border-b-grey-7">
          <Logo className="h-7 origin-center cursor-pointer hover:scale-105" />
        </Link>
        <div className="flex h-1/2 border-t border-t-grey-7">
          <Link
            href={"/"}
            className={cn(
              "flex w-1/2 cursor-pointer items-center justify-center border-r border-r-grey-7 bg-white",
              "hover:bg-grey-7"
            )}
          >
            <IconHome className="size-6 fill-blue-kipo" />
          </Link>
          <button
            className={cn(
              "flex w-1/2 cursor-pointer items-center justify-center border-l border-l-grey-7 bg-white",
              "hover:bg-grey-7"
            )}
            onClick={() => {
              setShowSidebar(true);
            }}
          >
            <IconSearch className="size-6 cursor-pointer fill-blue-kipo" />
          </button>
        </div>
      </nav>

      <Sidebar
        open={showSidebar}
        onClose={() => {
          setShowSidebar(false);
        }}
      />
    </>
  );
}
