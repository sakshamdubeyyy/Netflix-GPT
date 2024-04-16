import React from "react";
import MovieCard from "./MovieCard";

const GptSearchMovieList = ({ title, movies }) => {
  if (!movies) return null;
  return (
    <div className="text-white font-bold mx-4 text-xl max-w-screen-md flex flex-col w-full object-fill">
      <h1>{title}</h1>
      <div className="flex overflow-x-scroll my-4 movie-list-container overflow-y-hidden w-11/12">
        <div className="flex gap-2.5 shadow-lg">
          {movies.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GptSearchMovieList;
