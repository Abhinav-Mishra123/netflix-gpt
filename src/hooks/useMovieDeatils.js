import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addMovieDetails } from "../utils/movieSlice";
import { useCallback } from "react";

export const useMovieDeatils = (movieId) => {
  const dispatch = useDispatch();
  const getMovieDetails = useCallback(async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addMovieDetails(json));
    console.log("moviedetauils", json);
  },[dispatch, movieId]);

  useEffect(() => {
    getMovieDetails();
  },[movieId, getMovieDetails]);
};
