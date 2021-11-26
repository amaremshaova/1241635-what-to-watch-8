import {Action} from 'redux';
import {
  ThunkAction,
  ThunkDispatch
} from 'redux-thunk';
import {
  AxiosInstance
} from 'axios';
import {State} from '../types/state';


export enum ActionType {
  RedirectToRoute = 'REDIRECT_TO_ROUTE',
  StartLoading = 'START_LOADING',
  AddReview = 'ADD_REVIEW',
  AddFavoriteFilm = 'ADD_FAVORITE_FILM',
  GetPromoFilm = 'GET_PROMO_FILM',
  GetFavoriteFilms = 'GET_FAVORITE_FILMS',
  GetSimilarFilms = 'GET_SIMILAR_FILMS',
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


export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Action>;

export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Action>;
