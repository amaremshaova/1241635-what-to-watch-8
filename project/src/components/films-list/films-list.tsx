import {Film} from '../../types/films';
import FilmCard from '../film-card/film-card';

type FilmsListProps = {
  films: Film[],
  renderedFilmCardsCount: number,
}


function FilmsList({films, renderedFilmCardsCount}: FilmsListProps) :JSX.Element{
  return(
    <div>
      <div className="catalog__films-list">
        {
          films.slice(0, renderedFilmCardsCount).map((film) =>
            (<FilmCard film = {film} key={film.id} />))
        }
      </div>
    </div>
  );
}

export default FilmsList;
