import SearchBox from "./components/SearchBox";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import React, {useEffect, useState} from "react";
import Movies from "./components/Movies";
import './App.css'

const App = () => {

  const [movies, setMovies] = useState([])
  const [searchValue, setSearchValue] = useState("")
  
  const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=fbdfb49a`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if(responseJson.Search){
      setMovies(responseJson.Search);
    }

  
  }

  useEffect(()=> {
    getMovieRequest(searchValue )
  }, [searchValue])


  return (
    <div className="App">
      <Navbar />
      <HeroSection/>
      <SearchBox searchValue = {searchValue} setSearchValue={setSearchValue} />
      <div className="movie-row">
      <Movies movies={movies} />
      </div>
      <div className="movie-row">
      <Movies movies={movies} />
      </div>
     
    </div>
  );
}

export default App;
