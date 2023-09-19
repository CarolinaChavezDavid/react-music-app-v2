"use client";
import {
  Box,
  Container,
  Grid,
  InputBase,
  Paper,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { countriesListId } from "../api/countriesListId";
import { TrackCard } from "../dashboard/components/TrackCard";
import { updateCountryTracksList } from "../state/services/thunks";

export default function Page() {
  const countryParameters = countriesListId;
  const dispatch = useDispatch();

  const { countryTracks } = useSelector((state) => state.countryTracks);

  const [country, setCountry] = useState(countriesListId[0]);
  const [query, setQuery] = useState("");

  const sum = (caro1, caro2) => {
    console.log(`el resultado es: ${caro1 + caro2}`);
  };

  const updateCountryInfo = (countryInfo) => {
    setCountry(countryInfo);
    dispatch(updateCountryTracksList(country.playListID));
  };
  const title = `${country.countryImage} Top 50 ${country.countryName}`;

  return (
    <Container maxWidth="xl">
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

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          mt: "2rem",
          justifyContent: "center",
        }}
      >
        {countryParameters.map((item) => (
          <Paper
            key={item.country}
            elevation={0}
            onClick={() => updateCountryInfo(item)}
            style={{ backgroundColor: "transparent" }}
          >
            <Typography variant="h1" sx={{ mx: "1rem", cursor: "pointer" }}>
              {item.countryImage}
            </Typography>
          </Paper>
        ))}
      </Box>
      {countryTracks.length > 1 && (
        <Typography variant="h2" sx={{ mb: 3, fontWeight: "bold" }}>
          {title}
        </Typography>
      )}

      <Grid container sx={{ mt: 10 }}>
        {countryTracks.length > 1 &&
          countryTracks
            .filter((track) => track.name.toLowerCase().includes(query))
            .map((item) => (
              <Grid
                item
                display="flex"
                key={item.id}
                sm={6}
                md={3}
                sx={{ mb: "2rem" }}
              >
                <TrackCard track={item} />
              </Grid>
            ))}
      </Grid>
    </Container>
  );
}
