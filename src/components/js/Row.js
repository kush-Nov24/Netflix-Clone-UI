import React, { useState, useEffect } from "react";
import "../css/Row.css";
import URLS from "../../Urls";
import Modal from "./Modal";

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
    // eslint-disable-next-line
  }, [url]);

  function modal() {
    return <Modal />;
  }
  return (
    <div className={`row ${largePoster && "originals-row"}`}>
      <h2 className="row-title">{title}</h2>
      <div className={` ${largePoster ? "row-imgs-large" : "row-imgs"}`}>
        {movies.map(
          (movie) =>
            ((largePoster && movie.poster_path) ||
              (!largePoster && movie.backdrop_path)) && (
              <div
                className={`${
                  largePoster ? "row-wrapper-large" : "row-wrapper"
                }`}
                key={movie.id}
              >
                <img
                  onClick={modal}
                  className={`${largePoster ? "row-img-large" : "row-img"}`}
                  src={`${URLS.imgUrl}/${
                    largePoster ? movie.poster_path : movie.backdrop_path
                  }`}
                  alt={movie.name}
                />
              </div>
            )
        )}
      </div>
    </div>
  );
};
export default Row;
