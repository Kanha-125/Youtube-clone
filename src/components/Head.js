import React, { useEffect, useState } from "react";
import { LOGO_IMAGE } from "../utils/logoImage.js";
import { USER_LOGO } from "../utils/UserLogoImage.js";
import { hamburgerIcon } from "../utils/hamburgerIcon.js";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice.js";
import { YOUTUBE_SEARCH_API } from "../utils/constants.js";
// import { GoSearch } from "react-icons/go";
// import { cacheResults } from "../utils/searchSlice.js";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  // const searchCache = useSelector((store) => store.search);

  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      // if (searchCache[searchQuery]) {
      //   setSuggestions(searchCache[searchQuery]);
      // } else {
      //   getSearchSuggestions();
      // }
      getSearchSuggestions();
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    // dispatch(cacheResults({ [searchQuery]: json[1] }));
    setSuggestions(json[1]);
  };
  const toggleMenUHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-1 m-2 shadow-lg">
      <div className="flex col-span-1 h-full items-center">
        <img
          onClick={() => toggleMenUHandler()}
          className="h-10 cursor-pointer"
          src={hamburgerIcon}
          alt="error"
        />
        <img className="h-14" src={LOGO_IMAGE} alt="youtube-logo" />
      </div>
      <div className="col-span-10 items-center">
        <div>
          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-1/2 border border-gray-400 p-2 rounded-l-full"
            type="text"
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="border border-gray-400  p-2 rounded-r-full bg-gray-100">
            🔍
          </button>
        </div>
        {showSuggestions && (
          <div className="absolute bg-white px-2 py-2 w-[31rem] rounded-lg border border-gray-100">
            <ul>
              {suggestions.map((s) => (
                <li key={s} className="py-1 shadow-sm hover:bg-gray-100">
                  🔍 {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="col-span-1 flex items-center">
        <img className="h-10" src={USER_LOGO} alt="user-logo" />
      </div>
    </div>
  );
};

export default Head;
