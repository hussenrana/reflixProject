import { useParams } from "react-router-dom";
import "./Details.css";

const Details = ({ movieDetails }) => {
  const { movie_id } = useParams();
  const _movieDetails = () => {
    return movieDetails(movie_id);
  };
  let movie = _movieDetails();
  console.log(movie);

  return (
    <div className="details">
      <div className="title">
        {movie.title} ({movie.year})
      </div>
      <div className="movie_image">
        <img src={movie.img}/>
      </div>
      <div className="description">{movie.descrShort}</div>
    </div>
  );
};

export default Details;
