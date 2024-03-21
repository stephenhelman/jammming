import Playlist from "./Playlist";
import SearchResults from "./SearchResults";

const Layout = () => {
  return (
    <div className='layout'>
      <SearchResults />
      <Playlist />
    </div>
  );
};

export default Layout;
