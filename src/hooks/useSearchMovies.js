import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { searchMovies } from "../utils/gptSlice";
import { API_OPTIONS } from "../utils/constants";

export const useSearchMovies = (searchText) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getSearchMovies = async () => {
      if (searchText.trim() === "") return; // Do nothing if search text is empty

      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
            searchText
          )}&include_adult=false&language=en-US&page=1`,
          API_OPTIONS
        );
        const json = await response.json();
        console.log("search movies", json.results);
        dispatch(searchMovies(json.results));
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    };

    getSearchMovies();
  }, [searchText, dispatch]); // Re-run the search when searchText changes
};
