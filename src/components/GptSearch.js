import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BG_BANNER } from "../utils/constants";

const GptSearch = () => {
  return (
    <div className="gptSearch-container">
    <div className="absolute bg-shadow">
        <img
          src={BG_BANNER}
          alt="logo"
        />
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearch;
