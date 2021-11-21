import {
  ThunkAction,
  ThunkDispatch
} from 'redux-thunk';
import {
  AxiosInstance
} from 'axios';
import {State} from '../types/state';


import {
  loadFilms,
  getFilms,
  updateGenre,
  updateFilmCards,
  resetScreen,
  requireAuthorization,
  requireLogout
} from '../store/actions';


export enum ActionType {
  UpdateGenre = 'UPDATE_GENRE',
  LoadFilms = 'LOAD_FILMS',
  GetFilms = 'GET_FILMS',
  ResetScreen = 'RESET_SCREEN',
  UpdateFilmCards = 'UPDATE_FILM_CARDS',
  RequireAuthorization = 'REQUIRE_AUTHORIZATION',
  RequireLogout = 'REQUIRE_LOGOUT',
}

export type Actions =
| ReturnType<typeof loadFilms>
| ReturnType<typeof updateGenre>
| ReturnType<typeof getFilms>
| ReturnType<typeof resetScreen>
| ReturnType<typeof updateFilmCards>
| ReturnType<typeof requireAuthorization>
| ReturnType<typeof requireLogout>


export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Actions>;

export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Actions>;
