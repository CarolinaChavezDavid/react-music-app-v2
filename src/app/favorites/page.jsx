"use client";

import { Container, Divider, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { FavoriteListHeader } from "./components/FavoriteListHeader";
import { TrackComponent } from "./components/TrackComponent";

export default function Page() {
  const { favoriteTracks } = useSelector((state) => state.favorites);
  return (
    <Container maxWidth="xl" sx={{ p: "100px 0 250px, 0", mt: "2rem" }}>
      <Typography
        variant="h2"
        sx={{ m: "10px 0 3px 0", fontWeight: "bold" }}
        style={{}}
      >
        💗 Favorite tracks
      </Typography>
      <FavoriteListHeader />
      <Divider variant="middle" sx={{ mb: "1rem" }} />

      {favoriteTracks.length > 0 &&
        favoriteTracks.map((track) => (
          <TrackComponent key={track.id} track={track} />
        ))}
    </Container>
  );
}
