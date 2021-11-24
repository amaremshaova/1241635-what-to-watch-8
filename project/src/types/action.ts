import {
  ThunkAction,
  ThunkDispatch
} from 'redux-thunk';
import {
  AxiosInstance
} from 'axios';
import {State} from '../types/state';

import {
  addFavoriteFilm,
  getReviews,
  getFilm,
  loadFilms,
  updateGenre,
  updateFilmCards,
  resetScreen,
  requireAuthorization,
  requireLogout,
  getMoreLikeFilms,
  getFavoriteFilms,
  getPromoFilm
} from '../store/actions';
import { Film } from './films';


export enum ActionType {
  AddFavoriteFilm = 'ADD_FAVORITE_FILM',
  GetPromoFilm = 'GET_PROMO_FILM',
  GetFavoriteFilms = 'GET_FAVORITE_FILMS',
  GetMoreLikeFilms = 'GET_MORE_LIKE_FILMS',
  GetReviews = 'GET_REVIEWS',
  GetFilm = 'GET_FILM',
  SetActiveFilm = 'SET_ACTIVE_FILM',
  UpdateGenre = 'UPDATE_GENRE',
  LoadFilms = 'LOAD_FILMS',
  ResetScreen = 'RESET_SCREEN',
  UpdateFilmCards = 'UPDATE_FILM_CARDS',
  RequireAuthorization = 'REQUIRE_AUTHORIZATION',
  RequireLogout = 'REQUIRE_LOGOUT',
}

export type Actions =
| ReturnType<typeof addFavoriteFilm>
| ReturnType<typeof getPromoFilm>
| ReturnType<typeof getFavoriteFilms>
| ReturnType<typeof getMoreLikeFilms>
| ReturnType<typeof getReviews>
| ReturnType<typeof getFilm>
| ReturnType<typeof loadFilms>
| ReturnType<typeof updateGenre>
| ReturnType<typeof resetScreen>
| ReturnType<typeof updateFilmCards>
| ReturnType<typeof requireAuthorization>
| ReturnType<typeof requireLogout>


export type ThunkActionFilmResult<R = Promise<Film>> = ThunkAction<R, State, AxiosInstance, Actions>;

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Actions>;

export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Actions>;
