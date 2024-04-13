import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
    const movies = useSelector(state => state.movies)
  return (
    <div className='-mt-60 z-20 relative'>
      <MovieList title={"Now Playing Movies"} movies={movies.nowPlayingMovies} />
      <MovieList title={"Top Rated Movies"} movies={movies.topRatedMovies} />
      <MovieList title={"Popular Movies"} movies={movies.popularMovies} />
      <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies} />
      <MovieList title={"Horror Movies"} movies={movies.topRatedMovies} />
    </div>
  )
}

export default SecondaryContainer;
