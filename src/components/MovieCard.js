import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ id, title, posterPath, rating, releaseDate }) => {
  return (
    <div className="movieCard-container relative m-3 cursor-pointer">
    <Link to={`/browse/movie/${id}`}>
      <div className="poster-container w-48 ">
        <img
          src={IMG_CDN_URL + posterPath}
          alt="movie poster"
          className="rounded-sm"
        />
      </div>
      <div className="movie-details relative">
        <p className="movie-name text-white absolute bottom-8 p-2 text-center bg-slate-900 w-full ">{title}</p>
        <div className="movierating flex justify-between items-center my-2 px-1">
          <p className="release-date text-white">{releaseDate}</p>
          <p className="movie-rating text-white">{rating.toFixed(1)}</p>
        </div>
      </div>
      </Link>
    </div>
  );
};

export default MovieCard;
