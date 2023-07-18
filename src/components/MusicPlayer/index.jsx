import { useRef, useState } from "react";
import musicFile from './music.mp3';
export const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef();

  const toggleMusic = () => {
    const audioElement = audioRef.current;

    if (isPlaying) {
      audioElement.pause();
    } else {
      audioElement.play();
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <div>
      <audio ref={audioRef} src={musicFile} loop autoPlay />
      <button onClick={toggleMusic}>
        {isPlaying ? "Stop Music" : "Play Music"}
      </button>
    </div>
  );
};

