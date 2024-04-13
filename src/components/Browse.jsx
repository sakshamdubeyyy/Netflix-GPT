import useGetNowPlayingMovies from '../utils/customHooks/useGetNowPlayingMovies'
import useGetPopularMovies from '../utils/customHooks/useGetPopularMovies';
import useGetTopRatedMovies from '../utils/customHooks/useGetTopRatedMovies';
import useGetUpcomingMovies from '../utils/customHooks/useGetUpcomingMovies';
import Header from './Header'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {
  useGetNowPlayingMovies();
  useGetPopularMovies();
  useGetTopRatedMovies();
  useGetUpcomingMovies();
  return (
    <div className='flex flex-col'>
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  )
}

export default Browse
