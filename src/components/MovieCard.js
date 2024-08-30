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
    <div className="movieCard-container bg-black relative w-48 min-w-[12rem] cursor-pointer">
      <Link to={`/browse/movie/${id}`}>
        <div className="poster-container h-[300px] overflow-hidden rounded-sm">
          <img
            src={IMG_CDN_URL + posterPath}
            alt="movie poster"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="movie-details mt-2">
          <p className="movie-name text-white text-center text-sm font-semibold">
            {SortTitle(title)}
          </p>
          <div className="movierating flex justify-between items-center my-2">
            <p className="release-date text-gray-400 text-xs">
              {releaseDate}
            </p>
            <p className="movie-rating text-yellow-400 text-sm flex items-center">
              <img
                src={START_ICON}
                width={15}
                height={15}
                alt="Star icon"
                className="mr-1"
              />
              {rating.toFixed(1)}/10
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
