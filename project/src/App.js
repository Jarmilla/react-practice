import React, { useState } from "react";
import "./App.css";
import Flower from "./components/Flower";
import DropDownSunlight from "./components/DropDownSunlight";

const data = [
  {
    name: "tulipán",
    color: "piros, rózsszín, sárga, narancs",
    price: 71,
    type: "cserepes",
    available: true,
    picture: "https://i1.wp.com/citygreen.hu/wp-content/uploads/2016/07/tulip%C3%A1nok-2.jpg?fit=960%2C720&ssl=1",
    sunneed: "félárnyék kedvelő",
  },
  {
    name: "nefelejtcs",
    color: "világos-kék",
    price: 49,
    type: "kinti",
    available: false,
    picture: "https://utakerthez.hu/wp-content/uploads/2017/01/nefelejcs-vir%C3%A1g-k%C3%A9pek.jpg",
    sunneed: "fénykedvelő",
  },
  {
    name: "aranyeső",
    color: "sárga",
    price: 127,
    type: "kinti",
    available: true,
    picture: "https://m.blog.hu/ke/kertesz/image/aranyesos_poszt/forsythia.jpg",
    sunneed: "fénykedvelő",
  },
];

function App() {
  const [searchByName, setSearchByName] = useState("");
  const [searchBySunneed, setSearchBySunneed] = useState("");

  return (
    <div className="App">
      <div className="search">
        <input type="text" placeholder="Keresés név szerint" onChange={(e) => setSearchByName(e.target.value)} />
        <label for="fényigény">Fényigény:</label>
        <DropDownSunlight setSearchBySunneed={setSearchBySunneed} />
      </div>
      <div>
        {data
          .filter((flower) => flower.name.toLowerCase().includes(searchByName.toLowerCase()))
          .filter((flower) => flower.sunneed.includes(searchBySunneed))
          .map((flower, index) => (
            <Flower key={index} flower={flower} />
          ))}
      </div>
    </div>
  );
}

export default App;
