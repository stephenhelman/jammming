const SearchBar = () => {
  return (
    <form onSubmit={(e) => e.preventDefault()} className='searchBar'>
      <input type='text' placeholder='Search for a song' />
      <button type='submit'>Search</button>
    </form>
  );
};

export default SearchBar;
