import "./App.css";
import { useState } from "react";
// import Movies from "./Movies/Movies";
import Nav from "./Navbar/Nav";
import Modal from "./Modal/Modal";

function App() {
  const [moviesList, setMoviesList] = useState({});
  const [searchInput, setSearchInput] = useState("");
  const [show, setShow] = useState(false);

  const movieSearch = async () => {
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&t=${searchInput}`
    );

    const data = await response.json();
    setMoviesList(data);
    // console.log(data.Search);
    setShow(true);
  };
  // useEffect(() => {
  //   movieSearch("The Matrix");
  // }, []);

  return (
    <div className="App">
      <Nav movieSearch={movieSearch} setSearchInput={setSearchInput} />
      <Modal setShow={setShow} show={show} moviesList={moviesList} />
      {/* <Movies moviesList={moviesList} /> */}
    </div>
  );
}

export default App;
