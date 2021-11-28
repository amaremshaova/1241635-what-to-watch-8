import {Film} from '../../types/films';
import {Link} from 'react-router-dom';
import {APIRoute} from '../../const';
import VideoPlayer from '../video-player/video-player';
import { useHistory} from 'react-router-dom';

type FilmCardProps = {
  film: Film,
  activePlayerId: number,
  onPlayVideo: (id: number) => void;
}

function FilmCard({film, activePlayerId, onPlayVideo}: FilmCardProps): JSX.Element {
  const history = useHistory();

  const handleMouseEnter = () => {
    onPlayVideo(film.id);
  };

  const handleMouseLeave = () => {
    onPlayVideo(-1);
  };

  const handleRedirect = () => {
    history.push(APIRoute.Film + film.id);
  };

  return (
    <article
      className="small-film-card catalog__films-card"
      key={film.id}
      onClick ={handleRedirect}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="small-film-card__image">
        <VideoPlayer
          isPlaying={film.id === activePlayerId}
          src={film.previewVideoLink}
          srcPoster={film.previewImage}
        />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`${APIRoute.Film}${film.id}`}>{film.name}
        </Link>
      </h3>
    </article>
  );
}

export default FilmCard;
