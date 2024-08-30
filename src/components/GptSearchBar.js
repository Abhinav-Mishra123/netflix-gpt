import React, { useState, useRef } from "react";
import { lang } from "../utils/languageConstants";
import { useSelector } from "react-redux";
import { useSearchMovies } from "../hooks/useSearchMovies";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchTextRef = useRef(null);
  const [searchText, setSearchText] = useState("");

  const HandleSearch = async () => {
    setSearchText(searchTextRef.current.value);
  };

  useSearchMovies(searchText)


  return (
    <div className="relative pt-[20%] md:pt-[10%] flex justify-center items-center">
      <form
        className="form bg-black w-full md:w-1/2 mt-4 grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          className="p-4 m-4 border-2 rounded-lg col-span-9"
          placeholder={lang[langKey].Placeholder}
          ref={searchTextRef}
        />
        <button
          onClick={HandleSearch}
          className="text-white bg-blue-700 col-span-3 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg my-4 md:m-4 py-2  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          {lang[langKey].Search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
