import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title, movies}) => {
  if(!movies) return (
    <>
      <h1>Loading</h1>
    </>
  )
  return (
    <div className='movieList-container overflow-hidden no-scrollbar'>
    <h1 className='text-white text-xl font-bold mb-3 px-3'>{title}</h1>
    <div className='Movie-card flex overflow-x-scroll w-full justify-start items-start pb-4 no-scrollbar'>
    {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} id={movie.id} title={movie.title} rating={movie.vote_average} releaseDate={movie.release_date} />
          ))}
    </div>
    </div>
  )
}

export default MovieList