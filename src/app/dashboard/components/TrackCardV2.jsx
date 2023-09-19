import { Box } from "@mui/material";
import ImageShadow from "react-image-shadow";
import "react-image-shadow/assets/index.css";
import { IndexText, SubtitleText } from "../../styles/fontStyles";

export const TrackCardV2 = ({ track }) => {
  console.log("trackName", track.name);

  const handelUpdate = () => {
    dispatch(setPlayingTrack(track));
  };

  return (
    <Box sx={{ width: 300, m: "1rem" }} onClick={handelUpdate}>
      <ImageShadow shadowRadius={20} src={track.album.imageUrl} />
      <IndexText sx={{ mt: "2rem" }}>{track.name}</IndexText>
      <SubtitleText>{track.artists[0].name}</SubtitleText>
    </Box>
  );
};
