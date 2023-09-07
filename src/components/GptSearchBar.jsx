import { useSearchParams } from "react-router-dom";
import { BG_IMG_LINK } from "../utils/constants";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  return (
    <div>
      <div className="absolute -z-20">
        <img
          className="bg-image bg-cover bg-center min-h-screen"
          src={BG_IMG_LINK}
          alt="bg"
        />
      </div>
      <div className="pt-[12%] flex justify-center">
        <form className="w-1/2 bg-gray-950 grid grid-cols-12 rounded-md shadow-2xl">
          <input
            type="text"
            className="py-3 px-5 m-4 ml-8 col-span-9 rounded-md"
            placeholder={lang[langKey].gptSearchPlaceholder}
          />
          <button className="col-span-3 my-4 mr-8 py-3 px-4 bg-red-700 text-white rounded-md font-semibold">
            {lang[langKey].search}
          </button>
        </form>
      </div>
    </div>
  );
};

export default GptSearchBar;
