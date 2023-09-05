import { POSTER_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-48 pr-6 shadow-lg ">
      <img
        className="rounded-lg"
        src={POSTER_CDN_URL + posterPath}
        alt="MoviePoster"
      />
    </div>
  );
};

export default MovieCard;
