import "./Movie.css";
import { Link } from "react-router-dom";

const Movie = ({ movie, user_id, users, setUsers }) => {
  let index;

  const movieInUser = () => {
    if (user_id != "undefined") {
      let user = users.find((user) => user.id == user_id);
      index = users.indexOf(user);
      let isMovieExist = users[index].movies.indexOf(movie);
      if (isMovieExist != -1) {
        return true;
      } else {
        return false;
      }
    }
    else {
      return
    }
  };

  const rent_return = () => {
    if (user_id != "undefined") {
      let newUsers = [...users];
      if (movieInUser()) {
        let movieIndex = newUsers[index].movies.indexOf(movie);
        newUsers[index].movies.splice(movieIndex, 1);
        newUsers[index].budget += 3;
        setUsers(newUsers);
      } else {
        newUsers[index].movies.push(movie);
        newUsers[index].budget -= 3;
        setUsers(newUsers);
      }
    }
    else return
  };

  return (
    <div>
      <div className="rent" onClick={rent_return}>
        {movieInUser() ? "-" : "+"}
      </div>
      <Link to={`/${user_id}/catalog/${movie.id}`}>
        <div className="image">
          <img src={movie.img} />
        </div>
      </Link>
    </div>
  );
};

export default Movie;
