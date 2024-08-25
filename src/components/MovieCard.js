import React from "react";
import { Link } from "react-router-dom";
import { IMG_CDN_URL, START_ICON } from "../utils/constants";

const MovieCard = ({ id, title, posterPath, rating, releaseDate }) => {
  const SortTitle = (title) => {
    if (title.length > 20) {
      return `${title.slice(0, 20)}...`;
    }
    return title;
  };

  if (!posterPath) return null;
  return (
    <div className="movieCard-container bg-black relative m-3 cursor-pointer">
      <Link to={`/browse/movie/${id}`}>
        <div className="poster-container w-48 h-200">
          <img
            src={IMG_CDN_URL + posterPath}
            alt="movie poster"
            className="rounded-sm w-full h-200"
          />
        </div>
        <div className="movie-details relative">
          <p className="movie-name text-white absolute bottom-8 p-2 text-center bg-slate-900 w-full ">
            {SortTitle(title)}
          </p>
          <div className="movierating flex justify-between items-center my-2 px-1">
            <p className="release-date text-white">{releaseDate}</p>
            <p className="movie-rating text-white flex justify-center items-center">
              <img src={START_ICON} width={15} height={15} alt="Star icon" />
              {rating.toFixed(1)}/10
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
