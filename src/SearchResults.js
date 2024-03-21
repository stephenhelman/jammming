import Song from "./Song";

const SearchResults = ({ trackList, setTrackList }) => {
  return (
    <section className='searchResults'>
      <h2>Results</h2>
      <ul>
        {trackList.map((track, index) => {
          return (
            <li key={index} className='song'>
              <div>
                <p className='title'>{track.title}</p>
                <p className='artist'>{track.artist}</p>
              </div>
              <button>+</button>
            </li>
          );
        })}
        {console.log(trackList[1].title)}
      </ul>
    </section>
  );
};

export default SearchResults;
