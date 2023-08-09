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
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { useSpotifyTopList } from "../hooks/useSpotifyTopList";
import { PlayCard } from "./components/PlayCard";
import { TrackCardV2 } from "./components/TrackCardV2";
import { TrackComponent } from "./components/TrackComponent";

export const DashboardPage = () => {
  const { isLoading, topTrackList } = useSpotifyTopList(
    "37i9dQZEVXbMDoHDwVN2tF"
  );

  const [query, setQuery] = useState("");
  console.log("data", topTrackList);

  return (
    !isLoading && (
      <Container maxWidth={false} sx={{ padding: "2rem, 2rem, 2rem, 2rem" }}>
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
          Top Chart
        </Typography>

        <Box
          sx={{
            mb: 2,
            display: "flex",
            flexDirection: "row",
            overflowX: "scroll",
            overflowY: "hidden",
          }}
        >
          {topTrackList
            .filter((track) => track.name.toLowerCase().includes(query))
            .map((item) => (
              <TrackCardV2 track={item} />
            ))}
        </Box>

        <Grid container sx={{ flexGrow: "1" }} spacing={4}>
          <Grid item xs={7}>
            <Typography
              variant="h2"
              sx={{ m: "10px 0 10px 0", fontWeight: "bold" }}
            >
              Top Global
            </Typography>
            <Box
              sx={{
                height: 600,
                mb: 2,
                display: "flex",
                flexDirection: "column",
                overflowX: "hidden",
                overflowY: "scroll",
              }}
            >
              <Box
                sx={{
                  flex: 1,
                  overflowY: "scroll",
                }}
              >
                {topTrackList
                  .filter((track) => track.name.toLowerCase().includes(query))
                  .map((item, index) => (
                    <TrackComponent
                      track={item}
                      index={index}
                      sx={{ padding: "1rem" }}
                    />
                  ))}
              </Box>
            </Box>
          </Grid>

          <Grid item xs={5}>
            <Typography
              variant="h2"
              sx={{ m: "10px 0 10px 0", fontWeight: "bold" }}
            >
              Now playing
            </Typography>
            <PlayCard track={topTrackList[0]} />
          </Grid>
        </Grid>
      </Container>
    )
  );
};
