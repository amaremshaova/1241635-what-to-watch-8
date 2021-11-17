import {useEffect, useRef} from 'react';

type VideoPlayerProps = {
  noSound: boolean;
  isPlaying: boolean;
  src: string;
  srcPoster: string;
}

function VideoPlayer({noSound, isPlaying, src, srcPoster}: VideoPlayerProps): JSX.Element {

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
      <video src={src} ref={videoRef} className="player__video" poster={isPlaying ? '' : srcPoster}></video>
    </div>
  );
}

export default VideoPlayer;
