export interface Cam {
  name: string;
  url: string;
}


// todo load from json

export const cams: Cam[] = [
  {
    name: "kuta",
    url: "https://cams.cdn-surfline.com/cdn-int/id-kuta/playlist.m3u8",
  },

  {
    name: "lennoxhead",
    url: "https://cams.cdn-surfline.com/cdn-au/au-lennoxhead/playlist.m3u8",
  },
  {
    name: "ballinashellybeach",
    url: "https://cams.cdn-surfline.com/cdn-au/au-ballinashellybeach/playlist.m3u8",
  },
  {
    name: "ballinalighthouse",
    url: "https://cams.cdn-surfline.com/cdn-au/au-ballinalighthouse/playlist.m3u8",
  },

];
