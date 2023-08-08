import { Container, Grid, Typography } from "@mui/material";

export const DetailListHeader = () => {
  return (
    <Container maxWidth="xl" sx={{ display: "flex", p: "1rem" }}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={4}>
          <Typography style={{ fontWeight: "bold" }} variant="h3">
            Track
          </Typography>
        </Grid>

        <Grid item xs={3}>
          <Typography style={{ fontWeight: "bold" }} variant="h3">
            Album
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography style={{ fontWeight: "bold" }} variant="h3">
            Date added
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography style={{ fontWeight: "bold" }} variant="h3">
            Duration
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};
