import {appProcess} from '../../store/app-process/app-process';
import {STATUS_SUCCESS} from '../../const';
import { addFavoriteFilm, addReview } from '../actions';
import {promoFilm} from '../../utils/mocks/promo-film';
import {reviews as testReviews} from '../../utils/mocks/reviews';

const testReview = {
  id: 1,
  user: {
    id: 4,
    name: 'Kate Muir',
  },
  rating: 8.9,
  comment: 'Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the directors funniest and most exquisitely designed movies in years.',
  date: '2019-05-08T14:13:56.569Z',
};

describe('Reducer: appProcess', () => {
  it('without additional parameters should return initial state', () => {
    expect(appProcess(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual({  reviews: [],
        responseStatus: STATUS_SUCCESS,
        favoriteFilms: []});
  });
  it('should update favorite films by add film', () => {
    const state = {reviews: [],
      responseStatus: STATUS_SUCCESS,
      favoriteFilms: []};
    expect(appProcess(state, addFavoriteFilm(promoFilm)))
      .toEqual({  reviews: [],
        responseStatus: STATUS_SUCCESS,
        favoriteFilms: [promoFilm]});
  });
  it('should update reviews by add review', () => {
    const state = {reviews: [],
      responseStatus: 0,
      favoriteFilms: []};

    testReviews.push(testReview);
    const responseStatus = 200;
    expect(appProcess(state, addReview(testReviews, responseStatus)))
      .toEqual({ reviews: testReviews,
        responseStatus: STATUS_SUCCESS,
        favoriteFilms: []});
  });
});
