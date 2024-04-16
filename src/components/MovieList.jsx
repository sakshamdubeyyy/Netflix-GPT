import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
//   console.log(movies);
  if (!movies) return null;
  return (
    <div className="text-white font-bold mx-4 text-xl">
      <h1>{title}</h1>
      <div className="flex overflow-x-scroll my-4 movie-list-container overflow-y-hidden">
        <div className="flex gap-2.5 shadow-lg">
          {movies.results.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
