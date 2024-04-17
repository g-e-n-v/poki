import { shuffle } from "lodash-es";

import games from "@/data/games.json";

export const getGames = (): Array<Game> => {
  const bigGames = (games.big as Array<Game>).map((g) => ({ ...g, span: 3 }));
  const mediumGames = (games.medium as Array<Game>).map((g) => ({ ...g, span: 2 }));
  const smallGames = games.small as Array<Game>;

  return shuffle([...bigGames, ...mediumGames, ...smallGames]);
};
