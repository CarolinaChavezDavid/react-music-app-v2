import { Typography } from "@mui/material";
import ImageBlurShadow from "react-native-image-blur-shadow";

export const TrackCardV2 = ({ track }) => {
  return (
    <Box>
      <ImageBlurShadow
        style={{}}
        source={require("public/images/appLogo.png")}
        imageWidth={220}
        imageHeight={220}
        imageBorderRadius={22}
        shadowOffset={38}
        shadowBlurRadius={48}
        shadowBackgroundColor={"#ffffff"}
      />
      <Typography variant="h6">{track.name}</Typography>
      <Typography variant="h6">{track.artists[0].name}</Typography>
    </Box>
  );
};
