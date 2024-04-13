import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { API_OPTIONS } from '../constants';
import { addUpcomingMovies } from '../moviesSlice';

const useGetUpcomingMovies = () => {
    const dispatch = useDispatch();
  
    const getUpcomingMovies = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/upcoming",
        API_OPTIONS
      );
      const json = await data.json();
      // console.log(json);
      dispatch(addUpcomingMovies(json));
    };
    useEffect(() => {
        getUpcomingMovies();
    }, []);
}

export default useGetUpcomingMovies
