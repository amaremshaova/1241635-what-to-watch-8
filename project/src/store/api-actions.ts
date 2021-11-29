import {ThunkActionResult} from '../types/action';
import {loadFilms, loadFilm, requireAuthorization, requireLogout, loadReviews, loadSimilarFilms, loadFavoriteFilms, addFavoriteFilm, addReview} from './actions';
import {saveToken, dropToken} from '../services/token';
import {APIRoute, AuthorizationStatus, USER_AVATAR} from '../const';
import {FilmServer} from '../types/films';
import {UserData} from '../types/user-data';
import {adaptToClient} from '../adapter';
import { ReviewType } from '../types/review';
import {loadPromoFilm } from './actions';
import { StatusData } from '../types/status-data';
import { CommentPost } from '../types/review';
import {toast} from 'react-toastify';
import { AuthDataServer } from '../types/auth-data';


const AUTH_FAIL_MESSAGE = 'Не забудьте авторизоваться';

export const fetchFilmsAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<FilmServer[]>(APIRoute.Film);
    dispatch(loadFilms(data.map((film)=> (adaptToClient(film)))));
  };

export const fetchFilmAction = (id: number): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    const {data} = await api.get<FilmServer>(APIRoute.Film+id);
    dispatch(loadFilm(adaptToClient(data)));
  };

export const fetchPromoFilmAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    const {data} = await api.get<FilmServer>(APIRoute.PromoFilm);
    dispatch(loadPromoFilm(adaptToClient(data)));
  };

export const fetchSimilarFilmsAction = (id: number): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    const {data} = await api.get<FilmServer[]>(APIRoute.Film+id+APIRoute.Similar);
    dispatch(loadSimilarFilms(data.map((film)=> (adaptToClient(film)))));
  };

export const fetchFavoriteFilmsAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    try{
      const {data} = await api.get<FilmServer[]>(APIRoute.FavoriteFilms);
      dispatch(loadFavoriteFilms(data.map((film)=> (adaptToClient(film)))));
    } catch {
      toast.info(AUTH_FAIL_MESSAGE);
    }
  };

export const fetchReviewsAction = (id: number): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    const {data} = await api.get<ReviewType[]>(APIRoute.Reviews+id);
    dispatch(loadReviews(data));
  };

export const addReviewAction = (id: number,  {rating, comment} : CommentPost): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    const {data, status} = await api.post<ReviewType[]>(APIRoute.Reviews+id, {rating, comment});
    dispatch(addReview(data, status));
  };

export const checkAuthAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    const {data} = await api.get(APIRoute.Login);
    if (!data){
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth, USER_AVATAR));
    }
    else {
      dispatch(requireAuthorization(AuthorizationStatus.Auth, data['avatar_url']));
    }
  };

export const loginAction = ({email, password}: UserData): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    const {data} = await api.post<AuthDataServer>(APIRoute.Login, {email, password});
    saveToken(data.token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth, data['avatar_url']));
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
