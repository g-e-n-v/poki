import games from "@/data/games.json";

export const getGames = async () => {
  // TODO: fetch games here
  return await Promise.resolve(games);
};
