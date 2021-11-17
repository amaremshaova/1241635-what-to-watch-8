import { films } from '../mocks/films';
import {State} from '../types/state';
import {ActionType, Actions} from '../types/action';
import { myFilms } from '../mocks/my-films';
import { reviews } from '../mocks/reviews';
import { Film} from '../types/films';

const getGenres = () => {
  const allGenres = ['All genres'];
  const genres = Array.from(new Set(films.map((film : Film) => film.genre)));
  return allGenres.concat(genres);
};

const initialState = {
  renderedFilmCardsCount: 8,
  activeGenre: 'All genres',
  films: films,
  myFilms: myFilms,
  reviews: reviews,
  genres: getGenres(),
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.UpdateGenre:
      return {...state, activeGenre: action.genre};
    case ActionType.GetFilms:
    {
      if (action.genre === 'All genres'){
        return {...state, films: initialState.films};
      }
      return {...state, films: initialState.films.filter((film) => film.genre === action.genre)};
    }
    case ActionType.UpdateFilmCards:
      return {...state, renderedFilmCardsCount: action.renderedFilmCardsCount};
    case ActionType.ResetScreen:
      return {...initialState};
    default:
      return state;
  }
};

export {reducer};
