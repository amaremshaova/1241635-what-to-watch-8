export enum ActionType {
  UpdateGenre = 'UPDATE_GENRE',
  GetFilms = 'GET_FILMS',
  ResetScreen = 'RESET_SCREEN',
  UpdateFilmCards = 'UPDATE_FILM_CARDS'
}

export type UpdateGenreAction = {
  type: ActionType.UpdateGenre;
  genre: string;
};

export type GetFilmsAction = {
  type: ActionType.GetFilms;
  genre: string;
};


export type ResetScreenAction = {
  type: ActionType.ResetScreen;
}

export type UpdateFilmCardsAction = {
  type: ActionType.UpdateFilmCards;
  renderedFilmCardsCount: number;
}


export type Actions = UpdateGenreAction | GetFilmsAction | ResetScreenAction | UpdateFilmCardsAction;
