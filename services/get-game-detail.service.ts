import games from "@/data/games.json";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getGameDetail = async (_id: string) => {
  // TODO: implement api
  return await Promise.resolve(games[0]);
};
