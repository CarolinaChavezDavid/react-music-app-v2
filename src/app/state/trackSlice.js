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

export const trackSlice = createSlice({
  name: "track",
  initialState,
  reducers: {
    setTrack: (state, { payload }) => {
      state.id = payload.id;
      state.name = payload.name;
      state.album = payload.album;
      state.artists = payload.artists;
      state.duration = payload.duration;
      state.previewUrl = payload.previewUrl;
      state.isFavorite = false;
    },

    setIsFavorite: (state) => {
      state.isFavorite = !state.isFavorite;
    },
  },
});

export const { setTrack, setIsFavorite } = trackSlice.actions;

export default trackSlice.reducer;
