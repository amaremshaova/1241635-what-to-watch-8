
import { useState } from 'react';
import {Film} from '../../types/films';
import FilmCard from '../film-card/film-card';
import ShowMoreButton from '../show-more-button/show-more-button';

type FilmsListProps = {
  films: Film[],
  renderedFilmCardsCount: number,
  updateFilmCards: (renderedFilmCardsCount: number) => void;
}


function FilmsList({films, renderedFilmCardsCount, updateFilmCards}: FilmsListProps) :JSX.Element{
  const [activePlayer, setActivePlayer] = useState(0);
  const filmsCount = films.length;

  return(
    <div>
      <div className="catalog__films-list">
        {
          films.slice(0, renderedFilmCardsCount).map((film : Film) =>
            <FilmCard film = {film} key={film.id} onPlayMouseOver = {() => setActivePlayer(activePlayer === film.id ? -1 : film.id)} onPlayMouseOut={() => setActivePlayer(-1)}/>)
        }
      </div>
      {
        renderedFilmCardsCount < filmsCount ? <ShowMoreButton filmsCount={filmsCount} renderedFilmCardsCount={renderedFilmCardsCount} updateFilmCards={updateFilmCards}/> : ''
      }
    </div>
  );
}

export default FilmsList;
