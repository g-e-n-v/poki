import Link from "next/link";

import { NextImage } from "@/components/NextImage";
import type { Game } from "@/types/app.type";
import { cn } from "@/utils/cn.util";

type GameCellProps = Game;

export function GameCell({ name, thumbnail, span }: GameCellProps) {
  return (
    <Link
      key={name}
      href={`/${name}`}
      className={cn(
        "group/cell relative inline-block aspect-square size-cell overflow-hidden rounded-2xl shadow-mid transition-all duration-700 ease-in-out",
        "hover:-translate-y-1 hover:scale-105",
        "hover:after:absolute hover:after:size-full hover:after:bg-[linear-gradient(#0000_25%,#0000004d)] hover:after:shadow-hover",
        {
          "col-span-3 row-span-3 size-full": span === 3,
          "col-span-2 row-span-2 size-full": span === 2,
        }
      )}
    >
      <NextImage src={thumbnail} alt={name} className="absolute size-full" />
      <span
        className={cn(
          "absolute bottom-0 left-0 z-20 w-full translate-y-full p-1 text-center text-white transition-all duration-700 ease-in-out",
          "group-hover/cell:translate-y-0",
          {
            "text-xs": !span,
          }
        )}
      >
        {name}
      </span>
    </Link>
  );
}
