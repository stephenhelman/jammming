import { useState, useEffect } from "react";
import Header from "./Header";
import Layout from "./Layout";
import SearchBar from "./SearchBar";

function App() {
  const [trackList, setTrackList] = useState([
    {
      title: "Song 1",
      artist: "Artist 1",
    },
    {
      title: "Song 2",
      artist: "Artist 2",
    },
    {
      title: "Song 3",
      artist: "Artist 3",
    },
    {
      title: "Song 4",
      artist: "Artist 4",
    },
    {
      title: "Song 5",
      artist: "Artist 5",
    },
  ]);
  return (
    <>
      <Header />
      <main>
        <SearchBar />
        <Layout trackList={trackList} setTrackList={setTrackList} />
      </main>
    </>
  );
}

export default App;
