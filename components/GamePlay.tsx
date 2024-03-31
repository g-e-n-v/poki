import IconThumbUp from "@/assets/icons/thumb-up.svg";
import { NextImage } from "@/components/NextImage";
import type { Game } from "@/types/app.type";
import { cn } from "@/utils/cn.util";

type GamePlayProps = Game & {
  className?: string;
};

export function GamePlay({ className, name, thumbnail }: GamePlayProps) {
  return (
    <div className={cn("flex flex-col overflow-hidden rounded-2xl bg-white shadow-mid", className)}>
      <div className="grow bg-blue-poki" />

      <div className="flex h-16 justify-between p-3 shadow-mid">
        <div className="flex gap-2">
          <NextImage alt={name} className="size-10 rounded-lg" src={thumbnail} />
          <div className="flex flex-col justify-between">
            <span className="text-sm font-bold text-blue-denim">{name}</span>
            <span className="text-xs">Author</span>
          </div>
        </div>

        <div>
          <div>
            <IconThumbUp className="size-6" />
            <span className="text-xs font-bold">Like</span>
          </div>
        </div>
      </div>
    </div>
  );
}
