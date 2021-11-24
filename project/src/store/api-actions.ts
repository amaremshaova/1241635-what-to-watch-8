import {ThunkActionResult} from '../types/action';
import {loadFilms, getFilm, requireAuthorization, requireLogout, getReviews, getMoreLikeFilms, getFavoriteFilms, addFavoriteFilm, addReview} from './actions';
import {saveToken, dropToken, Token} from '../services/token';
import {APIRoute, AuthorizationStatus} from '../const';
import {FilmServer} from '../types/films';
import {UserData} from '../types/user-data';
import {adaptToClient} from '../adapter';
import { ReviewType } from '../types/review';
import { getPromoFilm } from './actions';
import { StatusData } from '../types/status-data';
import { CommentPost } from '../types/review';

export const fetchFilmsAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<FilmServer[]>(APIRoute.Film);
    dispatch(loadFilms(data.map((film)=> (adaptToClient(film)))));
  };

export const getFilmAction = (id: number): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    const {data} = await api.get<FilmServer>(APIRoute.Film+id);
    dispatch(getFilm(adaptToClient(data)));
  };

export const getPromoFilmAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    const {data} = await api.get<FilmServer>(APIRoute.PromoFilm);
    dispatch(getPromoFilm(adaptToClient(data)));
  };

export const getMoreLikeFilmsAction = (id: number): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    const {data} = await api.get<FilmServer[]>(APIRoute.Film+id+APIRoute.Similar);
    dispatch(getMoreLikeFilms(data.map((film)=> (adaptToClient(film)))));
  };

export const getFavoriteFilmsAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    const {data} = await api.get<FilmServer[]>(APIRoute.FavoriteFilms);
    dispatch(getFavoriteFilms(data.map((film)=> (adaptToClient(film)))));
  };

export const getReviewsAction = (id: number): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    const {data} = await api.get<ReviewType[]>(APIRoute.Reviews+id);
    dispatch(getReviews(data));
  };

export const addReviewAction = (id: number,  {rating, comment} : CommentPost): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    const {data, status} = await api.post<ReviewType[]>(APIRoute.Reviews+id, {rating, comment});
    dispatch(addReview(data, status));
  };

export const checkAuthAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    await api.get(APIRoute.Login)
      .then(() => {
        dispatch(requireAuthorization(AuthorizationStatus.Auth));
      });
  };

export const loginAction = ({email, password}: UserData): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    const {data: {token}} = await api.post<{token: Token}>(APIRoute.Login, {email, password});
    saveToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
  };

export const changeFavoriteFilmsAction = ({id, status}: StatusData): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    const {data} = await api.post(`${APIRoute.FavoriteFilms}${id}/${status}`, {id, status});
    dispatch(addFavoriteFilm(adaptToClient(data)));
  };

export const logoutAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireLogout());
  };
