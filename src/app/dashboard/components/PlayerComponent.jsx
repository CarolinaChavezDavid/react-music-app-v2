import {
  faBackward,
  faForward,
  faPlay,
  faRepeat,
  faShuffle,
  faStop,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Grid } from "@mui/material";
import { useState } from "react";

export const PlayerComponent = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const getIcon = () => {
    return isPlaying ? faPlay : faStop;
  };
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      sx={{ my: "0.5rem" }}
      alignItems="center"
      spacing={15}
    >
      <Grid item justify="center">
        <FontAwesomeIcon
          icon={faShuffle}
          style={{ fontSize: "2rem", color: "#CED4DA" }}
        />
      </Grid>
      <Grid item>
        <FontAwesomeIcon
          icon={faBackward}
          style={{ fontSize: "2rem", color: "#CED4DA" }}
        />
      </Grid>
      <Grid item>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{
            width: "4rem",
            height: "4rem",
            borderRadius: "50%",
            backgroundColor: "#ffffff",
            boxShadow: "0px 0px 20px 0px rgba(0,0,0,0.1)",
          }}
        >
          <FontAwesomeIcon
            icon={getIcon()}
            onClick={() => setIsPlaying(!isPlaying)}
            style={{ fontSize: "2rem", color: "#072ac8", padding: "0.5rem" }}
          />
        </Box>
      </Grid>
      <Grid item>
        <FontAwesomeIcon
          icon={faForward}
          style={{ fontSize: "2rem", color: "#CED4DA" }}
        />
      </Grid>
      <Grid item>
        <FontAwesomeIcon
          icon={faRepeat}
          style={{ fontSize: "2rem", color: "#CED4DA" }}
        />
      </Grid>
    </Grid>
  );
};
