import {Film} from '../../types/films';
import {useHistory} from 'react-router-dom';
import {Link} from 'react-router-dom';
import {APIRoute, AppRoute} from '../../const';
import VideoPlayer from '../video-player/video-player';
import { useState } from 'react';
//import VideoPlayer from '../video-player/video-player';

type FilmCardProps = {
  film: Film,
}


function FilmCard({film}: FilmCardProps): JSX.Element {
  const [isPlaying, setPlaying] = useState(false);
  let timer : NodeJS.Timeout;

  const onMouseEnter = () => {
    timer = setTimeout(() => {
      setPlaying(true);}, 1000);
  };

  const onMouseLeave = () => {
    setPlaying(false);
    clearTimeout(timer);
  };

  const history = useHistory();
  return (
    <article className="small-film-card catalog__films-card" key={film.id} onClick={() => {history.push(`${APIRoute.Film}:${film.id}`); }} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <div className="small-film-card__image">
        <VideoPlayer isPlaying={isPlaying} src={film.previewVideoLink} srcPoster={film.previewImage} />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`${APIRoute.Film}:${film.id}`} onClick={() => history.push(AppRoute.Film)}>{film.name}
        </Link>
      </h3>
    </article>
  );
}


export default FilmCard;
