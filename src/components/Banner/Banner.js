import React, { useEffect, useState } from "react";
import "./Banner.css";
import { API_KEY, imageUrl } from "../../constants/Constents";
import axios from "../../axios";

function Banner() {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    axios
      .get(`trending/all/week?api_key=${API_KEY}&language=en-US`)
      .then((Response) => {
        const randomIndex = Math.floor(Math.random() * Response.data.results.length)
        setMovie(Response.data.results[randomIndex]);
      });
  }, []);
  return (
    <div
      style={{ backgroundImage: `url(${imageUrl + movie.backdrop_path})` }}
      className="banner"
    >
      <div className="content">
        <h1 className="title">{movie.title}</h1>
        <div className="banner_buttons">
          <button className="button">Play</button>
          <button className="button">My List</button>
        </div>
        <h1 className="description">{movie.overview}</h1>
      </div>
      <div className="fade_bottom"></div>
    </div>
  );
}

export default Banner;
