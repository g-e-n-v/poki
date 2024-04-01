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
    <div className={cn("mx-auto flex flex-col px-2")}>
      <div className={cn("grid-container pt-4")}>
        <Navigation />
        {games.map((game) => (
          <GameCell key={game.name} {...game} />
        ))}
      </div>

      <div className={cn("grid-container pt-4")}>
        {categories.map((category) => (
          <CategoryCell key={category.id} {...category} />
        ))}
      </div>

      <article className="container mt-20 flex flex-col bg-white px-6 py-5 shadow-mid">
        <div className="text-[10px] uppercase text-blue-denim">About Poki</div>
        <header>
          <h1 className="text-xl font-bold text-blue-denim">Free Online Games</h1>
        </header>
        <p className="py-4">
          Poki has the best free online games selection and offers the most fun experience to play alone or with
          friends. We offer instant play to all our games without downloads, login, popups or other distractions. Our
          games are playable on desktop, tablet and mobile so you can enjoy them at home or on the road. Every month
          over 60 million gamers from all over the world play their favorite games on Poki.
        </p>

        <h3 className="text-lg font-semibold text-blue-denim">Our game selection</h3>
        <p className="py-4">
          Game developers release fun New Games on our platform on a daily basis. Our most Popular Games include hits
          like Subway Surfers, Temple Run 2, Stickman Hook and Rodeo Stampede. These games are only playable on Poki. We
          also have online classics like Moto X3M, Venge.io, Dino Game, Smash Karts, 2048, Penalty Shooters 2 and Bad
          Ice-Cream to play for free. In total we offer more than 1000 game titles.
        </p>
      </article>
    </div>
  );
}

// INFO: add metadata here
export const metadata: Metadata = {};
