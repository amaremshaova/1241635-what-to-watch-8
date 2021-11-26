import {Film} from '../../types/films';
import FilmCard from '../film-card/film-card';
import {useState} from 'react';

type FilmsListProps = {
  films: Film[],
  renderedFilmCardsCount: number,
}


function FilmsList({films, renderedFilmCardsCount = films.length}: FilmsListProps) :JSX.Element{

  const [activePlayerId, setActivePlayer] = useState(0);

  return(
    <div className="catalog__films-list">
      {
        films.slice(0, renderedFilmCardsCount).map((film) =>
          (<FilmCard film = {film} key={film.id} activePlayerId = {activePlayerId} onPlayVideo={setActivePlayer}/>))
      }
    </div>
  );
}

export default FilmsList;
