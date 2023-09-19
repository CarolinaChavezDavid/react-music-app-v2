import { configureStore } from "@reduxjs/toolkit";
import { countryTracksSlice } from "../countryTracksSlice";
import { favoriteTracksSlice } from "../favoritesTracksSlice";
import { playingTrackSlice } from "../playingTrackSlice";
import { trackSlice } from "../trackSlice";

export const store = configureStore({
  reducer: {
    playingTrack: playingTrackSlice.reducer,
    track: trackSlice.reducer,
    favorites: favoriteTracksSlice.reducer,
    countryTracks: countryTracksSlice.reducer,
  },
});
