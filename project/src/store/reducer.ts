import {State} from '../types/state';
import {ActionType, Actions} from '../types/action';
import { Film} from '../types/films';
import { AuthorizationStatus } from '../const';

const getGenres = (films : Film[]) => {
  const allGenres = ['All genres'];
  const genres = Array.from(new Set(films.map((film : Film) => film.genre)));
  return allGenres.concat(genres);
};

const initialState = {
  renderedFilmCardsCount: 8,
  activeGenre: 'All genres',
  films: [],
  myFilms: [],
  reviews: [],
  genres: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  isDataLoaded: false,
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.LoadFilms:
      return {...state, films: action.films, genres: getGenres(action.films)};
    case ActionType.UpdateGenre:
      return {...state, activeGenre: action.genre};
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
