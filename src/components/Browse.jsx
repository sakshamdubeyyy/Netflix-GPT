import useGetNowPlayingMovies from '../utils/customHooks/useGetNowPlayingMovies'
import useGetPopularMovies from '../utils/customHooks/useGetPopularMovies';
import useGetTopRatedMovies from '../utils/customHooks/useGetTopRatedMovies';
import useGetUpcomingMovies from '../utils/customHooks/useGetUpcomingMovies';
import GptSearch from './GptSearch';
import Header from './Header'
import MainContainer from './MainContainer';
import MovieDetails from './MovieDetails';
import SecondaryContainer from './SecondaryContainer';
import { useSelector } from 'react-redux'

const Browse = () => {
  useGetNowPlayingMovies();
  useGetPopularMovies();
  useGetTopRatedMovies();
  useGetUpcomingMovies();
  const visible = useSelector((state) => state.gpt?.showGptSearch);
  const showMovieDetails = useSelector((state) => state.movies?.showMovieDetails)

  return (
    <div className='flex flex-col'>
      <Header/>
      <div className='flex justify-center'>
        {showMovieDetails && <MovieDetails />}
      </div>
      <div className='flex justify-center'>
        {visible && <GptSearch/>}
      </div>
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  )
}

export default Browse
