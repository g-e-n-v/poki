import Link from "next/link";

import { NextImage } from "@/components/NextImage";
import type { Game } from "@/types/app.type";
import { cn } from "@/utils/cn.util";

type GameCellProps = Game;

export const GameCell = ({ name, thumbnail, span }: GameCellProps) => {
  return (
    <Link
      key={name}
      href={`/detail/${name}`}
      className={cn(
        "relative inline-block aspect-square size-cell overflow-hidden rounded-2xl shadow-mid transition-all",
        "hover:scale-105 hover:shadow-far",
        {
          "col-span-3 row-span-3 size-full": span === 3,
          "col-span-2 row-span-2 size-full": span === 2,
        }
      )}
    >
      <NextImage src={thumbnail} alt={name} className="absolute size-full" />
    </Link>
  );
};
