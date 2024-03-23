const SearchResults = ({
  trackList,
  setTrackList,
  playlist,
  setPlaylist,
  handleAddPlaylist,
}) => {
  return (
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
  );
};

export default SearchResults;
