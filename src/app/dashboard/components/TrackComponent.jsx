import { Card, CardMedia, Grid, Typography } from "@mui/material";
import { convertMstoMin } from "../../helpers/functions/convertMstoMin";
import { FavoriteButton } from "./FavoriteButton";

export const TrackComponent = ({ track, index }) => {
  return (
    <Card sx={{ padding: "1rem", m: "10px" }} elevation={0}>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={1}>
          <Typography>{index + 1}</Typography>
        </Grid>

        <Grid item xs={2} justifyContent="center" alignItems="center">
          <CardMedia
            component="img"
            sx={{ width: 40 }}
            image={track.album.imageUrl}
            alt="Live from space album cover"
          />
        </Grid>

        <Grid item xs={3}>
          <Typography>{track.name}</Typography>
        </Grid>

        <Grid item xs={3}>
          <Typography>{track.artists[0].name}</Typography>
        </Grid>

        <Grid itemxs={1}>
          <Typography variant="h4">{convertMstoMin(track.duration)}</Typography>
        </Grid>

        <Grid item xs={2}>
          <FavoriteButton track={track} />
        </Grid>
      </Grid>
    </Card>
  );
};
