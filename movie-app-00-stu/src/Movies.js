import React from "react";
import propTypes from "prop-types";

function Movie({ title, year, summary, poster }) {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
}

Movie.propTypes = {
  id: propTypes.number.isRequired,
  year: propTypes.number.isRequired,
  title: propTypes.string.isRequired,
  summary: propTypes.string.isRequired,
  poster: propTypes.string.isRequired,
};

export default Movie;
