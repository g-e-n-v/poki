import type { Metadata } from "next";
import { redirect } from "next/navigation";

import { GameCell } from "@/components/GameCell";
import { GamePlay } from "@/components/GamePlay";
import { MobileGameInfo } from "@/components/MobileGameInfo";
import { MobileGamePlay } from "@/components/MobileGamePlay";
import { Navigation } from "@/components/Navigation";
import { getDeviceType } from "@/services/get-device-type.service";
import { getGameDetail } from "@/services/get-game-detail.service";
import { getGameSlug } from "@/services/get-game-slug.service";
import { getGames } from "@/services/get-games.service";
import { cn } from "@/utils/cn.util";

type GameDetailPageRouteProps = {
  params: { slug: string; locale: string };
};

type GameDetailPageProps = GameDetailPageRouteProps;

export default function GameDetailPage({ params }: GameDetailPageProps) {
  const games = getGames();
  const currentGame = getGameDetail(params.slug);

  if (!currentGame) {
    return redirect("/");
  }

  const isMobile = getDeviceType() === "mobile";

  return (
    <div className="mx-auto w-max">
      <div className={cn("pt-4", isMobile ? "grid-container-mobile" : "grid-container")}>
        <Navigation />

        {isMobile && (
          <MobileGameInfo className="col-span-2 h-cell w-cell-2 " name={currentGame.name} author={currentGame.owner} />
        )}

        {isMobile ? (
          <MobileGamePlay className="col-span-3 row-span-3 size-cell-3" {...currentGame} />
        ) : (
          <GamePlay
            className={cn("col-span-6 col-start-2 row-span-4", "11c:col-span-8 11c:row-span-5")}
            {...currentGame}
          />
        )}

        {games.map((game) => (
          <GameCell key={game.id} locale={params.locale} {...game} />
        ))}
      </div>

      <article
        className={cn("mt-20 flex flex-col bg-white px-6 py-5 shadow-mid", isMobile ? "container-mobile" : "container")}
        dangerouslySetInnerHTML={{ __html: currentGame.howToPlay }}
      />
    </div>
  );
}

export function generateStaticParams() {
  const games = getGames();

  return games.map((game) => ({ slug: getGameSlug(game.name) }));
}

export const generateMetadata = ({ params }: GameDetailPageRouteProps): Metadata => {
  const { slug } = params;
  const game = getGameDetail(slug);

  return {
    title: game?.name,
    description: game?.description,
    keywords: game?.keywords,
  };
};
