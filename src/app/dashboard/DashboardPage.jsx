import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Container, Grid, InputBase, Typography } from "@mui/material";
import "animate.css";
import { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { useSpotifyTopList } from "../hooks/useSpotifyTopList";
import { CustomDrawerComponent } from "./components/CustomDrawerComponent";
import { PlayCard } from "./components/PlayCard";
import { TrackCardV2 } from "./components/TrackCardV2";
import { TrackComponent } from "./components/TrackComponent";

export const DashboardPage = () => {
  const { isLoading, topTrackList } = useSpotifyTopList(
    "37i9dQZEVXbMDoHDwVN2tF"
  );

  const drawerWidth = 340;
  const [query, setQuery] = useState("");
  console.log("data", topTrackList);

  return (
    !isLoading && (
      <Container
        maxWidth={false}
        sx={{ padding: "2rem, 2rem, 2rem, 2rem", display: "flex" }}
      >
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          <CustomDrawerComponent
            photo={"/images/lupa.png"}
            name={"carolina"}
            email={"scchavezd@gmail.com"}
          />
        </Box>

        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: "2rem",
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <Box
            component="form"
            sx={{
              width: 500,
              border: 1,
              borderColor: "#DEE2E6",
              borderRadius: 20,
              p: "1rem",
              mt: "1rem",
            }}
          >
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              style={{ fontSize: 20, color: "#DEE2E6" }}
            />

            <InputBase
              placeholder="Search your song"
              onChange={(e) => setQuery(e.target.value)}
            />
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
                      <TrackComponent track={item} index={index} />
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
              <PlayCard />
            </Grid>
          </Grid>
        </Box>
      </Container>
    )
  );
};
