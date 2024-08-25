import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addTopRatedMovies } from "../utils/movieSlice";
import { useSelector } from "react-redux";
import { useCallback } from "react";

export const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const topratedMovies = useSelector(store => store.movies.topratedMovies);

  const getTopRatedMovies = useCallback(async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addTopRatedMovies(json.results));
  },[dispatch]);

  useEffect(() => {
    !topratedMovies && getTopRatedMovies();
  }, [topratedMovies, getTopRatedMovies]);
};
