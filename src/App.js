import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Landing from './components/Landing/Landing';
import { useState } from 'react';
import { users as usersData } from './constants/data'
import { movies as moviesData} from './constants/data'
import Catalog from './components/Catalog/Catalog';
import Details from './components/Details/Details';


function App() {

  const [users, setUsers] = useState([...usersData])
  const [movies, setMovies] = useState([...moviesData])
  const movieDetails = (movie_id) => {
    return movies.find((movie) => movie.id == movie_id)
  }

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' element={<Landing users={users} />} />
          <Route path="/:user_id/catalog" element={<Catalog movies={movies} users={users} setUsers={setUsers} />} />
          <Route path='/:user_id/catalog/:movie_id?' element={<Details movieDetails={movieDetails}/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
