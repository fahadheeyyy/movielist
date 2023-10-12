import React from "react";
import Card from "./card";

const main = ({ movies }) => {
  console.log("moviesmoviesmovies");

  return (
    <div className="main">
      {movies.map((movie) => {
        return <Card mov={movie} />;
      })}
      {/* {genres.map((genre)=>{
        return 
      })} */}
    </div>
  );
};

export default main;
