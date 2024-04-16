import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoCaretBackCircleOutline } from "react-icons/io5";
import useGetMovieTrailer from "../utils/customHooks/useGetMovieTrailer";
import { toggleShowMovieDetails } from "../utils/moviesSlice";

const MovieDetails = () => {
    const dispatch = useDispatch();
  const movie = useSelector(
    (state) => state.movies?.detailedMovieID?.detailedMovieID
  );
  const trailer = useGetMovieTrailer(movie.id);
  if (!trailer) return;
  console.log(movie);
  return (
    <div className="fixed w-6/12 z-50 mt-10 h-screen bg-gray-400 bg-opacity-80 rounded-lg">
      <div className="flex flex-col">
        <div className="h-1/5 flex justify-between p-4 z-40 text-white">
          <button onClick={() => dispatch(toggleShowMovieDetails())} className="text-4xl hover:text-gray-500 transition-all">
            <IoCaretBackCircleOutline />
          </button>
          <h1>{movie.original_title}</h1>
        </div>
        <div className="absolute w-full z-20 rounded-lg">
          <iframe
            className="w-full aspect-video rounded-lg "
            src={`https://www.youtube.com/embed/${trailer.key}?si=Ru_3Iia_N6Hw1bQ5&autoplay=1&mute=1&controls=0&showinfo=0`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
        </div>
        <div className="mt-72 text-white p-2">
            <p>{movie.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
