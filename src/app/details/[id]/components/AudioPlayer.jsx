import {
  faBan,
  faCirclePause,
  faCirclePlay,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container } from "@mui/material";
import { useEffect, useRef, useState } from "react";

export const AudioPlayer = ({ audioSrc, isAvailable }) => {
  console.log("audio", audioSrc);
  const audioRef = useRef();
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, audioRef]);

  const getIcon = () => {
    if (isAvailable) {
      return isPlaying ? faCirclePause : faCirclePlay;
    } else {
      return faBan;
    }
  };
  return (
    <Container>
      <FontAwesomeIcon
        icon={getIcon()}
        onClick={() => setIsPlaying(!isPlaying)}
        style={{ fontSize: "2rem", color: "#121640" }}
      />
      <audio ref={audioRef}>
        <source src={audioSrc} type="audio/mpeg" />
      </audio>
    </Container>
  );
};
