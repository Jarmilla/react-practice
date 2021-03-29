import React from "react";

function Flower({ flower }) {
  return (
    <div>
      <div className="informations">
        <h1>{flower.name}</h1>
        <p>Szín: {flower.color}</p>
        <p>Ár: {flower.price} ¥</p>
        <p>Típus: {flower.type}</p>
        <p>Raktáron: {flower.available ? "Igen" : "Elfogyott"}</p>
      </div>
      <div className="picture">{flower.picture.length > 0 ? <img src={flower.picture} alt={flower.name} /> : ""}</div>
    </div>
  );
}
export default Flower;
