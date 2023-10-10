import React from "react";

const card = ({ mov }) => {
  return (
    <div className="card">
      <img src={mov.posterUrl} width="80px"></img>
      <p>{mov.title}</p>
      <p className="gen">{mov.genres}</p>
    </div>
  );
};

export default card;
