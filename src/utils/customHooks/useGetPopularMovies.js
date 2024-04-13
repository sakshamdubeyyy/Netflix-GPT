import React, { useEffect } from 'react'
import { addPopularMovies } from '../moviesSlice';
import { API_OPTIONS } from '../constants';
import { useDispatch } from 'react-redux';

const useGetPopularMovies = () => {
    const dispatch = useDispatch();
  
  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular",
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json);
    dispatch(addPopularMovies(json));
  };
  useEffect(() => {
    getPopularMovies();
  }, []);
}

export default useGetPopularMovies
