import { useDispatch, useSelector } from 'react-redux';
import { fetchFilmAction } from '../../store/api-actions';
import { useRef, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { getFilm } from '../../store/film-data/selectors';
import { ChangeEvent } from 'react';
import { convertTimeElapsed } from '../../utils/utils';
import { ClipLoader } from 'react-spinners';


function Player() : JSX.Element{
  const [isLoading, setLoading] = useState(true);
  const [isPlaying, setPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const timeElapsedRef = useRef<HTMLDivElement | null>(null);

  const dispatch = useDispatch();

  const film = useSelector(getFilm);

  const {id} = useParams<{id?: string}>();
  const filmId = Number(id);

  const history = useHistory();

  useEffect(()=>{
    dispatch(fetchFilmAction(filmId));
  }, [dispatch, filmId]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.onloadeddata = () => {
        setLoading(false);
      };

    }
  }, [videoRef]);


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

  return(
    <div className="player">
      {isLoading ? <ClipLoader/> : ''}
      <video
        onLoadedData = {()=> setLoading(false)}
        src = {film?.videoLink}
        ref={videoRef}
        className="player__video"
        autoPlay
        muted
        onTimeUpdate = {({target}: ChangeEvent<HTMLVideoElement>)=>
          setProgress(Math.floor(target.currentTime) / (Math.floor(target.duration) / 100))}
      >
      </video>
      <button type="button" className="player__exit" onClick={()=>{setPlaying(false); history.goBack();}}>Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={progress} max="100"></progress>
            <div className="player__toggler" style={{left: `${progress}%`}}>Toggler</div>
          </div>
          <div className="player__time-value" ref={timeElapsedRef}>
            {videoRef.current ? convertTimeElapsed(Math.floor(videoRef.current?.duration-videoRef.current?.currentTime)) : 0}
          </div>
        </div>

        <div className="player__controls-row">
          {isPlaying ?
            <button type="button" className="player__play" onClick={()=>setPlaying(false)}>
              <svg viewBox="0 0 14 21" width="14" height="21">
                <use href="#pause"></use>
              </svg>
              <span>Pause</span>
            </button>
            :
            <button type="button" className="player__play" onClick={()=> setPlaying(true)} >
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
