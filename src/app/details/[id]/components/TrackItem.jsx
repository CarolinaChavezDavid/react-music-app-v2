import styled from "@emotion/styled";
import { Grid, Paper, Typography } from "@mui/material";
import { convertMstoMin } from "../../../helpers/functions/convertMstoMin";
import { AudioPlayer } from "./AudioPlayer";
export const TrackItem = (track) => {
  const CustomTypography = styled(Typography)(() => ({
    fontSize: 18,
    color: "#0B1147",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  }));

  return (
    <Paper
      elevation={0}
      alignItems="center"
      justifyContent="center"
      sx={{
        minHeight: 80,
        p: "1rem",
        bgcolor: "#F8F9FA",
        borderRadius: "1rem",
      }}
    >
      <Grid container>
        <Grid item xs={4}>
          <CustomTypography sx={{ fontWeight: "bold" }}>
            🎵 {track.track.trackName}
          </CustomTypography>
        </Grid>
        <Grid item xs={3}>
          <CustomTypography>{track.track.albumName}</CustomTypography>
        </Grid>
        <Grid item xs={2}>
          <CustomTypography>{track.track.releaseDate}</CustomTypography>
        </Grid>
        <Grid item xs={2}>
          <CustomTypography>
            {convertMstoMin(track.track.duration)}
          </CustomTypography>
        </Grid>
        <Grid item xs={1}>
          <AudioPlayer
            audioSrc={track.track.previewUrl}
            isAvailable={track.track.previewUrl ? true : false}
          />
        </Grid>
      </Grid>
    </Paper>
  );
};
