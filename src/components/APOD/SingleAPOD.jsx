import React from "react";

const SingleAPOD = ({ apod }) => (
  <div className="apod-card">
    <img src={apod.url} alt={apod.title} />
    <h3>{apod.title}</h3>
    <p>{apod.explanation}</p>
  </div>
);

export default SingleAPOD;
