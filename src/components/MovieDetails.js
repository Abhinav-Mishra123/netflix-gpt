import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useMovieDeatils } from "../hooks/useMovieDeatils";
import { IMG_CDN_URL } from "../utils/constants";

const MovieDetails = () => {
  const { id } = useParams();
  useMovieDeatils(id);

  const movie = useSelector((store) => store.movies.movieDetail);

  if (!movie) return <div>Loading...</div>;

  return (
  
  <>
    <div className="movie-details-container">
      <div className="movie-detail-section flex justify-center items-center">
        <div className="movie-detail-left w-2/4 ">
          <img src={IMG_CDN_URL + movie.poster_path} alt={movie.title} width={300} height={100} className="mx-auto" />
        </div>
        <div className="movie-detail-right w-2/4">
          <h1 className="text-3xl font-bold">{movie.title}</h1>
          <p>{movie.overview}</p>
        </div>
      </div>
    </div>
  </>

  );
};

export default MovieDetails;
