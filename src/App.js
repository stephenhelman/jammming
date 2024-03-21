import Header from "./Header";
import Layout from "./Layout";
import SearchBar from "./SearchBar";
import axios from "axios";

function App() {
  return (
    <div className='App'>
      <Header />
      <SearchBar />
      <Layout />
    </div>
  );
}

export default App;
