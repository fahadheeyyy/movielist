import React from "react";

const card = ({ mov }) => {
  return (
    <div className="card">
      <img
        className="image"
        src={mov.posterUrl}
        width="80px"
        alt="Screenshot 2023-09-22 231511.png"
      ></img>
      <p className="title">{mov.title}</p>
      <p className="content">Genre:-</p>
      {mov.genres.map((gen) => {
        return <p className="content"> {gen}</p>;
      })}
      <p className="contentone">Director: {mov.director}.</p>
      <p className="contentone">Year: {mov.year}.</p>
      <p className="content">Plot: {mov.plot}.</p>
      <p className="content">Starring: {mov.actors}.</p>
      {/* <p className="content"></p>
      <p className="content"></p> */}
    </div>
  );
};

export default card;
