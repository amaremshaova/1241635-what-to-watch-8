import {useEffect, useRef} from 'react';

type VideoPlayerProps = {
  isPlaying: boolean;
  src: string;
  srcPoster: string;
}

function VideoPlayer({isPlaying, src, srcPoster}: VideoPlayerProps): JSX.Element {

  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {

    let timer: ReturnType<typeof setTimeout>;
    if (videoRef.current === null) {
      return;
    }

    if (videoRef.current && isPlaying) {
      timer = setTimeout(()=>videoRef.current?.play(), 1000);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [isPlaying, videoRef]);


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
