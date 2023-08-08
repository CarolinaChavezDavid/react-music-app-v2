import {
  Box,
  Container,
  Grid,
  InputBase,
  Paper,
  Typography,
} from "@mui/material";
import "animate.css";
import Image from "next/image";
import { useState } from "react";
import { useSpotifyTopList } from "../hooks/useSpotifyTopList";
import { TrackCard } from "./components/TrackCard";

export const DashboardPage = () => {
  const { isLoading, topTrackList } = useSpotifyTopList(
    "37i9dQZEVXbMDoHDwVN2tF"
  );

  const [query, setQuery] = useState("");

  return (
    !isLoading && (
      <Container maxWidth="xl" sx={{ pb: "250px" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignContent: "center",
            mt: "2rem",
          }}
        >
          <Paper
            component="form"
            sx={{
              width: "600px",
              p: "1rem",
              mt: "2rem",
            }}
          >
            <Grid container>
              <Grid item xs={11}>
                <InputBase
                  placeholder="Search your song"
                  onChange={(e) => setQuery(e.target.value)}
                />
              </Grid>
              <Grid item xs={1}>
                <Image
                  width={"30"}
                  height={"30"}
                  src="/images/lupa.png"
                  alt="logo"
                />
              </Grid>
            </Grid>
          </Paper>
        </Box>
        <Typography
          variant="h2"
          sx={{ m: "10px 0 10px 0", fontWeight: "bold" }}
        >
          🌎 Top global
        </Typography>

        <Grid
          container
          sx={{ justifyContent: "center", alignContent: "center" }}
        >
          {topTrackList
            .filter((track) => track.name.toLowerCase().includes(query))
            .map((item) => (
              <Grid
                item
                key={item.id}
                display="flex"
                sm={6}
                md={3}
                sx={{ mb: "2rem" }}
              >
                <TrackCard track={item} />
              </Grid>
            ))}
        </Grid>
      </Container>
    )
  );
};
