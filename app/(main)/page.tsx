import { GameCell } from "@/components/GameCell";
import { Navigation } from "@/components/Navigation";
import { getGames } from "@/services/get-games.service";
import { cn } from "@/utils/cn.util";

export default async function HomePage() {
  const games = await getGames();

  return (
    <div className={cn("mx-auto")}>
      <div className={cn("grid-container pt-4")}>
        <Navigation />
        {games.map((game) => (
          <GameCell key={game.name} {...game} />
        ))}
      </div>
    </div>
  );
}
