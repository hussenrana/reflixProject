import { useParams } from "react-router-dom";
import "./Catalog.css";
import { useState } from "react";
import Movie from "../Movie/Movie";

const Catalog = ({ movies, users, setUsers }) => {
  const { user_id } = useParams();
  const [search, setSearch] = useState("");
  const [filteredMovies, setFilteredMovies] = useState([...movies]);
  let user = users.find((user) => user.id == user_id);

  const searchMovie = (event) => {
    setSearch(event.target.value);

    if (event.target.value != "") {
      let copyMovies = [];
      movies.map((movie) => {
        if (movie.title.toLowerCase().includes(event.target.value))
          copyMovies.push(movie);
      });
      setFilteredMovies(copyMovies);
    } else {
      setFilteredMovies([...movies]);
    }
  };

  const renderRentedMovies = () => {
    return (
      <div>
        <div className="label">Rented:</div>
        <div className="movie_grid">
          {user.movies.map((movie) => (
            <Movie
              key={movie.id}
              user_id={user_id}
              movie={movie}
              users={users}
              setUsers={setUsers}
              movies={movies}
            />
          ))}
        </div>
      </div>
    );
  };
  return (
    <div>
      <div className="search_budget">
        <div className="search">
          <input
            type="text"
            placeholder="search"
            value={search}
            onChange={searchMovie}
          />
        </div>
        <div className="budget">budget: ${user ? user.budget : ""}</div>
      </div>
      {user && user.movies.length > 0 ? renderRentedMovies() : ""}
      <div className="label">Catalog:</div>
      <div className="movie_grid">
        {filteredMovies.map((movie) => (
          <Movie
            key={movie.id}
            user_id={user_id}
            movie={movie}
            users={users}
            setUsers={setUsers}
            movies={movies}
          />
        ))}
      </div>
    </div>
  );
};

export default Catalog;
