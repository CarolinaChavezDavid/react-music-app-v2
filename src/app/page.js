"use client";

import "@fortawesome/fontawesome-svg-core/styles.css";
import { TrackCard } from "./dashboard/components/TrackCard";

import { config } from "@fortawesome/fontawesome-svg-core";
import { useSpotifyTopList } from "./hooks/useSpotifyTopList";
config.autoAddCss = false;

export default function Home() {
  const { topTrackList } = useSpotifyTopList();
  console.log(JSON.stringify(topTrackList));

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <TrackCard />
    </main>
  );
}
