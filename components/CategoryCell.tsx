import Link from "next/link";

import PokiKids from "@/assets/images/poki-kids.svg";
import { NextImage } from "@/components/NextImage";
import { POKI_KIDS_NAME } from "@/constants/app.constant";
import type { Category } from "@/types/app.type";
import { cn } from "@/utils/cn.util";

type CategoryCellProps = Category;

export function CategoryCell({ id, name, thumbnail, span }: CategoryCellProps) {
  return (
    <Link
      href={`/categories/${id.toString()}`}
      className={cn("col-span-2 flex h-cell w-2cell overflow-hidden rounded-2xl bg-white", {
        "h-2cell flex-col": span === 2,
      })}
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
