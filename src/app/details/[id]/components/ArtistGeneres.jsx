import styled from "@emotion/styled";
import { Card, Grid, Paper, Typography } from "@mui/material";

export const ArtistGeneres = (generes) => {
  console.log("generes", generes);
  const gradientColors = [
    {
      c1: "#80FFDB",
      c2: "#7400B8",
    },
    {
      c1: "#3D62E6",
      c2: "#EE3EC9",
    },
    {
      c1: "#3D62E6",
      c2: "#121640",
    },
    {
      c1: "#00C4CC",
      c2: "#D0E1FA",
    },
    {
      c1: "#7900FF",
      c2: "#D0E1FA",
    },
  ];

  const CustomCard = styled(Card)(({ c1, c2 }) => ({
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    padding: "20px",
    zIndex: 1,
    borderRadius: "2rem",
    background: `linear-gradient(90deg, ${c1}, ${c2})`,
  }));

  return (
    <Paper
      elevation={0}
      sx={{ width: "400px", backgroundColor: "transparent" }}
    >
      <Grid container spacing={4}>
        {generes.generes.map((item, index) => (
          <Grid key={index} item>
            <CustomCard
              c1={gradientColors[index].c1}
              c2={gradientColors[index].c2}
            >
              <Typography
                style={{
                  fontWeight: "bold",
                  fontSize: "25px",
                  color: "#F2F2F2",
                }}
              >
                {item}
              </Typography>
            </CustomCard>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};
