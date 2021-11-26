import {NameSpace} from '../root-reducer';
import {State} from '../../types/state';
import { Film } from '../../types/films';
import { ReviewType } from '../../types/review';

export const getFilms = (state: State): Film[] => state[NameSpace.data].films;
export const getLoadedDataStatus = (state: State): boolean => state[NameSpace.data].isDataLoaded;
export const getReviews = (state: State): ReviewType[] => state[NameSpace.data].reviews;
export const getFilm = (state: State): Film => state[NameSpace.data].activeFilm;
export const getPromoFilm = (state: State): Film => state[NameSpace.data].promoFilm;
export const getFavoriteFilms = (state: State): Film[] => state[NameSpace.data].favoriteFilms;
export const getSimilarFilms = (state: State): Film[] => state[NameSpace.data].similarFilms;
