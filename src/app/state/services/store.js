import { configureStore } from "@reduxjs/toolkit";
import { countryTracksSlice } from "../countryTracksSlice";
import { favoriteTracksSlice } from "../favoritesTracksSlice";
import { trackSlice } from "../trackSlice";

export const store = configureStore({
  reducer: {
    track: trackSlice.reducer,
    favorites: favoriteTracksSlice.reducer,
    countryTracks: countryTracksSlice.reducer,
  },
});
