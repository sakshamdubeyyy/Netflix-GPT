import React from 'react'
import { IMG_CDN_URL } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { toggleShowMovieDetails } from '../utils/moviesSlice';

const MovieCard = ({posterPath, movie}) => {
    const {showMovieDetails, detailedMovieID} = useSelector((state)=>state.movies)
    const dispatch = useDispatch();
    if(!posterPath) return null;
    // console.log("movie", movie);
  return (
    <div onClick={() => dispatch(toggleShowMovieDetails({ detailedMovieID : movie}))} className='text-white w-28 shadow-lg cursor-pointer rounded-md overflow-hidden transition-transform duration-300 transform hover:scale-110'>
        <img className='rounded-md object-cover w-full h-full' alt='poster' src={IMG_CDN_URL+posterPath} />
    </div>
  )
}

export default MovieCard
