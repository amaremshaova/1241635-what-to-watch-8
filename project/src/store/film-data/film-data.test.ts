import {filmData} from './film-data';
import {films} from '../../utils/mocks/films';
import { loadFilms, loadFilm, loadFavoriteFilms, loadSimilarFilms, loadReviews, loadPromoFilm} from '../actions';
import {favoriteFilms} from '../../utils/mocks/favorite-films';
import {similarFilms} from '../../utils/mocks/similar-films';
import {reviews} from '../../utils/mocks/reviews';
import {promoFilm} from '../../utils/mocks/promo-film';
describe('Reducer: filmData', () => {
  it('without additional parameters should return initial state', () => {
    expect(filmData(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual({ films: [],
        favoriteFilms: [],
        similarFilms: [],
        promoFilm: undefined,
        isDataLoaded: false,
        activeFilm: undefined,
        reviews: []});
  });

  it('should update all films by load all films', () => {
    const state = {films: [], isDataLoaded: false, favoriteFilms: [], reviews: [], similarFilms:[]};
    expect(filmData(state, loadFilms(films)))
      .toEqual({films, isDataLoaded: true, favoriteFilms: [], reviews: [], similarFilms:[]});
  });

  it('should update favorite films by load favotite films', () => {
    const state = {films: [], isDataLoaded: true, favoriteFilms: [], reviews: [], similarFilms:[]};
    expect(filmData(state, loadFavoriteFilms(favoriteFilms)))
      .toEqual({films: [], isDataLoaded: true, favoriteFilms, reviews: [], similarFilms:[]});
  });

  it('should update similar films by load similar films', () => {
    const state = {films: [], isDataLoaded: true, favoriteFilms: [], reviews: [], similarFilms:[]};
    expect(filmData(state, loadSimilarFilms(similarFilms)))
      .toEqual({films: [], isDataLoaded: true, favoriteFilms:[], reviews: [], similarFilms});
  });

  it('should update reviews films by load reviews', () => {
    const state = {films: [], isDataLoaded: true, favoriteFilms: [], reviews: [], similarFilms:[]};
    expect(filmData(state, loadReviews(reviews)))
      .toEqual({films: [], isDataLoaded: true, favoriteFilms:[], reviews, similarFilms:[]});
  });

  it('should update promo-film films by load promo-film', () => {
    const state = {films: [], isDataLoaded: true, favoriteFilms: [], reviews: [], similarFilms:[], promoFilm: undefined};
    expect(filmData(state, loadPromoFilm(promoFilm)))
      .toEqual({films: [], isDataLoaded: true, favoriteFilms:[], reviews:[], similarFilms:[], promoFilm});
  });

  it('should update active-film films by load active-film', () => {
    const state = {films: [], isDataLoaded: true, favoriteFilms: [], reviews: [], similarFilms:[], activeFilm: undefined};
    expect(filmData(state, loadFilm(promoFilm)))
      .toEqual({films: [], isDataLoaded: true, favoriteFilms:[], reviews:[], similarFilms:[], activeFilm: promoFilm});
  });

});
