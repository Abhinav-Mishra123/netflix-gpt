import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addTrendingMovies } from "../utils/movieSlice";
import { useCallback } from "react";
import { useSelector } from "react-redux";

export const useTrendingMovies = () => {
  const dispatch = useDispatch();
  const trendingMovies = useSelector(store => store.movies.trendingMovies);
  const getTrendingMovies = useCallback(async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/trending/movie/day",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addTrendingMovies(json.results));
  },[dispatch]);

  useEffect(() => {
   !trendingMovies && getTrendingMovies();
  }, [trendingMovies, getTrendingMovies]);
};
