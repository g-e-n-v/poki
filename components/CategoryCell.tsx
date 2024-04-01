import Link from "next/link";

import PokiKids from "@/assets/images/poki-kids.svg";
import { NextImage } from "@/components/NextImage";
import { POKI_KIDS_NAME } from "@/constants/app.constant";
import type { Category } from "@/types/app.type";
import { cn } from "@/utils/cn.util";

type CategoryCellProps = Category;

export function CategoryCell({ id, name, thumbnail, span = 1 }: CategoryCellProps) {
  return (
    <Link
      href={`/categories/${id.toString()}`}
      className={cn(
        "col-span-2 flex grid-flow-dense overflow-hidden rounded-2xl bg-white transition-all",
        "hover:scale-105",
        {
          "size-2cell flex-col row-span-2": span === 2,
          "h-cell w-2cell": span === 1,
        }
      )}
    >
      {name === POKI_KIDS_NAME ? (
        <div className="flex size-full items-center justify-center bg-yellow-5 p-4">
          <PokiKids />
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
