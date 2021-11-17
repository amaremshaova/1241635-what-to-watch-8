import {ActionType, UpdateGenreAction, GetFilmsAction, ResetScreenAction, UpdateFilmCardsAction} from '../types/action';


export const getFilms = (genre: string): GetFilmsAction => ({
  type: ActionType.GetFilms,
  genre:genre,
});

export const updateGenre = (genre: string): UpdateGenreAction => ({
  type: ActionType.UpdateGenre,
  genre: genre,
});

export const resetScreen = (): ResetScreenAction => ({
  type: ActionType.ResetScreen,
});

export const updateFilmCards = (renderedFilmCardsCount: number): UpdateFilmCardsAction => ({
  type: ActionType.UpdateFilmCards,
  renderedFilmCardsCount: renderedFilmCardsCount,
});

