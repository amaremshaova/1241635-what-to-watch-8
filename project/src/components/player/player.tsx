import { ConnectedProps } from 'react-redux';

import { getFilmAction } from '../../store/api-actions';
import { ThunkAppDispatch } from '../../types/action';
import { connect } from 'react-redux';
import { State } from '../../types/state';

import { useRef, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { AppRoute } from '../../const';

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

  onGetFilm(1);

  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current === null) {
      return;
    }

    if (isPlaying) {
      videoRef.current.play();
      return;
    }

    videoRef.current.pause();
  }, [isPlaying]);

  const history = useHistory();


  return(
    <div className="player">
      <video src={activeFilm.videoLink} ref={videoRef} className="player__video" autoPlay></video>

      <button type="button" className="player__exit" onClick={()=>{setPlaying(false); history.push(AppRoute.Film + activeFilm.id);}}>Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value="30" max="100"></progress>
            <div className="player__toggler" style={{left: '30%'}}>Toggler</div>
          </div>
          <div className="player__time-value">1:30:29</div>
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
