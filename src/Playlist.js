const Playlist = (playlist, setPlaylist) => {
  return (
    <form className='playlist'>
      <input type='text' placeholder='Name your Playlist' />
      {playlist.length ? (
        <ul>
          {playlist.map((track) => (
            <li key={track.id} className='song'>
              <div>
                <p className='song'>{track.title}</p>
                <p className='artist'>{track.artist}</p>
                <button>-</button>
              </div>
            </li>
          ))}
        </ul>
      ) : null}
      {console.log(playlist.length)}
      <button type='submit'>Save to spotify</button>
    </form>
  );
};

export default Playlist;
