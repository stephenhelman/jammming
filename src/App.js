import { useState } from "react";
import { v4 as uuid } from "uuid";
import axios from "axios";
import apiRequest from "./apiRequest";

function App() {
  const [search, setSearch] = useState("");
  const [songList, setSongList] = useState([]);
  const [playlistSongs, setPlaylistSongs] = useState([]);

  const searchSongs = async () => {
    try {
      const response = await fetch("http://localhost:3500/songs");
      if (!response.ok) throw Error("Did not receive expected data");
      const songs = await response.json();
      setSongList(songs);
    } catch (error) {
      console.log(error);
    }
  };

  const savePlaylist = async () => {
    const postOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(playlistSongs),
    };
    const result = await apiRequest(
      "http://localhost:3500/playlist",
      postOptions
    );
  };

  const handleAddPlaylist = (id) => {
    const songToAdd = songList.find((song) => song.id === id);
    const newSong = {
      id: uuid(),
      title: songToAdd.title,
      artist: songToAdd.artist,
    };
    setPlaylistSongs((s) => [...s, newSong]);
  };

  const handleRemoveFromPlaylist = (id) => {
    const newPlaylist = playlistSongs.filter((song) => song.id !== id);
    setPlaylistSongs(newPlaylist);
  };

  return (
    <>
      <header className='header'>
        <h1>
          Ja<span className='specialLetters'>mmm</span>ing
        </h1>
      </header>
      <main>
        <div className='searchBar'>
          <input
            type='text'
            placeholder='Search for a song'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type='submit' onClick={searchSongs}>
            Search
          </button>
        </div>
        <div className='layout'>
          <div className='searchResultsContainer'>
            <h2>Results</h2>
            <ul className='searchResults'>
              {songList.length
                ? songList.map((song) => (
                    <li className='song' key={song.id}>
                      <div>
                        <p className='title'>{song.title}</p>
                        <p className='artist'>{song.artist}</p>
                      </div>
                      <button onClick={() => handleAddPlaylist(song.id)}>
                        +
                      </button>
                    </li>
                  ))
                : null}
            </ul>
          </div>
          <div className='playlistContainer'>
            <input type='text' placeholder='Name your playlist' />
            {playlistSongs.length ? (
              <ul className='playlist'>
                {playlistSongs.map((song) => (
                  <li key={song.id} className='song'>
                    <div>
                      <p className='title'>{song.title}</p>
                      <p className='artist'>{song.artist}</p>
                    </div>
                    <button onClick={() => handleRemoveFromPlaylist(song.id)}>
                      -
                    </button>
                  </li>
                ))}
              </ul>
            ) : null}
            <button type='submit' onClick={savePlaylist}>
              Save your playlist!
            </button>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
