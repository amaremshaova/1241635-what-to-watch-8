import {State} from '../types/state';
import {ActionType, Actions} from '../types/action';
import { Film} from '../types/films';
import { AuthorizationStatus} from '../const';
import { myFilms } from '../mocks/my-films';

const getGenres = (films : Film[]) => {
  const allGenres = ['All genres'];
  const genres = Array.from(new Set(films.map((film : Film) => film.genre)));
  return allGenres.concat(genres);
};

const initialFilm = {
  id: 0,
  name: '',
  posterImage: '',
  previewImage: '',
  backgroundImage: '',
  backgroundColor: '',
  videoLink: '',
  previewVideoLink: '',
  description: '',
  rating: 0,
  scoresCount: 0,
  director: '',
  starring: [],
  runTime: 0,
  genre: '',
  released: 0,
  isFavorite: false,
};

const initialState = {
  renderedFilmCardsCount: 8,
  activeGenre: 'All genres',
  films: [],
  activeFilm: initialFilm,
  reviews: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  isDataLoaded: false,
  genres: [],
  myFilms: [],
  moreLikeFilms:[],
  promoFilm: initialFilm,
  responseStatus: 200,
};

const reducer = (state: State = initialState, action: Actions): State  => {
  switch (action.type) {
    case ActionType.LoadFilms:
      return {...state, films: action.films, genres: getGenres(action.films)};
    case ActionType.GetReviews:
      return {...state, reviews: action.reviews};
    case ActionType.AddReview:
      return {...state, reviews: action.reviews, responseStatus: action.responseStatus};
    case ActionType.GetMoreLikeFilms:
      return {...state, moreLikeFilms: action.moreLikeFilms};
    case ActionType.GetFavoriteFilms:
      return {...state, myFilms: action.myFilms};
    case ActionType.AddFavoriteFilm:
      return {...state, myFilms: [...myFilms, action.favoriteFilm]};
    case ActionType.UpdateGenre:
      return {...state, activeGenre: action.genre};
    case ActionType.GetFilm:
      return {...state, activeFilm: action.activeFilm};
    case ActionType.GetPromoFilm:
      return {...state, promoFilm: action.promoFilm};
    case ActionType.RequireAuthorization:{
      return {
        ...state,
        authorizationStatus: action.payload,
        isDataLoaded: true,
      };
    }
    case ActionType.RequireLogout:
      return {...state, authorizationStatus: AuthorizationStatus.NoAuth};
    case ActionType.UpdateFilmCards:
      return {...state, renderedFilmCardsCount: action.renderedFilmCardsCount};
    case ActionType.ResetScreen:
      return {...initialState};
    default:
      return state;
  }
};

export {reducer};
