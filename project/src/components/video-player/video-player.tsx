import {useEffect, useRef} from 'react';

type VideoPlayerProps = {
  isPlaying: boolean;
  src: string;
  srcPoster: string;
}

function VideoPlayer({isPlaying, src, srcPoster}: VideoPlayerProps): JSX.Element {

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


  return (

    <div>
      <video src={isPlaying ? src : ''} ref={videoRef} className="player__video" poster={isPlaying ? '' : srcPoster} muted></video>
    </div>
  );
}

export default VideoPlayer;
