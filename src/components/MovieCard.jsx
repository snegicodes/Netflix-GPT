import { POSTER_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;
  return (
    <div className="w-36 md:w-44 pr-6 shadow-lg ">
      <img
        className="rounded-lg"
        src={POSTER_CDN_URL + posterPath}
        alt="MoviePoster"
      />
    </div>
  );
};

export default MovieCard;
