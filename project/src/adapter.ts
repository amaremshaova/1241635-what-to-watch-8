import { FilmServer } from './types/films';
import { Film } from './types/films';

export function adaptToClient(film : FilmServer) : Film{
  const adaptedfilm = Object.assign(
    {},
    film,
    {
      posterImage: film['poster_image'],
      previewImage: film['preview_image'],
      backgroundImage: film['background_image'],
      backgroundColor: film['background_color'],
      videoLink: film['video_link'],
      previewVideoLink: film['preview_video_link'],
      scoresCount: film['scores_count'],
      runTime: film['run_time'],
      isFavorite: film['is_favorite'],
    },
  );

  /*adaptedfilm['poster_image'];
  adaptedfilm['preview_image'],
  adaptedfilm['background_image'],
  adaptedfilm['background_color'],
  adaptedfilm['video_link'],
  adaptedfilm['preview_video_link'],
  adaptedfilm['scores_count'],
  adaptedfilm['run_time'],
  adaptedfilm['is_favorite'],*/

  return adaptedfilm;
}
