import games from "@/data/games.json";
import type { Game } from "@/types/app.type";

export const getGameDetail = (name: string): Game | undefined => {
  const bigGames = (games.big as Array<Game>).map((g) => ({ ...g, span: 3 }));
  const mediumGames = (games.medium as Array<Game>).map((g) => ({ ...g, span: 2 }));
  const smallGames = games.small as Array<Game>;
  const game = [...bigGames, ...mediumGames, ...smallGames].find((g) => g.name === name);

  return game;
};
