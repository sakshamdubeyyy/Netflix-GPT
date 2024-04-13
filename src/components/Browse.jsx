import useGetNowPlayingMovies from '../utils/customHooks/useGetNowPlayingMovies'
import Header from './Header'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {
  useGetNowPlayingMovies();
  return (
    <div className='flex'>
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  )
}

export default Browse
