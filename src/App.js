function App() {
  return (
    <div className='App'>
      <header>
        Ja<span>mmm</span>ing
      </header>
      <form onSubmit={(e) => e.preventDefault()}>
        <input type='text' placeholder='Search for a song' />
        <button type='submit'>Search</button>
      </form>
      <div>
        <h2>Results</h2>
        <ul>
          <li>Song Title</li>
        </ul>
      </div>
      <form>
        <input type='text' placeholder='Name your Playlist' />
        <ul>
          <li>Song title</li>
        </ul>
        <button type='submit'>Save to spotify</button>
      </form>
    </div>
  );
}

export default App;
