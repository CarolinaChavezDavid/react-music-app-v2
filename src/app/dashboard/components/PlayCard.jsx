import {
  Box,
  Card,
  CardMedia,
  Grid,
  LinearProgress,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { PlayerComponent } from "./PlayerComponent";

export const PlayCard = () => {
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const { playingTrack } = useSelector((state) => state.playingTrack);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current?.pause();
      setIsPlaying(false);
    } else {
      audioRef.current?.play();
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    const seconds = Math.floor(audioPlayer.current.duration);
    setDuration(seconds);
    progressBar.current.max = seconds;
  }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState]);

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      sx={{
        height: 600,
        borderRadius: "10px",
        backgroundColor: "#FEFEFE",
        boxShadow: "0px 0px 20px 0px rgba(0,0,0,0.1)",
      }}
    >
      <Box alignItems="center" justifyContent="center">
        <Card
          sx={{
            width: "400px",
            borderRadius: "16px",
            backgroundColor: "#FFFFFF",
            boxShadow: "0px 13px 48px 14px rgba(0,0,0,0.1)",
          }}
        >
          <Box
            sx={{
              p: "2rem",
              display: "flex",
              flexDirection: "column",
            }}
            alignItems="center"
            justifyContent="center"
          >
            <CardMedia
              component="img"
              sx={{
                width: 200,
                borderRadius: "50%",
              }}
              image={playingTrack.album.imageUrl}
              alt="Live from space album cover"
            />

            <Typography variant="h3" align="center" sx={{ fontWeight: "bold" }}>
              {playingTrack.name}
            </Typography>
            {playingTrack.artists.map((item) => (
              <Typography key={item.id} variant="h3">
                {item.name}
              </Typography>
            ))}

            <Box sx={{ my: "1rem" }}>
              {playingTrack.previewUrl && (
                <audio controls="controls">
                  <source src={track.previewUrl} type="audio/mpeg" />
                </audio>
              )}
            </Box>
            <Box sx={{ width: "100%" }}>
              <LinearProgress variant="determinate" value={89} />
            </Box>
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Grid item>
                <Typography>0:00</Typography>
              </Grid>
              <Grid item>
                <Typography>0:30</Typography>
              </Grid>
            </Grid>
          </Box>
        </Card>

        <PlayerComponent />
      </Box>
    </Box>
  );
};
