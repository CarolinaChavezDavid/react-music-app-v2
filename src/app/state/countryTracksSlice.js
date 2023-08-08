import { createSlice } from "@reduxjs/toolkit";
import { getTrackList } from "../api/getTopTracksAPI";

const colombianTracks = async () => {
  try {
    const result = await getTrackList("37i9dQZEVXbOa2lmxNORXQ");
    return result;
  } catch (error) {
    console.log("error", error);
    return [];
  }
};

const initialState = {
  countryTracks: colombianTracks(),
};

export const countryTracksSlice = createSlice({
  name: "countryTracks",
  initialState,
  reducers: {
    updateCountryList: (state, { payload }) => {
      state.countryTracks = payload;
    },
  },
});

export const { updateCountryList } = countryTracksSlice.actions;

export default countryTracksSlice.reducer;
