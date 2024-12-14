export interface Cam {
  name: string;
  url: string;
}

// todo load from json

export const cams: Cam[] = [

  {
    name: 'duranbah',
    url: 'https://hls.cdn-surfline.com/east-au/au-southduranbah/playlist.m3u8',
  },

  {
    name: 'lennoxhead',
    url: 'https://hls.cdn-surfline.com/east-au/au-lennoxhead/playlist.m3u8',
  },

];
