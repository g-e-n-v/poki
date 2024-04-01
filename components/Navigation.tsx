"use client";

import Link from "next/link";
import { useState } from "react";

import IconHome from "@/assets/icons/home.svg";
import IconSearch from "@/assets/icons/search.svg";
import PokiLogo from "@/assets/images/poki-logo.svg";
import { cn } from "@/utils/cn.util";

export function Navigation() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <nav className="sticky left-1 top-4 z-20 size-cell overflow-hidden rounded-2xl bg-white">
        <div className="flex h-1/2 items-center justify-center border-b border-b-grey-7">
          <PokiLogo className="h-7 origin-center cursor-pointer hover:scale-105" />
        </div>
        <div className="flex h-1/2 border-t border-t-grey-7">
          <Link
            href={"/"}
            className={cn(
              "flex w-1/2 cursor-pointer items-center justify-center border-r border-r-grey-7 bg-white",
              "hover:bg-grey-7"
            )}
          >
            <IconHome className="size-6 fill-blue-poki" />
          </Link>
          <Link
            href={"/"}
            className={cn(
              "flex w-1/2 cursor-pointer items-center justify-center border-l border-l-grey-7 bg-white",
              "hover:bg-grey-7"
            )}
            onClick={() => {
              setShowSidebar(true);
            }}
          >
            <IconSearch className="size-6 cursor-pointer fill-blue-poki" />
          </Link>
        </div>
      </nav>

      <aside
        className={cn(
          "fixed left-0 top-0 z-50 h-screen w-[500px] -translate-x-full bg-green-7 shadow-mid transition-all",
          {
            "translate-x-0": showSidebar,
          }
        )}
      >
        side menu
      </aside>

      <div
        role="button"
        tabIndex={0}
        className={cn("fixed left-0 top-0 z-40 h-screen w-screen bg-grey-3/50", {
          hidden: !showSidebar,
        })}
        onClick={() => {
          setShowSidebar(false);
        }}
        aria-hidden
      />
    </>
  );
}
