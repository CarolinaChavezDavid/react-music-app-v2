"use client";
import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import useArtistTopTracks from "../../hooks/useArtistTopTracks";
import { ArtistGeneres } from "./components/ArtistGeneres";
import { ArtistTopTracks } from "./components/ArtistTopTracks";
import { DetailHeader } from "./components/DetailHeader";
import { DetailListHeader } from "./components/DetailListHeader";
import { PlayCard } from "./components/PlayCard";

export default function Page() {
  const track = useSelector((state) => state.track);
  const { artistTrackList, isLoading } = useArtistTopTracks(
    track.artists[0].id
  );

  if (isLoading) {
    return (
      <Container
        style={{ flex: 1, justifyContent: "center", alignContent: "center" }}
      ></Container>
    );
  }

  return (
    <Container maxWidth="xl">
      {artistTrackList && <DetailHeader artist={artistTrackList} />}
      <Grid container spacing={15} sx={{ mt: "10px" }}>
        <Grid item xs={4}>
          <Box>
            <PlayCard key={track.id} track={track} />

            <Typography variant="h2" sx={{ mb: 3, my: 10, fontWeight: "bold" }}>
              Genres
            </Typography>
            <ArtistGeneres generes={artistTrackList.genres} />
          </Box>
        </Grid>
        <Grid item xs={8}>
          <Box>
            <Typography variant="h2" sx={{ mb: 10, fontWeight: "bold" }}>
              Top tracks
            </Typography>
            <DetailListHeader />
            <Divider
              variant="middle"
              style={{ color: "#F5F5FA" }}
              sx={{ mb: 5 }}
            />
            <ArtistTopTracks tracks={artistTrackList.tracks} />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
