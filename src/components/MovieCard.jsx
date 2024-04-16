import React from 'react'
import { IMG_CDN_URL } from '../utils/constants';

const MovieCard = ({posterPath}) => {
    if(!posterPath) return null;
    // console.log(movie);
  return (
    <div className='text-white w-28 shadow-lg cursor-pointer rounded-md overflow-hidden transition-transform duration-300 transform hover:scale-110'>
        <img className='rounded-md object-cover w-full h-full' alt='poster' src={IMG_CDN_URL+posterPath} />
    </div>
  )
}

export default MovieCard
