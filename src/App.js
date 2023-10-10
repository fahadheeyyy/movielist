import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/header";
import Main from "./components/main";

function App() {
  const [data, setData] = useState({ genres: [], movies: [] });
  // const [movieList, setMovieList] = useState(data.movies);

  useEffect(() => {
    fetch("https://test.create.diagnal.com/data/db.json")
      .then((response) => {
        // Check if the response status is OK (200)
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        // Parse the JSON response
        return response.json();
      })
      .then((jsonData) => {
        // Update the state with the fetched data
        console.log("jsonData", jsonData);
        setData(jsonData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  // const getfilter = (event) => {
  //   setMovieList(data.movies.genres === "Comedy");
  // };

  console.log("## filter");
  const [key, setKey] = useState("");
  // setMovieList(data.movies.genres[0] === "Comedy");
  var mov = data.movies;

  // let sam = mov.map((x) => console.log(x.genres.includes("Comedy")));
  const handleKeyChange = (event) => {
    console.log(event.currentTarget.getAttribute("value"));
    setKey(event.currentTarget.getAttribute("value"));
  };
  let sample = mov.filter((x) => x.genres.includes(key));

  return (
    <div className="app">
      <Header keyChange={handleKeyChange} genres={data.genres} />
      <Main movies={sample} />
    </div>
  );
}

export default App;
