import Song from "./Song";

const SearchResults = () => {
  return (
    <section className='searchResults'>
      <h2>Results</h2>
      <ul>
        <Song />
      </ul>
    </section>
  );
};

export default SearchResults;
