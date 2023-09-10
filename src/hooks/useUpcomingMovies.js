import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_AUTH_CONFIG } from "../utils/constants";
import { addUpcomingMovies } from "../store/movieSlice";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const upcomingMovies = useSelector((store) => store.movies.upcomingMovies);
  {
    upcomingMovies && console.log(upcomingMovies);
  }

  const getUpcomingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      API_AUTH_CONFIG
    );
    const json = await data.json();
    dispatch(addUpcomingMovies(json.results));
  };

  useEffect(() => {
    !upcomingMovies && getUpcomingMovies();
  }, []);
};

export default useUpcomingMovies;
