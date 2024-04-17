import Link from "next/link";

import KidsGames from "@/assets/images/kids-games.svg";
import { NextImage } from "@/components/NextImage";
import { KIDS_NAME } from "@/constants/app.constant";
import type { Category } from "@/types/app.type";
import { cn } from "@/utils/cn.util";

type CategoryCellProps = Category & { locale: string };

export function CategoryCell({ id, name, thumbnail, span = 1, locale }: CategoryCellProps) {
  return (
    <Link
      href={`${locale}/categories/${id.toString()}`}
      className={cn(
        "col-span-2 flex grid-flow-dense overflow-hidden rounded-2xl bg-white transition-all",
        "hover:scale-105",
        {
          "flex-col row-span-2 size-cell-2": span === 2,
          "h-cell w-cell-2": span === 1,
        }
      )}
    >
      {name === KIDS_NAME ? (
        <div className="flex size-full items-center justify-center bg-yellow-5 p-4">
          <KidsGames />
        </div>
      ) : (
        <>
          <NextImage src={thumbnail} alt={name} className={cn(span === 2 ? "grow" : "size-cell")} />
          <span className="flex items-center px-4 py-2 text-xs font-bold text-blue-denim">{name}</span>
        </>
      )}
    </Link>
  );
}
