import {ActionType} from '../types/action';
import { AppRoute, AuthorizationStatus } from '../const';
import { Film } from '../types/films';
import { ReviewType } from '../types/review';
import {createAction} from '@reduxjs/toolkit';


export const requireAuthorization = createAction(
  ActionType.RequireAuthorization,
  (authStatus: AuthorizationStatus, avatarUrl: string) => ({
    payload: {authStatus, avatarUrl},
  }),
);

export const loadFilms = createAction(
  ActionType.LoadFilms,
  (films: Film[]) => ({
    payload: films,
  }),
);

export const loadFilm = createAction(
  ActionType.LoadFilm,
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
  ActionType.LoadPromoFilm,
  (promoFilm: Film) => ({
    payload: promoFilm,
  }),
);

export const loadSimilarFilms  = createAction(
  ActionType.LoadSimilarFilms,
  (similarFilms: Film[]) => ({
    payload: similarFilms,
  }),
);

export const loadFavoriteFilms = createAction(
  ActionType.LoadFavoriteFilms,
  (favoriteFilms: Film[]) => ({
    payload: favoriteFilms,
  }),
);

export const loadReviews = createAction(
  ActionType.LoadReviews,
  (reviews: ReviewType[]) => ({
    payload: reviews,
  }),
);

export const addReview = createAction(
  ActionType.AddReview,
  (reviews: ReviewType[], responseStatus: number) => ({
    payload: {reviews: reviews, responseStatus: responseStatus},
  }),
);

export const redirectToRoute = createAction(
  ActionType.RedirectToRoute,
  (url: AppRoute) => ({
    payload: url,
  }),
);

export const requireLogout = createAction(ActionType.RequireLogout);
