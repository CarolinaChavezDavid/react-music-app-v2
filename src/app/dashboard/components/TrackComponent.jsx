import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, CardMedia, Grid } from "@mui/material";
import { convertMstoMin } from "../../helpers/functions/convertMstoMin";
import { IndexText, SubtitleText } from "../../styles/fontStyles";
import { FavoriteButton } from "./FavoriteButton";

export const TrackComponent = ({ track, index }) => {
  return (
    <Card
      sx={{
        padding: "1rem",
        m: "1rem",
        boxShadow: "0px 0px 20px 0px rgba(0,0,0,0.1)",
      }}
      elevation={0}
    >
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={2}>
          <TitleTrack track={track} index={index} />
        </Grid>
        <Grid item xs={5}>
          <IndexText>{track.name}</IndexText>
        </Grid>

        <Grid item xs={3}>
          <SubtitleText>{track.artists[0].name}</SubtitleText>
        </Grid>

        <Grid item xs={1}>
          <SubtitleText variant="h4">
            {convertMstoMin(track.duration)}
          </SubtitleText>
        </Grid>

        <Grid item xs={1}>
          <FavoriteButton track={track} />
        </Grid>
      </Grid>
    </Card>
  );
};

const getCompleteNumber = (number) => {
  if (number < 10) {
    return "0" + number;
  } else {
    return number;
  }
};

export const TitleTrack = ({ track, index }) => {
  return (
    <Grid container direction="row" spacing={16}>
      <Grid item>
        <IndexText>{getCompleteNumber(index + 1)}</IndexText>
      </Grid>
      <Grid item>
        <CardMedia
          component="img"
          sx={{ width: 50, borderRadius: 2 }}
          image={track.album.imageUrl}
          alt="Live from space album cover"
        />
      </Grid>
      <Grid item>
        <FontAwesomeIcon
          icon={faCaretRight}
          style={{ fontSize: "2rem", color: "#6c757d" }}
        />
      </Grid>
    </Grid>
  );
};
