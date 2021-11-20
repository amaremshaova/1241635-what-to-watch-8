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

  /*delete adaptedfilm['poster_image'];
  delete adaptedfilm['preview_image'];
  delete adaptedfilm['background_image'];
  delete adaptedfilm['background_color'];
  delete adaptedfilm['video_link'];
  delete adaptedfilm['preview_video_link'];
  delete adaptedfilm['scores_count'];
  delete adaptedfilm['run_time'];
  deleteadaptedfilm['is_favorite'];*/

  return adaptedfilm;
}
