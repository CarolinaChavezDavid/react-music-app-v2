import { Grid, Typography } from "@mui/material";
import ImageShadow from "react-image-shadow";
import "react-image-shadow/assets/index.css";

export const TrackCardV2 = ({ track }) => {
  console.log("trackName", track.name);
  return (
    <Grid container direction="column" sx={{ padding: "1rem" }}>
      <Grid item>
        <ImageShadow shadowRadius={20} src={track.album.imageUrl} />
      </Grid>
      <Grid item>
        <Typography variant="h6" sx={{ mt: "2rem" }}>
          {track.name}
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="h6">{track.artists[0].name}</Typography>
      </Grid>
    </Grid>
  );
};
