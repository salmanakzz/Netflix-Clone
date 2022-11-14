import axios from "../../axios";
import React, { useEffect, useState } from "react";
import "./RowPost.css";
import { imgUrl } from "../../constants/constants";
import YouTube from "react-youtube";

const RowPost = (props) => {
  const [movies, setMovies] = useState([]);
  const [urlId, setUrlId] = useState('');

  useEffect(() => {
    axios
      .get(props.url)
      .then((response) => {
        console.log(response.data);
        setMovies(response.data.results);
      })
      .catch((err) => {
        alert(err);
      });
  }, [props.url]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleMovie = (id) => {
    axios
      .get(`movie/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
      .then((response) => {
        if (response.data.results.length !== 0) {
          setUrlId(response.data.results[0]);
        } else {
          console.log("no trailer found");
        }
      });
  };

  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={() => handleMovie(movie.id)}
            className={props.isSmall ? "smallPoster" : "poster"}
            src={`${imgUrl + movie.backdrop_path}`}
            alt="Poster"
          />
        ))}
      </div>
      {urlId && <YouTube opts={opts} videoId={urlId.key} />}
    </div>
  );
};

export default RowPost;
