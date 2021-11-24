import {ActionType} from '../types/action';
import { AuthorizationStatus } from '../const';
import { Film } from '../types/films';
import { ReviewType } from '../types/review';

export const loadFilms = (data: Film[]) => ({
  type: ActionType.LoadFilms,
  films: data,
} as const);

export const getFilm = (data: Film) => ({
  type: ActionType.GetFilm,
  activeFilm: data,
} as const);

export const addFavoriteFilm = (data: Film) => ({
  type: ActionType.AddFavoriteFilm,
  favoriteFilm : data,
} as const);

export const getPromoFilm = (data: Film) => ({
  type: ActionType.GetPromoFilm,
  promoFilm: data,
} as const);

export const getMoreLikeFilms = (data: Film[]) => ({
  type: ActionType.GetMoreLikeFilms,
  moreLikeFilms: data,
} as const);

export const getFavoriteFilms = (data: Film[]) => ({
  type: ActionType.GetFavoriteFilms,
  myFilms: data,
} as const);

export const getReviews = (data: ReviewType[]) => ({
  type: ActionType.GetReviews,
  reviews: data,
} as const);

export const updateGenre = (genre: string) => ({
  type: ActionType.UpdateGenre,
  genre: genre,
} as const);

export const resetScreen = () => ({
  type: ActionType.ResetScreen,
} as const);

export const updateFilmCards = (renderedFilmCardsCount: number) => ({
  type: ActionType.UpdateFilmCards,
  renderedFilmCardsCount: renderedFilmCardsCount,
} as const);

export const requireAuthorization = (authStatus: AuthorizationStatus) => ({
  type: ActionType.RequireAuthorization,
  payload: authStatus,
} as const);

export const requireLogout = () => ({
  type: ActionType.RequireLogout,
} as const);

