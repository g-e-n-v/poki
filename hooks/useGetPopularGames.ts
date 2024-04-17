import { useEffect, useState } from "react";

import popularGames from "@/data/populars.json";

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
