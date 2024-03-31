export type Game = {
  id: string | number;
  name: string;
  thumbnail: string;
  description?: string;
  url?: string;
  span?: number;
};

export type Category = {
  id: string | number;
  name: string;
  thumbnail: string;
  span?: number;
};
