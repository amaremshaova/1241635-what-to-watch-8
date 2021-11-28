import {createReducer} from '@reduxjs/toolkit';
import { FilmData } from '../../types/state';
import { loadFavoriteFilms, loadFilm, loadSimilarFilms, loadPromoFilm, loadFilms, loadReviews } from '../actions';


const initialState: FilmData = {
  films: [],
  favoriteFilms: [],
  similarFilms: [],
  promoFilm: undefined,
  isDataLoaded: false,
  activeFilm: undefined,
  reviews: [],
};

const filmData = createReducer(initialState, (builder) => {
  builder
    .addCase(loadFilms, (state, action) => {
      state.films = action.payload;
      state.isDataLoaded = true;
    })
    .addCase(loadFilm, (state, action) => {
      state.activeFilm = action.payload;
    })
    .addCase(loadFavoriteFilms, (state, action) => {
      state.favoriteFilms = action.payload;
      state.isDataLoaded = true;
    })
    .addCase(loadSimilarFilms, (state, action) => {
      state.similarFilms = action.payload;
      state.isDataLoaded = true;
    })
    .addCase(loadPromoFilm, (state, action) => {
      state.promoFilm = action.payload;
    })
    .addCase(loadReviews, (state, action) => {
      state.reviews = action.payload;
    });
});

export {filmData};
