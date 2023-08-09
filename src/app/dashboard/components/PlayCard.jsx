import { Box, Card, CardMedia, Typography } from "@mui/material";

export const PlayCard = ({ track }) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      sx={{
        height: 600,
        borderRadius: "10px",
        backgroundColor: "#FEFEFE",
      }}
    >
      <Card
        sx={{
          width: "400px",
          borderRadius: "16px",
          backgroundColor: "#FFFFFF",
        }}
      >
        <Box
          sx={{
            p: "2rem",
            display: "flex",
            flexDirection: "column",
          }}
          alignItems="center"
          justifyContent="center"
        >
          <CardMedia
            component="img"
            sx={{ width: 200, borderRadius: "50%" }}
            image={track.album.imageUrl}
            alt="Live from space album cover"
          />

          <Typography
            variant="h3"
            align="center"
            sx={{ my: "1rem", fontWeight: "bold" }}
          >
            {track.name}
          </Typography>
          {track.artists.map((item) => (
            <Typography key={item.id} variant="h3">
              {item.name}
            </Typography>
          ))}

          <Box sx={{ my: "1rem" }}>
            {track.previewUrl && (
              <audio controls="controls">
                <source src={track.previewUrl} type="audio/mpeg" />
              </audio>
            )}
          </Box>
        </Box>
      </Card>
    </Box>
  );
};
