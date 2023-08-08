import { useEffect, useState } from "react";
import { getArtistTopTracks } from "../api/getArtistTopTracks";

const useArtistTopTracks = (artistID) => {
  const [artistTrackList, setartistTrackList] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  const getList = async () => {
    const response = await getArtistTopTracks(artistID);

    const responseFormatted = transformArtist(response[1], response[0]);

    setartistTrackList(responseFormatted);

    setisLoading(false);
  };

  useEffect(() => {
    getList();
  }, []);

  return { artistTrackList, isLoading };
};

export default useArtistTopTracks;

const transformArtist = (artist, tracks) => {
  console.log("artist", artist);
  console.log("tracks", tracks);

  return {
    artistID: artist.id,
    artistName: artist.name,
    artistImages: artist.images,
    genres: artist.genres,
    popularity: artist.popularity,
    tracks: tracks.tracks.map((item) => transformAlbum(item)),
  };
};

const transformAlbum = (album) => {
  return {
    id: album.id,
    trackName: album.name,
    albumName: album.album.name,
    releaseDate: album.album.release_date,
    duration: album.duration_ms,
    previewUrl: album.preview_url,
  };
};
