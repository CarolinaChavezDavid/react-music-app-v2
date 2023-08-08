import styled from "@emotion/styled";
import { Box, Card, Grid, Rating, Typography } from "@mui/material";
import { useState } from "react";
import { ColorExtractor } from "react-color-extractor";
import ImageShadow from "react-image-shadow";

export const DetailHeader = (artist) => {
  console.log("carolina", artist);
  const poster = artist.artist.artistImages[0].url;

  const [colors, setColors] = useState([]);

  const handleColorsExtracted = (colorPalette) => {
    setColors(colorPalette);
  };

  const CustomCardContent = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "center",
    width: "100%",
    padding: "50px",
    zIndex: 1,
    minHeight: 300,
    background: `linear-gradient(90deg, ${colors[0]}, ${colors[5]})`,
  }));

  const CustomRatingBar = styled(Rating)(() => ({
    "& .MuiRating-iconEmpty": {
      color: "#F2F2F2",
    },
    "& .MuiRating-iconFilled": {
      color: "#ffd60a",
    },
  }));

  return (
    <Card
      sx={{
        height: 300,
        borderRadius: "16px",
      }}
    >
      <ColorExtractor src={poster} getColors={handleColorsExtracted} />
      <Grid container direction="row" style={{ width: "100%" }}>
        <Grid item xs={2}>
          <ImageShadow src={poster} sx={{ height: 300, width: 300 }} />
        </Grid>
        <Grid item xs={10} justify="flex-end">
          <CustomCardContent>
            <Typography
              sx={{ fontSize: 100, fontWeight: "bold", color: "#F2F2F2" }}
            >
              {artist.artist.artistName}
            </Typography>
            <CustomRatingBar
              readOnly
              size="large"
              name="customized-10"
              defaultValue={artist.artist.popularity / 10}
              max={10}
            />
          </CustomCardContent>
        </Grid>
      </Grid>
    </Card>
  );
};
