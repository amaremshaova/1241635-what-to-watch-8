import { useDispatch, useSelector } from 'react-redux';
import { getFilmAction } from '../../store/api-actions';
import { useRef, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { APIRoute} from '../../const';
import { convertTimeElapsed } from '../../utils/utils';
import { getFilm } from '../../store/film-data/selectors';


function Player() : JSX.Element{

  const [isLoading, setIsLoading] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const dispatch = useDispatch();

  const [isPlaying, setPlaying] = useState(true);

  const positionFilmId = Number(window.location.pathname.lastIndexOf(':') + 1);
  const filmId = Number(window.location.pathname.substr(positionFilmId));
  dispatch(getFilmAction(filmId));
  const film = useSelector(getFilm);


  useEffect(() => {
    if (videoRef.current !== null){
      videoRef.current.onloadeddata = () => setIsLoading(false);
    }
    return () => {
      if (videoRef.current !== null) {
        videoRef.current.onloadeddata = null;
        videoRef.current = null;
      }
    };
  }, [film.videoLink]);

  useEffect(() => {
    if (videoRef.current === null) {

      return;
    }

    if (videoRef.current !== null && isPlaying) {
      videoRef.current.play();
      return;
    }

    videoRef.current.pause();
  }, [isPlaying]);

  const history = useHistory();

  const timeElapsed = (videoRef.current !== null) ? (Math.floor(videoRef.current.duration) - Math.floor(videoRef.current.currentTime)) : 0;


  return(
    <div className="player">
      <video src={film.videoLink} ref={videoRef} className="player__video" autoPlay muted></video>

      <button type="button" className="player__exit" onClick={()=>{setPlaying(false); history.push(APIRoute.Film + film.id);}}>Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value="30" max="100"></progress>
            <div className="player__toggler" style={{left: '30%'}}>Toggler</div>
          </div>
          <div className="player__time-value">{convertTimeElapsed(timeElapsed)}</div>
        </div>

        <div className="player__controls-row">
          {isPlaying ?
            <button type="button" className="player__play" onClick={()=> setPlaying(false)}  disabled={isLoading}>
              <svg viewBox="0 0 14 21" width="14" height="21">
                <use href="#pause"></use>
              </svg>
              <span>Pause</span>
            </button>
            :
            <button type="button" className="player__play" onClick={()=> setPlaying(true)}  disabled={isLoading}>
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use href="#play-s"></use>
              </svg>
              <span>Play</span>
            </button> }
          <div className="player__name">Transpotting</div>

          <button type="button" className="player__full-screen" onClick = {() =>videoRef.current?.requestFullscreen()}>
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use href="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Player;
