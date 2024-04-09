"use client";
import { noop } from "lodash-es";
import { useState } from "react";

import IconArrow from "@/assets/icons/arrow.svg";
import IconPlay from "@/assets/icons/play.svg";
import { NextImage } from "@/components/NextImage";
import type { Game } from "@/types/app.type";
import { cn } from "@/utils/cn.util";

type MobileGamePlayProps = Game & {
  className?: string;
};

export function MobileGamePlay({ className, thumbnail, name, iframeUrl }: MobileGamePlayProps) {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <div
        className={cn(
          "relative overflow-hidden rounded-2xl bg-white shadow-mid",
          "after:absolute after:size-full after:bg-[linear-gradient(#0000_25%,#0000004d)]",
          className
        )}
        tabIndex={0}
        onKeyDown={noop}
        role="button"
        onClick={() => {
          setVisible(true);
        }}
      >
        <NextImage src={thumbnail} alt={name} className="absolute size-full" />

        <div className="absolute left-0 top-0 flex size-full flex-col items-center justify-center gap-2">
          <div className="flex size-16 items-center justify-center rounded-full bg-white">
            <IconPlay className="size-9 fill-blue-kipo" />
          </div>
          <span className="text-2xl font-bold text-white">Play now</span>
        </div>
      </div>

      <div
        className={cn("fixed left-0 top-0 z-50 h-screen w-screen bg-gray-200", {
          hidden: !visible,
        })}
      >
        <button
          className="absolute top-20 z-50 rounded-r-2xl bg-white py-3 pl-1 pr-4"
          onClick={() => {
            setVisible(false);
          }}
        >
          <IconArrow className="size-6 rotate-180 fill-blue-denim" />
        </button>
        <iframe
          onScroll={(e) => {
            e.stopPropagation();
          }}
          className="absolute left-0 top-0 size-full bg-gray-200"
          allowFullScreen
          allow="autoplay; fullscreen; camera; focus-without-user-activation *; monetization; gamepad; keyboard-map *; xr-spatial-tracking; clipboard-write; web-share; accelerometer; magnetometer; gyroscope"
          name="gameFrame"
          scrolling="no"
          sandbox="allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-presentation allow-scripts allow-same-origin allow-downloads"
          title="Game"
          src={iframeUrl}
        />
      </div>
    </>
  );
}
