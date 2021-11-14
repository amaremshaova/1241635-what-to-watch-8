import {FilmType} from '../../types/films';
import {useHistory} from 'react-router-dom';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';

type FilmCardProps = {
  film: FilmType,
}


function FilmCard({film}: FilmCardProps): JSX.Element {

  const history = useHistory();
  return (
    <article className="small-film-card catalog__films-card" key={film.id} onClick={() => history.push(AppRoute.Film)} /*onMouseOver={()=>setActiveFilm(film.id)}*/>
      <div className="small-film-card__image">
        <img src={film.previewImage} alt={film.name} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={AppRoute.Film} onClick={() => history.push(AppRoute.Film)}>{film.name}
        </Link>
      </h3>
    </article>
  );
}


export default FilmCard;
