import React from 'react'
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const GptMovieSuggestions = () => {
  const searchMovieList = useSelector((store) => store.gpt.movie);
  console.log("SearchMovieList from redux store", searchMovieList);
  return (
    <div className='movieList bg-white'>
    {searchMovieList && searchMovieList.length > 0 ? (
      <MovieList title="Search Results" movies={searchMovieList} />
    ) : (
      <p className='text-white text-xl'>No movies found. Try searching for something else.</p>
    )}
  </div>
  )
}

export default GptMovieSuggestions