import type { Metadata } from "next";
import { notFound } from "next/navigation";

// import { CategoryCell } from "@/components/CategoryCell";
// import { getCategories } from "@/services/get-categories.service";
import { GameCell } from "@/components/GameCell";
import { Navigation } from "@/components/Navigation";
import { getDeviceType } from "@/services/get-device-type.service";
import { getGames } from "@/services/get-games.service";
import { locales } from "@/translate/i18n";
import { cn } from "@/utils/cn.util";

type HomePageProps = {
  params: { locale: string };
};

export default function HomePage({ params }: HomePageProps) {
  const { locale } = params;
  if (!locales.includes(locale)) {
    notFound();
  }

  const isMobile = getDeviceType() === "mobile";

  const games = getGames();
  // const categories = await getCategories();

  return (
    <div className={cn("mx-auto flex flex-col px-2")}>
      <div className={cn("pt-4", isMobile ? "grid-container-mobile" : "grid-container")}>
        <Navigation />
        {games.map((game) => (
          <GameCell key={game.id} locale={locale} {...game} />
        ))}
      </div>

      {/* <div className={cn("grid-container pt-4")}>
        {categories.map((category) => (
          <CategoryCell key={category.id} {...category} />
        ))}
      </div> */}

      <article
        className={cn("mt-20 flex flex-col bg-white px-6 py-5 shadow-mid", isMobile ? "container-mobile" : "container")}
      >
        <div className="text-[10px] uppercase text-blue-denim">About LESOR</div>
        <header>
          <h1 className="text-xl font-bold text-blue-denim">Free Online Games</h1>
        </header>
        <p className="py-4">
          LESOR has the best free online games selection and offers the most fun experience to play alone or with
          friends. We offer instant play to all our games without downloads, login, popups or other distractions. Our
          games are playable on desktop, tablet and mobile so you can enjoy them at home or on the road. Every month
          over 60 million gamers from all over the world play their favorite games on LESOR.
        </p>

        <h3 className="text-lg font-semibold text-blue-denim">Our game selection</h3>
        <p className="py-4">
          Game developers release fun New Games on our platform on a daily basis. Our most Popular Games include hits
          like Subway Surfers, Temple Run 2, Stickman Hook and Rodeo Stampede. These games are only playable on LESOR.
          We also have online classics like Moto X3M, Venge.io, Dino Game, Smash Karts, 2048, Penalty Shooters 2 and Bad
          Ice-Cream to play for free. In total we offer more than 1000 game titles.
        </p>
      </article>
    </div>
  );
}

// INFO: add metadata here
export const metadata: Metadata = {};
