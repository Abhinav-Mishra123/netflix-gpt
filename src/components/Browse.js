import { useNowPlayingMovies } from "../hooks/useNowPlayingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import { usePopularMovies } from "../hooks/usePopularMovies";
import { useTrendingMovies } from "../hooks/useTrendingMovies";
import { useUpcomingMovies } from "../hooks/useUpcomingMovies";
import { useTopRatedMovies } from "../hooks/useTopRatedMovies";
import { useMovieDeatils } from "../hooks/useMovieDeatils";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTrendingMovies();
  useUpcomingMovies();
  useTopRatedMovies();
  return (
    <div>
      <Header />
      <MainContainer/>
      <SecondaryContainer/>

      {/* mainContainer
        videoBackground
        videoTitle
      
      secondaryContainer
        MovieList * n
        cards * n */}


    </div>
  );
};
export default Browse;
