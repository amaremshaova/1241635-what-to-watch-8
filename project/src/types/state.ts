import { AuthorizationStatus } from '../const';
import { RootState } from '../store/root-reducer';
import { Film } from './films';
import { ReviewType } from './review';

export type UserProcess = {
  authorizationStatus: AuthorizationStatus,
};

export type FilmData = {
  films: Film[],
  favoriteFilms: Film[],
  similarFilms: Film[],
  isDataLoaded: boolean,
  promoFilm: Film,
  activeFilm: Film,
  reviews: ReviewType[]
};

export type AppProcess = {
  favoriteFilms: Film[],
  reviews: ReviewType[],
  responseStatus: number,
}

export type State = RootState;
