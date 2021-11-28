import {createReducer} from '@reduxjs/toolkit';
import { AppProcess} from '../../types/state';
import { addReview, addFavoriteFilm} from '../actions';

const initialState: AppProcess = {
  reviews: [],
  responseStatus: 200,
  favoriteFilms: [],
  isDataLoaded: false,
};

const appProcess = createReducer(initialState, (builder) => {
  builder
    .addCase(addReview, (state, action) => {
      const {reviews, responseStatus} = action.payload;
      state.reviews = reviews;
      state.responseStatus = responseStatus;
    })
    .addCase(addFavoriteFilm, (state, action) => {
      state.favoriteFilms = [...state.favoriteFilms, action.payload];
    });
});

export {appProcess};
