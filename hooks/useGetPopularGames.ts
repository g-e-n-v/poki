import { useEffect, useState } from "react";

import popularGames from "@/data/populars.json";
import type { Game } from "@/types/app.type";

export function useGetPopularGames() {
  const [data, setData] = useState<Array<Game>>();
  const [isLoading, setIsLoading] = useState(false);

  const fetch = async () => {
    setIsLoading(true);

    const result = await Promise.resolve(popularGames);
    setData(result);

    setIsLoading(false);
  };

  useEffect(() => {
    fetch();
  }, []);

  return { data, isLoading, refetch: fetch };
}
