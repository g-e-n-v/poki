import games from "@/data/games.json";
import category from "@/data/categories.json";

declare global {
  type Game = (typeof games)["big" | "medium" | "small"][number] & { keywords?: string[] };
  type Category = (typeof category)[number];
}
