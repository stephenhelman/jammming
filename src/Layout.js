import Playlist from "./Playlist";
import SearchResults from "./SearchResults";

const Layout = ({ trackList, setTrackList }) => {
  return (
    <div className='layout'>
      <SearchResults trackList={trackList} setTrackList={setTrackList} />
      <Playlist />
    </div>
  );
};

export default Layout;
