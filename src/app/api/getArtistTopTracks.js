import { getAPIToken } from "./getAPIToken";

export const getArtist = async (artisID) => {
  console.log("artistID", artisID);
  const ARTIST_ENDPOINT = `https://api.spotify.com/v1/artists/${artisID}`;
  const token = await getAPIToken();
  console.log("token", token);

  const response = await fetch(ARTIST_ENDPOINT, {
    method: "GET",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Bearer ${token}`,
    },
  });

  console.log("response", response);

  if (response.ok) {
    const jsonResponse = await response.json();
    console.log("jsonResponse", jsonResponse);
    return jsonResponse;
  }
};

export const getArtistTopTracks = async (artisID) => {
  const ARTIST_INFO_ENDPOINT = `https://api.spotify.com/v1/artists/${artisID}/top-tracks?market=US`;
  const ARTIST_TRACKS_ENDPOINT = `https://api.spotify.com/v1/artists/${artisID}`;

  const urls = [ARTIST_INFO_ENDPOINT, ARTIST_TRACKS_ENDPOINT];
  const token = await getAPIToken();

  const request = urls.map((item) =>
    fetch(item, {
      method: "GET",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Bearer ${token}`,
      },
    })
  );

  const responses = await Promise.all(request);
  const errors = responses.filter((response) => !response.ok);

  const json = responses.map((response) => response.json());
  const data = await Promise.all(json);

  return data;
};
