
import { useState } from 'react';
import {Film} from '../../types/films';
import FilmCard from '../film-card/film-card';
import ShowMoreButton from '../show-more-button/show-more-button';

type FilmsListProps = {
  films: Film[],
  genre: string,
  renderedFilmCardsCount: number,
  updateFilmCards: (renderedFilmCardsCount: number) => void;
}


function FilmsList({films, genre, renderedFilmCardsCount, updateFilmCards}: FilmsListProps) :JSX.Element{
  const [activePlayer, setActivePlayer] = useState(0);
  const filmsCount = films.length;
  let filteredFilms = [];

  if (genre === 'All genres'){
    filteredFilms = films;
  }
  else{
    filteredFilms = films.filter((film) => film.genre === genre);
  }

  return(
    <div>
      <div className="catalog__films-list">
        {
          filteredFilms.slice(0, renderedFilmCardsCount).map((film) =>
            (<FilmCard film = {film} key={film.id} onPlayMouseOver = {() => setActivePlayer(activePlayer === film.id ? -1 : film.id)} onPlayMouseOut={() => setActivePlayer(-1)}/>))
        }
      </div>
      {
        renderedFilmCardsCount < filmsCount ? <ShowMoreButton filmsCount={filmsCount} renderedFilmCardsCount={renderedFilmCardsCount} updateFilmCards={updateFilmCards}/> : ''
      }
    </div>
  );
}

export default FilmsList;
