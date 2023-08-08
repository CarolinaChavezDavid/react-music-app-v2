import { getTrackList } from "../../api/getTopTracksAPI";
import { updateCountryList } from "../countryTracksSlice";
import { addTrack, removeTrack } from "../favoritesTracksSlice";
import { setIsFavorite, setTrack } from "../trackSlice";

export const setTrackDetailInformation = (track) => {
  return async (dispatch) => {
    dispatch(setTrack(track));
  };
};

export const setTrackIsFavorite = () => {
  return async (dispatch) => {
    dispatch(setIsFavorite());
  };
};

export const updateFavoriteList = (track) => {
  return async (dispatch) => {
    console.log("receive " + track.isFavorite);
    track.isFavorite ? dispatch(removeTrack(track)) : dispatch(addTrack(track));
  };
};

export const updateCountryTracksList = (playListID) => {
  return async (dispatch) => {
    const response = await getTrackList(playListID);
    dispatch(updateCountryList(response));
  };
};
