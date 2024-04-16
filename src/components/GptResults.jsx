import React from "react";
import { useSelector } from "react-redux";
import GptSearchMovieList from "./GptSearchMovieList";

const GptResults = () => {
  const { movieNames, gptMovies } = useSelector((state) => state.gpt);
  if (!movieNames) return null;

  return (
    <div className="p-4 m-4 text-white flex flex-col justify-center w-full h-full overflow-y-scroll movie-list-container">
      <div className="p-4 m-4 text-white flex flex-col justify-center mt-72 -mx-8">
        {movieNames.map((movieName, index) => (
          <GptSearchMovieList title={movieName} movies={gptMovies[index]} />
        ))}
      </div>
    </div>
  );
};

export default GptResults;
