import { useEffect, useState } from "react";
import { API_OPTIONS } from "../constants";

const useGetMovieTrailer = (id) => {
    const [trailerVideo, setTrailerVideo] = useState(null);
  const getMovieTrailer = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      API_OPTIONS
    );
    const json = await data.json();
    const filterData = json.results.filter(video => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    setTrailerVideo(trailer);
  };

  useEffect(() => {
    getMovieTrailer(id);
  }, []);
  return trailerVideo;
};

export default useGetMovieTrailer;
