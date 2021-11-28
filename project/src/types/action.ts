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
  StartLoadingData = 'app/startLoadingData',
  RedirectToRoute = 'app/redirectToRoute',
  AddReview = 'app/addReview',
  AddFavoriteFilm = 'app/addFavoriteFilm',
  LoadPromoFilm = 'data/loadPromoFilm',
  LoadFavoriteFilms = 'data/loadFavoriteFilms',
  LoadSimilarFilms = 'data/loadSimilarFilms',
  LoadReviews = 'data/loadReviews',
  LoadFilm = 'data/loadFilm',
  LoadFilms = 'data/loadFilms',
  RequireAuthorization = 'user/requireAuthorization',
  RequireLogout = 'user/requireLogout',
}


export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Action>;

export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Action>;
