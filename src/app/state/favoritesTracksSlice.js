import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favoriteTracks: [],
};

export const favoriteTracksSlice = createSlice({
  name: "favoriteTracksList",
  initialState,
  reducers: {
    addFavorites: (state, { payload }) => {
      const track = {
        id: payload.id,
        name: payload.name,
        album: payload.album,
        artists: payload.artists,
        duration: payload.duration,
        previewUrl: payload.previewUrl,
        isFavorite: true,
      };
      state.favoriteTracks.push(track);
    },

    removeFavorite: (state, { payload }) => {
      state.favoriteTracks = state.favoriteTracks.filter(
        (item) => item.id != payload
      );
    },
  },
});

export const { removeFavorite, addFavorites } = favoriteTracksSlice.actions;

export default favoriteTracksSlice.reducer;
