import {ActionType} from '../types/action';
import { AuthorizationStatus } from '../const';
import { Film } from '../types/films';

export const loadFilms = (data: Film[]) => ({
  type: ActionType.LoadFilms,
  films: data,
} as const);

export const getFilms = (genre: string) => ({
  type: ActionType.GetFilms,
  genre:genre,
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

