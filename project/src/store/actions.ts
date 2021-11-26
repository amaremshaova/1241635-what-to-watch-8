import {ActionType} from '../types/action';
import { AppRoute, AuthorizationStatus } from '../const';
import { Film } from '../types/films';
import { ReviewType } from '../types/review';
import {createAction} from '@reduxjs/toolkit';


export const requireAuthorization = createAction(
  ActionType.RequireAuthorization,
  (authStatus: AuthorizationStatus) => ({
    payload: authStatus,
  }),
);

export const requireLogout = createAction(ActionType.RequireLogout);

export const loadFilms = createAction(
  ActionType.LoadFilms,
  (films: Film[]) => ({
    payload: films,
  }),
);

export const loadFilm = createAction(
  ActionType.GetFilm,
  (film: Film) => ({
    payload: film,
  }),
);

export const addFavoriteFilm = createAction(
  ActionType.AddFavoriteFilm,
  (favoriteFilm: Film) => ({
    payload: favoriteFilm,
  }),
);

export const loadPromoFilm = createAction(
  ActionType.GetPromoFilm,
  (promoFilm: Film) => ({
    payload: promoFilm,
  }),
);

export const loadSimilarFilms  = createAction(
  ActionType.GetSimilarFilms,
  (similarFilms: Film[]) => ({
    payload: similarFilms,
  }),
);

export const loadFavoriteFilms = createAction(
  ActionType.GetFavoriteFilms,
  (favoriteFilms: Film[]) => ({
    payload: favoriteFilms,
  }),
);

export const loadReviews = createAction(
  ActionType.GetReviews,
  (reviews: ReviewType[]) => ({
    payload: reviews,
  }),
);

export const addReview = createAction(
  ActionType.AddReview,
  (reviews: ReviewType[], responseStatus: number) => ({
    payload: {reviews, responseStatus},
  }),
);


export const updateFilmCards = createAction(
  ActionType.UpdateGenre,
  (renderedFilmCardsCount: number) => ({
    payload: renderedFilmCardsCount,
  }),
);

export const startLoading = () => ({
  type: ActionType.StartLoading,
} as const);

export const redirectToRoute = createAction(
  ActionType.RedirectToRoute,
  (url: AppRoute) => ({
    payload: url,
  }),
);

