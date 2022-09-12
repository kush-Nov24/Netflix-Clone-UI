import React, { useState, useEffect } from "react";
import "../css/Row.css";
import URLS from "../../Urls";
// import Modal from "../js/Modal";

const Row = (props) => {
  const { title, url, largePoster = false } = props;
  const [movies, setMovies] = useState([]);

  async function fetchData() {
    const response = await fetch(`${URLS.apiURL}${url}`);
    const data = await response.json();
    setMovies(data.results);
  }

  useEffect(() => {
    fetchData();
  }, [url]);

  return (
    <div className="row">
      <h2 className="row-title">{title}</h2>
      <div className={` ${largePoster ? "row-imgs-large" : "row-imgs"}`}>
        {movies.map((movie) => {
          if (
            (largePoster && movie.poster_path) ||
            (!largePoster && movie.backdrop_path)
          )
            return (
              <div
                className={`${
                  largePoster ? "row-wrapper-large" : "row-wrapper"
                }`}
                key={movie.id}
              >
                <img
                  className={`${largePoster ? "row-img-large" : "row-img"}`}
                  src={`${URLS.imgUrl}/${
                    largePoster ? movie.poster_path : movie.backdrop_path
                  }`}
                  alt="image"
                />
              </div>
            );
        })}
      </div>
    </div>
  );
};
export default Row;
