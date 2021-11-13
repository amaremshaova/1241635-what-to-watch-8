
import {Films, FilmType} from '../../types/films';
import FilmCard from '../film-card/film-card';

type FilmsListProps = {
  films: Films
}

function FilmsList({films}: FilmsListProps) :JSX.Element{
  //const [activeFilm, setActiveFilm] = useState(0);
  return(
    <div className="catalog__films-list">
      {
        films.map((film : FilmType) =>
          <FilmCard film = {film} key={film.id} />)
      }
    </div>
  );
}

export default FilmsList;
