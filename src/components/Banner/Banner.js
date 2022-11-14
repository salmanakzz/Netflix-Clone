import React, { useEffect, useState } from "react";
import axios from "../../axios";
import { imgUrl } from "../../constants/constants";
import "./Banner.css";

const Banner = () => {
  const [movie, setMovie] = useState();

  useEffect(() => {
    const movieIndex = Math.floor(Math.random() * 20);
    axios
      .get(`trending/all/week?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
      .then((response) => {
        console.log(response.data.results);
        setMovie(response.data.results[movieIndex]);
      })
      .catch((err) => {
        alert(err);
      });
  }, []);

  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url(${movie ? imgUrl + movie.backdrop_path : ""})`,
      }}
    >
      <div className="content">
        <h1 className="title">{movie ? movie.title || movie.name : ""}</h1>
        <div className="banner_buttons">
          <button className="button">Play</button>
          <button className="button">My list</button>
        </div>
        <h1 className="description">{movie ? movie.overview : ""}</h1>
      </div>
      <div className="fade_bottom"></div>
    </div>
  );
};

export default Banner;
