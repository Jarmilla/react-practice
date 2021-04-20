import React, { useState, useEffect } from "react";
import "./App.css";
import Flower from "./components/Flower";
import DropDownSunlight from "./components/DropDownSunlight";

function App() {
  const port = 3030;

  //start backend to be able to fetch datas
  useEffect(() => {
    fetch(`http://localhost:${port}/flowers`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((err) => console.log("Err: ", err));
  }, []);

  const [data, setData] = useState(null);
  const [searchByName, setSearchByName] = useState("");
  const [searchBySunneed, setSearchBySunneed] = useState("");

  return (
    <div className="App">
      <div className="search">
        <input type="text" placeholder="Keresés név szerint" onChange={(e) => setSearchByName(e.target.value)} />
        <DropDownSunlight setSearchBySunneed={setSearchBySunneed} />
      </div>
      <div>
        {data
          ? data.flowers
              .filter((flower) => flower.name.toLowerCase().includes(searchByName.toLowerCase()))
              .filter((flower) => flower.sunneed.includes(searchBySunneed))
              .map((flower, index) => <Flower key={index} flower={flower} />)
          : "Betöltés folyamatban..."}
      </div>
    </div>
  );
}

export default App;
