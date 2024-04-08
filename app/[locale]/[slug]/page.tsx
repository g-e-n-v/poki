import { notFound } from "next/navigation";

import { GameCell } from "@/components/GameCell";
import { GamePlay } from "@/components/GamePlay";
import { Navigation } from "@/components/Navigation";
import { getGameDetail } from "@/services/get-game-detail.service";
import { getGames } from "@/services/get-games.service";
import { cn } from "@/utils/cn.util";

type GameDetailPageProps = {
  params: { slug: string; locale: string };
};

export default function GameDetailPage({ params }: GameDetailPageProps) {
  const games = getGames();
  const currentGame = getGameDetail(params.slug);

  if (!currentGame) {
    // return redirect("/");
    return notFound();
  }

  return (
    <div className="mx-auto w-max">
      <div className={cn("grid-container pt-4")}>
        <Navigation />

        <GamePlay
          className={cn("col-span-6 col-start-2 row-span-4", "11c:col-span-8 11c:row-span-5")}
          {...currentGame}
        />

        {games.map((game) => (
          <GameCell key={game.id} locale={params.locale} {...game} />
        ))}
      </div>

      <article
        className="container mt-20 flex flex-col bg-white px-6 py-5 shadow-mid"
        dangerouslySetInnerHTML={{ __html: currentGame.howToPlay }}
      />
    </div>
  );
}
