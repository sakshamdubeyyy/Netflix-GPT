import React, { useEffect, useState } from 'react'
import { API_OPTIONS } from '../constants';

const useGetGptMovies = (name) => {
    const [movie, setMovie] = useState(null);
    const getMovieTrailer = async (name) => {
      const data = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${name}`,
        API_OPTIONS
      );
      const json = await data.json();
      const filterData = json.results.filter(video => video.type === "Trailer");
      const trailer = filterData.length ? filterData[0] : json.results[0];
      setMovie(trailer);
    };
  
    useEffect(() => {
      getMovieTrailer(name);
    }, []);
    return movie;
}

export default useGetGptMovies
