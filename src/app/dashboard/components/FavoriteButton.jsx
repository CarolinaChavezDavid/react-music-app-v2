import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addFavorites, removeFavorite } from "../../state/favoritesTracksSlice";
import "./DashboardStyle.css";

export const FavoriteButton = ({ track }) => {
  const { favoriteTracks } = useSelector((state) => state.favorites);
  const dispatch = useDispatch();

  const handleToogle = () => {
    favoriteTracks.find((trackSaved) => trackSaved.id === track.id)
      ? dispatch(removeFavorite(track.id))
      : dispatch(addFavorites(track));
  };

  return (
    <Box>
      <FontAwesomeIcon
        icon={faHeart}
        onClick={handleToogle}
        className={
          "Heart" +
          (favoriteTracks.length > 0 &&
          favoriteTracks.find((trackSaved) => trackSaved.id === track.id)
            ? " isFavorite"
            : "")
        }
        style={{ fontSize: "2rem" }}
      />
    </Box>
  );
};
