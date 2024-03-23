import { useState } from "react";
import { v4 as uuid } from "uuid";

function App() {
  const [songList, setSongList] = useState([
    {
      id: 1,
      title: "Song 1",
      artist: "Artist 1",
    },
    {
      id: 2,
      title: "Song 2",
      artist: "Artist 2",
    },
    {
      id: 3,
      title: "Song 3",
      artist: "Artist 3",
    },
    {
      id: 4,
      title: "Song 4",
      artist: "Artist 4",
    },
    {
      id: 5,
      title: "Song 5",
      artist: "Artist 5",
    },
  ]);
  const [playlistSongs, setPlaylistSongs] = useState([]);

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
        <form onSubmit={(e) => e.preventDefault()} className='searchBar'>
          <input type='text' placeholder='Search for a song' />
          <button type='submit'>Search</button>
        </form>
        <div className='layout'>
          <ul className='searchResults'>
            {songList.map((song) => (
              <li className='song' key={song.id}>
                <div>
                  <p className='title'>{song.title}</p>
                  <p className='artist'>{song.artist}</p>
                </div>
                <button onClick={() => handleAddPlaylist(song.id)}>+</button>
              </li>
            ))}
          </ul>
          <div className='playlistBuilder'>
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
            <button type='submit'>Save your playlist!</button>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
