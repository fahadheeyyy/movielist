import React from "react";

const header = ({ genres, keyChange }) => {
  return (
    <div className="header">
      {genres.map((genre) => {
        return (
          <button value={genre} onClick={keyChange}>
            {genre}
          </button>
        );
      })}
    </div>
  );
};
// const mybutton = (props) => {
//
// };
export default header;
