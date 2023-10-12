import React from "react";

const header = ({ genres, keyChange }) => {
  return (
    <div className="header">
      {genres.map((genre) => {
        return (
          <button className="button" value={genre} onClick={keyChange}>
            {genre}
          </button>
        );
      })}
    </div>
  );
};

export default header;
