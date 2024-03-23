import Playlist from "./Playlist";
import SearchResults from "./SearchResults";

const Layout = ({
  trackList,
  setTrackList,
  playlist,
  setPlaylist,
  handleAddPlaylist,
}) => {
  return (
    <div className='layout'>
      <ul className='searchResults'>
        {trackList.map((track) => (
          <li className='song' key={track.id}>
            <div>
              <p className='title'>{track.title}</p>
              <p className='artist'>{track.artist}</p>
            </div>
            <button onClick={() => handleAddPlaylist(track.id)}>+</button>
          </li>
        ))}
      </ul>
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
    </div>
  );
};

export default Layout;
