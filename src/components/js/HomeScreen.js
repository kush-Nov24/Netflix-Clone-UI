import React from "react";
import "../css/HomeScreen.css";
import Banner from "./Banner";
import Nav from "./Nav";
import Row from "./Row";
import requests from "../../requests";

const HomeScreen = () => {
  return (
    <div className="home-screen">
      <Nav />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        url={requests.fetchNetflixOriginals}
        largePoster
      />
      {/* <Row title="Top Rated" url={requests.fetchTopRated} />
      <Row title="Trending" url={requests.fetchTrending} />
      <Row title="Action" url={requests.fetchActionMovies} />
      <Row title="Comedy" url={requests.fetchComedyMovies} />
      <Row title="Romance" url={requests.fetchRomanceMovies} />
      <Row title="Horror" url={requests.fetchHorrorMovies} />
      <Row title="Documentaries" url={requests.fetchDocumentaries} /> */}
    </div>
  );
};

export default HomeScreen;
