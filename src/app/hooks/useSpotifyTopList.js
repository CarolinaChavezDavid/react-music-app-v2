"use client";

import { useState } from "react";

export const useSpotifyTopList = async () => {
  const playListEndPoint =
    "https://api.spotify.com/v1/playlists/37i9dQZEVXbMDoHDwVN2tF";
  const clientId = "6dc5649b893a4cd2bc212fd773710664";
  const clientSecret = "e8de0d5f1d3a463398418954f2a777ca";
  const apiEndpoint = "https://accounts.spotify.com/api/token";

  const authParameters = {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body:
      "grant_type=client_credentials&client_id=" +
      clientId +
      "&client_secret=" +
      clientSecret,
  };

  const [token, setToken] = useState();
  const [topTrackList, setTopTrackList] = useState();

  await fetch(apiEndpoint, authParameters)
    .then((result) => result.json())
    .then((data) => setToken(data.access_token));

  console.log("token" + token);

  const topListParameters = {
    method: "GET",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: "Bearer " + token,
    },
  };

  try {
    var resp = [];
    await fetch(playListEndPoint, topListParameters)
      .then((result) => result.json())
      .then((data) => (resp = data.tracks.items));

    resp.map((item) => ({
      id: item.id,
      name: item.name,
      album: item.album,
      artist: item.artists,
      durationn: item.duration_ms,
    }));
    //console.log("respuesta" + resp.map((item) =>({item.name})));
    setTopTrackList(resp);
  } catch (error) {
    console.log(error);
  }

  return { topTrackList };
};
