import { API_AUTH_CONFIG } from "../utils/constants";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";
import openai from "../utils/openai";
import { addGptMovieResult } from "../store/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_AUTH_CONFIG
    );
    const json = await data.json();

    return json.results;
  };

  const handleGptSearchClick = async () => {
    //OpenAI API call
    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Joker, Krishh, Koi Mil Gaya";

    const gptResult = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    if (!gptResult.choices) {
      // Error Handling Logic
    }
    // console.log(gptResult.choices[0]?.message?.content);

    const gptMovies = gptResult.choices[0]?.message?.content.split(", ");

    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));

    const tmdbResults = await Promise.all(promiseArray);

    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
    );

    console.log(tmdbResults);
  };

  return (
    <div>
      <div className="pt-[45%] md:pt-[10%] flex justify-center ">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="w-full md:w-1/2 mx-2 md:mx-0  bg-gray-950 grid grid-cols-12 rounded-md shadow-2xl"
        >
          <input
            ref={searchText}
            type="text"
            className="py-3 md:px-5 px-2 m-4 md:ml-8 ml-3 text-sm md:text-md col-span-9 rounded-md"
            placeholder={lang[langKey].gptSearchPlaceholder}
          />
          <button
            className="col-span-3 my-4 md:mr-8 mr-3 py-3 md:px-4  text-sm md:text-md bg-red-700 text-white rounded-md font-semibold"
            onClick={handleGptSearchClick}
          >
            {lang[langKey].search}
          </button>
        </form>
      </div>
    </div>
  );
};

export default GptSearchBar;
