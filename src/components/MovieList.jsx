import React, { useState } from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  const [showClip, setShowClip] = useState(false);
//   console.log(movies);
  if (!movies) return;
  return (
    <div className="text-white font-bold mx-4 text-xl">
      <h1>{title}</h1>
      <div className="flex overflow-x-scroll my-4 movie-list-container">
        <div className="flex gap-2.5">
          {movies.results.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
