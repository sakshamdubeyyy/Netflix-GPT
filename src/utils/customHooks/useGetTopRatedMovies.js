import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { API_OPTIONS } from '../constants';
import { addTopRatedMovies } from '../moviesSlice';

const useGetTopRatedMovies = () => {
    const dispatch = useDispatch();
  
    const getTopRatedMovies = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated",
        API_OPTIONS
      );
      const json = await data.json();
      // console.log(json);
      dispatch(addTopRatedMovies(json));
    };
    useEffect(() => {
        getTopRatedMovies();
    }, []);
}

export default useGetTopRatedMovies
