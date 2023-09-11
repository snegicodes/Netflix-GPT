import { BG_IMG_LINK } from "../utils/constants";
import GptSeachBar from "./GptSearchBar";
import GptSearchSuggestions from "./GptSearchSuggestions";

const GptSearchContainer = () => {
  return (
    <>
      <div className="fixed -z-20">
        <img
          className="bg-image bg-cover bg-center min-h-screen object-cover"
          src={BG_IMG_LINK}
          alt="bg"
        />
      </div>
      <div>
        <GptSeachBar />
        <GptSearchSuggestions />
      </div>
    </>
  );
};

export default GptSearchContainer;
