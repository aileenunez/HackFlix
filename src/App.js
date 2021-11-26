import './index.css';
import {useEffect, useState} from 'react'
import axios from 'axios';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'

//Import Components 
import Catalogue from './Catalogue';
import MovieDetails from './MovieDetails';


const App = () => {
  const [ movies, setMovies ] = useState([])

  useEffect(function(){
    axios({
      url: "https://api.themoviedb.org/3/discover/movie",
      params: {
        api_key: '246f4b71ba951e44a5e07d9c383a94fa',
        language: 'en-US',
        sort_by: 'popularity.desc',
        include_adult: 'false',
        include_video: 'false',
        page: 1,
        primary_release_year: 1997,
      }
    }).then((response) => {
      setMovies(response.data.results)
    })
  }, [])

  return (
    <BrowserRouter>
    <div className="wrapper">
      <header>
        <Link to="/" style={{textDecoration: 'none'}}>
        <h1>HackFlix</h1>
        </Link>
      
      </header>
      
        <Routes>
          <Route path="/" element={<Catalogue movies={movies}/>}></Route>
          <Route path="movie/:movieID" element={<MovieDetails/>}></Route>
          </Routes>

    </div>
    </BrowserRouter>
  );
}

export default App;
