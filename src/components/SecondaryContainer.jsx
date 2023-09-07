import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  // console.log("Movies", movies);
  return (
    <div className="bg-black">
      <div className="relative pl-8 -mt-60">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Popular Movies"} movies={movies.popularMovies} />
        <MovieList title={"Upcoming Movies "} movies={movies.upcomingMovies} />
        <MovieList title={"Trending Movies"} movies={movies.trendingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
