import { Film } from '../types/films';

export function getGenres (films : Film[]): string[] {
  const allGenres = ['All genres'];
  const genres = Array.from(new Set(films.map((film : Film) => film.genre)));
  return allGenres.concat(genres);
}
