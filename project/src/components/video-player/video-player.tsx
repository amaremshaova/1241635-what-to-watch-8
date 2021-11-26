import {useEffect, useRef} from 'react';

type VideoPlayerProps = {
  isPlaying: boolean;
  src: string;
  srcPoster: string;
}

function VideoPlayer({isPlaying, src, srcPoster}: VideoPlayerProps): JSX.Element {

  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {

    let timer;
    if (videoRef.current === null) {
      return;
    }

    if (isPlaying) {
      timer = setTimeout(()=>videoRef.current?.play(), 1000);

      return;
    }

    videoRef.current.pause();
    clearTimeout(timer);
  }, [isPlaying]);


  return (

    <div>
      <video
        src={isPlaying ? src : ''}
        ref={videoRef}
        className="player__video"
        poster={isPlaying ? '' : srcPoster}
        muted
      >

      </video>
    </div>
  );
}

export default VideoPlayer;
