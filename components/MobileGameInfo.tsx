import { cn } from "@/utils/cn.util";

type MobileGameInfoProps = {
  name: string;
  author: string;
  className?: string;
};

export function MobileGameInfo({ name, author, className }: MobileGameInfoProps) {
  return (
    <div className={cn("flex flex-col justify-center gap-1 rounded-2xl bg-white px-4 py-2 shadow-mid", className)}>
      <h1 className="text-xl font-bold text-blue-denim">{name}</h1>
      <span className="text-xs">by {author}</span>
    </div>
  );
}
