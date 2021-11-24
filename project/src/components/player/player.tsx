import { ConnectedProps } from 'react-redux';

import { getFilmAction } from '../../store/api-actions';
import { ThunkAppDispatch } from '../../types/action';
import { connect } from 'react-redux';
import { State } from '../../types/state';

import { useRef, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { AppRoute } from '../../const';
import { convertTimeElapsed } from '../../utils/utils';

const mapStateToProps = ({activeFilm}: State) => ({
  activeFilm,
});

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  onGetFilm(id: number) {
    dispatch(getFilmAction(id));
  },
});


const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;


function Player(props: PropsFromRedux) : JSX.Element{
  const {activeFilm, onGetFilm} = props;

  const [isPlaying, setPlaying] = useState(true);

  const positionFilmId = Number(window.location.pathname.lastIndexOf(':') + 1);
  const filmId = Number(window.location.pathname.substr(positionFilmId));
  onGetFilm(filmId);

  const videoRef = useRef<HTMLVideoElement | null>(null);

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
      <video src={activeFilm.videoLink} ref={videoRef} className="player__video" autoPlay muted></video>

      <button type="button" className="player__exit" onClick={()=>{setPlaying(false); history.push(AppRoute.Film + activeFilm.id);}}>Exit</button>

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
            <button type="button" className="player__play" onClick={()=> setPlaying(false)}>
              <svg viewBox="0 0 14 21" width="14" height="21">
                <use href="#pause"></use>
              </svg>
              <span>Pause</span>
            </button>
            :
            <button type="button" className="player__play" onClick={()=> setPlaying(true)}>
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

export {Player};
export default connector(Player);
