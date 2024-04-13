import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'

const MainContainer = () => {
    const movies = useSelector((state) => state.movies?.nowPlayingMovies)
    if(!movies) return;
    const randomIndex = Math.floor(Math.random() * movies.results.length);

    const mainMovie = movies.results[randomIndex];

    console.log("Main: ", mainMovie)
    const {original_title, overview, id} = mainMovie;
  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground id={id}/>
    </div>
  )
}

export default MainContainer
