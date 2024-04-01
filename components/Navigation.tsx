"use client";

import Link from "next/link";
import type { ChangeEvent } from "react";
import { useState } from "react";

import IconArrow from "@/assets/icons/arrow.svg";
import IconClose from "@/assets/icons/close.svg";
import IconHome from "@/assets/icons/home.svg";
import IconSearch from "@/assets/icons/search.svg";
import IconSquareLogo from "@/assets/icons/square-logo.svg";
import PokiLogo from "@/assets/images/poki-logo.svg";
import { GameCell } from "@/components/GameCell";
import { useDebounce } from "@/hooks/useDebounce";
import { useGetPopularGames } from "@/hooks/useGetPopularGames";
import { cn } from "@/utils/cn.util";

export function Navigation() {
  const [showSidebar, setShowSidebar] = useState(true);

  const [searchText, setSearchText] = useState<string>();
  const [status, setStatus] = useState<"idle" | "typing" | "fetching">("idle");
  console.log(status, searchText);

  const { data: popularGames } = useGetPopularGames();

  const handleSearchTextChange = useDebounce((e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    console.log("value", value);
    setSearchText(value);

    if (value === "") {
      setStatus("idle");
      return;
    }

    setStatus("fetching");
    // TODO: Handle search

    setStatus("typing");
  });

  return (
    <>
      <nav className="sticky left-1 top-4 z-20 size-cell overflow-hidden rounded-2xl bg-white">
        <Link href="/" className="flex h-1/2 items-center justify-center border-b border-b-grey-7">
          <PokiLogo className="h-7 origin-center cursor-pointer hover:scale-105" />
        </Link>
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
          "fixed left-0 top-0 z-50 h-screen w-[688px] -translate-x-full bg-green-7 px-5 pt-8 shadow-angle transition-all",
          {
            "translate-x-0": showSidebar,
          }
        )}
      >
        <div className="relative mr-6 flex h-16 rounded-2xl bg-white shadow-close">
          <button
            className={cn(
              "absolute -right-20 flex size-16 items-center justify-center rounded-full bg-white shadow-mid",
              {
                hidden: !showSidebar,
              }
            )}
            onClick={() => {
              setShowSidebar(false);
            }}
          >
            <IconArrow className="size-5 rotate-180 fill-grey-3" />
          </button>

          <button className="flex aspect-square shrink-0 items-center justify-center rounded-l-2xl border-r-2 border-grey-7 hover:bg-grey-7">
            <IconSquareLogo className="size-6" />
          </button>

          <input
            className={cn("h-full grow px-4 text-xl font-bold outline-none", "placeholder:text-grey-5")}
            placeholder="What are you playing today?"
            onChange={(e) => {
              setStatus("typing");
              handleSearchTextChange(e);
            }}
          />

          <div className="flex aspect-square shrink-0 items-center justify-center">
            {status === "idle" && <IconSearch className="size-6 fill-grey-5" />}
            {status === "typing" && (
              <div className="rounded-full bg-grey-7 p-2">
                <IconClose className="size-4 fill-grey-3 " />
              </div>
            )}
          </div>
        </div>

        <div className="my-4 flex gap-2 overflow-x-auto whitespace-nowrap py-2">
          <div className="flex h-9 items-center rounded-full bg-white px-5 text-xs font-semibold uppercase text-blue-denim shadow-close">
            .io games
          </div>
          <div className="flex h-9 items-center rounded-full bg-white px-5 text-xs font-semibold uppercase text-blue-denim shadow-close">
            .io games
          </div>
          <div className="flex h-9 items-center rounded-full bg-white px-5 text-xs font-semibold uppercase text-blue-denim shadow-close">
            .io games
          </div>
          <div className="flex h-9 items-center rounded-full bg-white px-5 text-xs font-semibold uppercase text-blue-denim shadow-close">
            .io games
          </div>
          <div className="flex h-9 items-center rounded-full bg-white px-5 text-xs font-semibold uppercase text-blue-denim shadow-close">
            .io games
          </div>
          <div className="flex h-9 items-center rounded-full bg-white px-5 text-xs font-semibold uppercase text-blue-denim shadow-close">
            .io games
          </div>
          <div className="flex h-9 items-center rounded-full bg-white px-5 text-xs font-semibold uppercase text-blue-denim shadow-close">
            .io games
          </div>
          <div className="flex h-9 items-center rounded-full bg-white px-5 text-xs font-semibold uppercase text-blue-denim shadow-close">
            .io games
          </div>
          <div className="flex h-9 items-center rounded-full bg-white px-5 text-xs font-semibold uppercase text-blue-denim shadow-close">
            .io games
          </div>
        </div>

        <h2 className="mb-2 mt-4 text-2xl font-bold text-blue-denim">Popular in this week</h2>

        <div className="flex gap-4">
          {popularGames?.map((game) => (
            <GameCell key={game.id} {...game} />
          ))}
        </div>
      </aside>

      <div
        role="button"
        tabIndex={0}
        className={cn("fixed left-0 top-0 z-20 h-screen w-screen bg-grey-3 opacity-90 mix-blend-multiply", {
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
