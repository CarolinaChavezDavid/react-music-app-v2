import { getCredentials } from "./Credentials";

const playListEndPoint =
  "https://api.spotify.com/v1/playlists/37i9dQZEVXbMDoHDwVN2tF";

export const getTopRatedList = async () => {
  const token = getCredentials();
  const topListParameters = {
    method: "GET",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: "Bearer " + token,
    },
  };
  try {
    const response = await fetch(playListEndPoint, topListParameters)
      .then((result) => result.json())
      .then((data) => console.log(data));
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
