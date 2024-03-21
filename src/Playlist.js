import Song from "./Song";

const Playlist = () => {
  return (
    <form>
      <input type='text' placeholder='Name your Playlist' />
      <ul>
        <Song />
      </ul>
      <button type='submit'>Save to spotify</button>
    </form>
  );
};

export default Playlist;
