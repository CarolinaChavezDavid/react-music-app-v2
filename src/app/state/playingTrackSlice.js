import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
  name: "",
  album: "",
  artists: [],
  duration: "",
  previewUrl: "",
  isFavorite: false,
};

export const playingTrackSlice = createSlice({
  name: "currentPlayingTrack",
  initialState,
  reducers: {
    setCurrentTrack: (state, { payload }) => {
      state.id = payload.id;
      state.name = payload.name;
      state.album = payload.album;
      state.artists = payload.artists;
      state.duration = payload.duration;
      state.previewUrl = payload.previewUrl;
      state.isFavorite = payload.isFavorite;
    },
  },
});

export const { setCurrentTrack } = playingTrackSlice.actions;

export default playingTrackSlice.reducer;
