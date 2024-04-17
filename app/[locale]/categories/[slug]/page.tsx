import { redirect } from "next/navigation";

import { GameCell } from "@/components/GameCell";
import { Navigation } from "@/components/Navigation";
import { getCategoryDetail } from "@/services/get-category-detail.service";
import { getDeviceType } from "@/services/get-device-type.service";
import { getGames } from "@/services/get-games.service";
import { cn } from "@/utils/cn.util";

type CategoryPageProps = {
  params: { slug: string; locale: string };
};

export default function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = params;

  const category = getCategoryDetail(slug);

  if (!category) {
    return redirect("/");
  }

  const games = getGames();
  const isMobile = getDeviceType() === "mobile";

  return (
    <div className="mx-auto w-max">
      <div className={cn("pt-4", isMobile ? "grid-container-mobile" : "grid-container")}>
        <Navigation />

        <div
          className={cn(
            "col-span-3 flex w-cell-3 items-center justify-center rounded-2xl bg-white text-lg font-semibold text-blue-denim shadow-mid",
            {
              "w-cell-2 col-span-2": isMobile,
            }
          )}
        >
          {category.name}
        </div>

        {games.map((game) => (
          <GameCell key={game.id} locale={params.locale} {...game} />
        ))}
      </div>

      <article
        className={cn("mt-20 flex flex-col bg-white px-6 py-5 shadow-mid", isMobile ? "container-mobile" : "container")}
        dangerouslySetInnerHTML={{ __html: category.description ?? "" }}
      />
    </div>
  );
}
