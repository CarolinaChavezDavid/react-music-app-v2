const CLIENT_ID = "6dc5649b893a4cd2bc212fd773710664";
const CLIENT_SECRET = "e8de0d5f1d3a463398418954f2a777ca";
const API_ENDPOINT = "https://accounts.spotify.com/api/token";

export const getCredentials = async () => {
  const authParameters = {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body:
      "grant_type=client_credentials&client_id=" +
      CLIENT_ID +
      "&client_secret=" +
      CLIENT_SECRET,
  };

  const response = await fetch(API_ENDPOINT, authParameters);
  if (response.ok) {
    const jsonResponse = await response.json();
    return jsonResponse.access_token;
  }
};

export const getTrackList = async (playListsID) => {
  console.log("playLIstId", playListsID);
  const PLAYLIST_ENDPOINT = `https://api.spotify.com/v1/playlists/${playListsID}`;
  const token = await getCredentials();

  const response = await fetch(PLAYLIST_ENDPOINT, {
    method: "GET",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Bearer ${token}`,
    },
  });

  if (response.ok) {
    const jsonResponse = await response.json();
    console.log("response", jsonResponse);
    const finalTracks = jsonResponse.tracks.items.map((item) => ({
      id: item.track.id,
      name: item.track.name,
      album: transformAlbum(item.track.album),
      artists: transFormArtist(item.track.artists),
      duration: item.track.duration_ms,
      previewUrl: item.track.preview_url,
    }));

    return finalTracks;
  }
};

const transformAlbum = (album) => {
  return {
    id: album.id,
    name: album.name,
    albumType: album.album_type,
    artist: transFormArtist(album.artists),
    releaseDate: album.release_date,
    imageUrl: album.images[1].url,
  };
};

const transFormArtist = (artists) => {
  return artists.map((element) => ({
    id: element.id,
    name: element.name,
  }));
};
