import React from 'react'
import { IMG_CDN_URL } from '../utils/constants';

const MovieCard = ({posterPath}) => {
    // console.log(movie);
  return (
    <div className='text-white w-28 shadow-lg cursor-pointer rounded-md'>
        <img className='rounded-md' alt='poster' src={IMG_CDN_URL+posterPath} />
    </div>
  )
}

export default MovieCard
