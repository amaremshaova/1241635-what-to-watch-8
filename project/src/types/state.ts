import { AuthorizationStatus } from '../const';
import { Film } from './films';
import { ReviewType } from './review';

export type State = {
  renderedFilmCardsCount: number,
  activeGenre: string,
  films: Film[],
  genres: string[],
  reviews: ReviewType[],
  authorizationStatus : AuthorizationStatus,
  isDataLoaded: boolean,
  activeFilm: Film,
  myFilms: Film[],
  moreLikeFilms: Film[],
  promoFilm: Film,
  responseStatus: number,
};
