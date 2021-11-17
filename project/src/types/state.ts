import { Film } from './films';
import { ReviewType } from './review';

export type State = {
  renderedFilmCardsCount: number,
  activeGenre: string,
  genres: string[],
  films: Film[],
  myFilms: Film[],
  reviews: ReviewType[]
};
