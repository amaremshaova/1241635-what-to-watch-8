import {Film} from '../../types/films';
import {useHistory} from 'react-router-dom';
import {Link} from 'react-router-dom';
import {APIRoute, AppRoute} from '../../const';
import VideoPlayer from '../video-player/video-player';

type FilmCardProps = {
  film: Film,
  activePlayerId: number,
  onPlayVideo: (id: number) => void;
}


function FilmCard({film, activePlayerId, onPlayVideo}: FilmCardProps): JSX.Element {
  const onMouseEnter = () => {
    onPlayVideo(film.id);
  };

  const onMouseLeave = () => {
    onPlayVideo(-1);
  };

  const history = useHistory();
  return (
    <Link className="small-film-card catalog__films-card" key={film.id} to = {`${APIRoute.Film}:${film.id}`} onMouseEnter={()=>onMouseEnter()} onMouseLeave={()=>onMouseLeave()}>
      <div className="small-film-card__image">
        <VideoPlayer isPlaying={film.id === activePlayerId} src={film.previewVideoLink} srcPoster={film.previewImage} />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`${APIRoute.Film}:${film.id}`} onClick={() => history.push(AppRoute.Film)}>{film.name}
        </Link>
      </h3>
    </Link>
  );
}


export default FilmCard;
