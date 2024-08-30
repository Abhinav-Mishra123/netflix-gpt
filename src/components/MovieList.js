import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies)
    return (
      <>
        <h1>Loading</h1>
      </>
    );

  return (
    <div className="movieList-container px-4 sm:px-8">
      <h1 className="text-white text-lg sm:text-xl font-bold mb-2 sm:mb-3">{title}</h1>
      <div className="Movie-card flex overflow-x-auto space-x-4 pb-4 no-scrollbar">
        {movies?.map((movie) => (
          <MovieCard
            key={movie.id}
            posterPath={movie.poster_path}
            id={movie.id}
            title={movie.title}
            rating={movie.vote_average}
            releaseDate={movie.release_date}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
