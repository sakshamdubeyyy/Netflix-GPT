import React from "react";
import useGetMovieTrailer from "../utils/customHooks/useGetMovieTrailer";

const VideoBackground = ({ id }) => {
  const trailer = useGetMovieTrailer(id);
  if (!trailer) return;
//   console.log(trailer)
  return (
    <div>
      <iframe className="w-screen aspect-video mt-[-40px]"
        src={`https://www.youtube.com/embed/${trailer.key}?si=Ru_3Iia_N6Hw1bQ5&autoplay=1&mute=1&controls=0`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
