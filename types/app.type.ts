export type Game = {
  id: number;
  name: string;
  thumbnail: string;
  videoDemoUrl: string;
  howToPlay: string;
  description: string;
  owner: string;
  likeCount: number;
  iframeUrl: string;
  span?: number;
};

export type Category = {
  id: string | number;
  name: string;
  thumbnail: string;
  span?: number;
};
