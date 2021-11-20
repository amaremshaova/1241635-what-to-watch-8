export type Film = {
  id: number;
  name: string,
  posterImage: string,
  previewImage: string,
  backgroundImage: string,
  backgroundColor: string,
  videoLink: string,
  previewVideoLink: string,
  description: string,
  rating: number,
  scoresCount: number,
  director: string,
  starring: string[],
  runTime: number,
  genre: string,
  released: number,
  isFavorite: boolean,
};

export type FilmServer = {
  id: number;
  name: string,
  description: string,
  rating: number,
  director: string,
  starring: string[],
  genre: string,
  released: number,
  'poster_image': string,
  'preview_image' : string,
  'background_image' : string,
  'background_color' : string,
  'video_link': string,
  'preview_video_link' : string,
  'scores_count' : number,
  'run_time' : number,
  'is_favorite' : boolean,

}

