import {Film} from '../../types/films';
import {useHistory} from 'react-router-dom';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';
import VideoPlayer from '../video-player/video-player';
import { useState } from 'react';
//import VideoPlayer from '../video-player/video-player';

type FilmCardProps = {
  film: Film,
  onPlayMouseOver: () => void;
  onPlayMouseOut: () => void;
}


function FilmCard({film, onPlayMouseOver, onPlayMouseOut}: FilmCardProps): JSX.Element {
  const [isPlaying, setPlaying] = useState(false);

  const history = useHistory();
  return (
    <article className="small-film-card catalog__films-card" key={film.id} onClick={() => history.push(AppRoute.Film)} onMouseOver={onPlayMouseOver} onMouseOut={onPlayMouseOut}>
      <div className="small-film-card__image" onMouseOver={()=> setPlaying(true)} onMouseOut={()=> setPlaying(false)}>
        <VideoPlayer noSound={false} isPlaying={isPlaying} src={film.previewVideoLink} srcPoster={film.previewImage} />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={AppRoute.Film} onClick={() => history.push(AppRoute.Film)}>{film.name}
        </Link>
      </h3>
    </article>
  );
}


export default FilmCard;
