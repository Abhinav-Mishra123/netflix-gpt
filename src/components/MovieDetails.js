import React from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useMovieDeatils } from "../hooks/useMovieDeatils";
import { IMG_CDN_URL } from "../utils/constants";

const MovieDetails = () => {
  const { id } = useParams();
  useMovieDeatils(id);

  const movie = useSelector((store) => store.movies.movieDetail);
  console.log("moviedetails", movie)

  if (!movie) return <div>Loading...</div>;

  return (
  
  <> <div className="bg-gray-900 text-white">
  <div className="container mx-auto py-8 px-4 md:px-8">
    {/* Movie Poster and Basic Info */}
    <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-8">
      <div className="w-full md:w-1/3">
        <img
          src={IMG_CDN_URL + movie.poster_path}
          alt={movie.title}
          className="rounded-lg shadow-lg"
        />
      </div>
      <div className="w-full md:w-2/3 mt-6 md:mt-0">
        <h1 className="text-4xl font-bold mb-4">{movie.title}</h1>
        <p className="text-xl mb-4">{movie.tagline}</p>
        <div className="mb-4">
          <span className="font-bold">Release Date: </span>
          {movie.release_date}
        </div>
        <div className="mb-4">
          <span className="font-bold">Runtime: </span>
          {movie.runtime} minutes
        </div>
        <div className="mb-4">
          <span className="font-bold">Genres: </span>
          {movie.genres.map((genre) => genre.name).join(", ")}
        </div>
        <div className="mb-4">
          <span className="font-bold">Vote Average: </span>
          {movie.vote_average} / 10
        </div>
  
        <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Overview</h2>
      <p>{movie.overview}</p>
    </div>

    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Production Companies</h2>
      <div className="flex flex-wrap space-x-4">
        {movie.production_companies.map((company) => (
          <div key={company.id} className="mb-4">
            {company.logo_path ? (
              <img
                src={IMG_CDN_URL + company.logo_path}
                alt={company.name}
                className="w-24 h-auto rounded-md"
              />
            ) : (
              <div>{company.name}</div>
            )}
          </div>
        ))}
      </div>
    </div>
    <Link
          to={"/browse"}
          rel="noopener noreferrer"
          className="bg-red-600 text-white px-4 py-2 mt-4 rounded-md hover:bg-red-700 transition"
        >
           Explore More Movies
        </Link>
      </div>
    </div>


  </div>
</div>
  </>

  );
};

export default MovieDetails;
