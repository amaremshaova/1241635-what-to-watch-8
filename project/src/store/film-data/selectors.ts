import {NameSpace} from '../root-reducer';
import {State} from '../../types/state';
import { Film } from '../../types/films';
import { ReviewType } from '../../types/review';

export const getFilms = (state: State): Film[] => state[NameSpace.Data].films;
export const getLoadedDataStatus = (state: State): boolean => state[NameSpace.Data].isDataLoaded;
export const getReviews = (state: State): ReviewType[] => state[NameSpace.Data].reviews;
export const getFilm = (state: State): Film | undefined=> state[NameSpace.Data].activeFilm;
export const getPromoFilm = (state: State): Film | undefined => state[NameSpace.Data].promoFilm;
export const getFavoriteFilms = (state: State): Film[] => state[NameSpace.Data].favoriteFilms;
export const getSimilarFilms = (state: State): Film[] => state[NameSpace.Data].similarFilms;
