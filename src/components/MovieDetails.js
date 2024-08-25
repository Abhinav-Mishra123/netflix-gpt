import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useMovieDeatils } from "../hooks/useMovieDeatils";

const MovieDetails = () => {
  const { id } = useParams();
  useMovieDeatils(id)

  const movie = useSelector((store) => store.movies.movieDetail);

  if (!movie) return <div>Loading...</div>;

  return  (
    <div className="movie-details-container">
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
    </div>
  );
};

export default MovieDetails;
