import styled from "@emotion/styled";
import { Avatar, Card, Grid, Typography } from "@mui/material";
import { FavoriteButton } from "../../dashboard/components/FavoriteButton";
import { AudioPlayer } from "../../details/[id]/components/AudioPlayer";
import { convertMstoMin } from "../../helpers/functions/convertMstoMin";

export const TrackText = styled(Typography)({
  fontWeight: "bold",
  color: "#0B1147",
});

export const TrackComponent = ({ track }) => {
  return (
    <Card
      sx={{
        display: "flex",
        p: 5,
        bgcolor: "#F8F9FA",
        borderRadius: "20rem",
        my: 5,
      }}
    >
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={1}>
          <Avatar
            sx={{ width: "60px", height: "60px" }}
            src={track.album.imageUrl}
          />
        </Grid>
        <Grid item xs={2}>
          <TrackText variant="h4">{track.name}</TrackText>
        </Grid>

        <Grid item xs={3}>
          <TrackText variant="h4">{track.album.name}</TrackText>
        </Grid>
        <Grid item xs={2}>
          <TrackText variant="h4">{track.album.releaseDate}</TrackText>
        </Grid>
        <Grid item xs={2}>
          <TrackText variant="h4">{convertMstoMin(track.duration)}</TrackText>
        </Grid>
        <Grid item xs={1}>
          <FavoriteButton track={track} />
        </Grid>
        {track.previewUrl && (
          <Grid item xs={1}>
            <AudioPlayer audioSrc={track.previewUrl} />
          </Grid>
        )}
      </Grid>
    </Card>
  );
};
