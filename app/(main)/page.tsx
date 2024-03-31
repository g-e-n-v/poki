import type { Metadata } from "next";

import { CategoryCell } from "@/components/CategoryCell";
import { GameCell } from "@/components/GameCell";
import { Navigation } from "@/components/Navigation";
import { getCategories } from "@/services/get-categories.service";
import { getGames } from "@/services/get-games.service";
import { cn } from "@/utils/cn.util";

export default async function HomePage() {
  const games = await getGames();
  const categories = await getCategories();

  return (
    <div className={cn("mx-auto flex w-max flex-col")}>
      <div className={cn("grid-container pt-4")}>
        <Navigation />
        {games.map((game) => (
          <GameCell key={game.name} {...game} />
        ))}
      </div>

      <div className={cn("grid-container w-full pt-4")}>
        {categories.map((category) => (
          <CategoryCell key={category.id} {...category} />
        ))}
      </div>
    </div>
  );
}

// INFO: add metadata here
export const metadata: Metadata = {};
