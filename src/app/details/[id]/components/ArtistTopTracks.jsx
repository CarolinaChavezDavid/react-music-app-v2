import { Card, Grid } from "@mui/material";
import { TrackItem } from "./TrackItem";

export const ArtistTopTracks = (tracks) => {
  return (
    <Card sx={{ borderRadius: "16px", p: "2rem", backgroundColor: "#121640" }}>
      <Grid container direction="column">
        {tracks.tracks.map((item) => (
          <Grid item sx={{ mb: "2rem" }} key={item.id}>
            <TrackItem track={item} />
          </Grid>
        ))}
      </Grid>
    </Card>
  );
};
