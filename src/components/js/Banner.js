import React, { useState, useEffect } from "react";
import "../css/Banner.css";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import requests from "../../requests";
import URLS from "../../Urls";

const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const response = await fetch(
      `${URLS.apiURL}${requests.fetchNetflixOriginals}`
    );
    const data = await response.json();
    setMovie(data.results[Math.floor(Math.random() * data.results.length)]);
  }

  function truncateDesc(desc, n) {
    let len = desc?.length;
    if (len > n) return desc.slice(0, n).trim() + "...";
    else return desc;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url('${URLS.imgUrl}/${movie?.backdrop_path}')`,
        backgroundPosition: "50%",
      }}
    >
      <div>
        <div className="banner-content">
          <h1 className="banner-title">
            {movie?.title || movie?.name || movie?.original_name}
          </h1>
          <div className="banner-buttons">
            <button className="btn btn-play">
              <PlayArrowIcon fontSize="small" />
              <span>Play</span>
            </button>
            <button className="btn btn-info">
              <InfoOutlinedIcon fontSize="small" />
              <span>More Info</span>
            </button>
          </div>
          <h3 className="banner-desc">{truncateDesc(movie?.overview, 200)}</h3>
        </div>
        <div className="fade-bottom"></div>
      </div>
    </header>
  );
};

export default Banner;
