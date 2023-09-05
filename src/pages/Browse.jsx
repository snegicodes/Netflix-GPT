import React, { useEffect } from "react";
import Header from "../components/Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "../components/MainContainer";
import SecondaryContainer from "../components/SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
      {/*
      - Main Container
        - Video Container
        - Video Title
      - Secondary Container
        - Movielist * n
          - Cards * n
      */}
    </div>
  );
};

export default Browse;
