import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptSearchSuggestions = () => {
  const { movieNames, movieResults } = useSelector((store) => store.gpt);

  if (!movieNames) return null;
  return (
    <div className="p-4 m-4 bg-black opacity-90 text-white">
      {movieNames &&
        movieNames.map((movieName, index) => (
          <MovieList
            key={movieName}
            title={movieName}
            movies={movieResults[index]}
          />
        ))}
    </div>
  );
};

export default GptSearchSuggestions;
