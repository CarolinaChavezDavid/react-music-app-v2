import { Card, Grid, Typography } from "@mui/material";
import Link from "next/link";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useDispatch } from "react-redux";
import { setTrackDetailInformation } from "../../state/services/thunks";
import { FavoriteButton } from "./FavoriteButton";

export const TrackCard = ({ track }) => {
  const dispatch = useDispatch();

  const handelUpdate = () => {
    dispatch(setTrackDetailInformation(track));
  };

  return (
    <Card
      className=" animate__animated animate__fadeInLeft"
      sx={{
        width: 300,
        backgroundColor: "#121640",
        boxShadow: "0px 13px 48px 14px rgba(0,0,0,0.1)",
        "&:hover": {
          backgroundColor: "primary.main",
          opacity: [0.9, 0.8, 0.7],
        },
      }}
      onClick={handelUpdate}
    >
      <Link
        href={{
          pathname: `details/${track.id}`,
        }}
        passHref
      >
        <LazyLoadImage
          width={300}
          height={300}
          src={track.album.imageUrl}
          effect="blur"
          alt="Live from space album cover"
        />
      </Link>

      <Grid container direction="row" sx={{ p: "1rem" }}>
        <Grid item container direction="column" xs={10}>
          <Grid item>
            <Typography fontWeight="bold" variant="h3">
              {track.name}
            </Typography>
          </Grid>

          <Grid item>
            {track.artists.length > 0 && (
              <Typography variant="h6">{track.artists[0].name}</Typography>
            )}
          </Grid>
        </Grid>

        <Grid item container xs={2} alignItems="center" justifyContent="center">
          <Grid item>
            <FavoriteButton track={track} />
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
};
