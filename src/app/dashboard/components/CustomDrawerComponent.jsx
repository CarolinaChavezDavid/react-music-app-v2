import { Box, CardMedia, Drawer } from "@mui/material";
import { IndexText, SubtitleText } from "../../styles/fontStyles";

export const CustomDrawerComponent = ({ photo, email, name }) => {
  const drawerWidth = 340;
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: "border-box" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          p: "1rem",
          mt: "2rem",
        }}
      >
        <CardMedia
          component="img"
          sx={{
            width: 100,
            borderRadius: "50%",
          }}
          image={photo}
          alt="Live from space album cover"
        />
        <IndexText>{name}</IndexText>

        <SubtitleText>{email}</SubtitleText>
      </Box>
    </Drawer>
  );
};
