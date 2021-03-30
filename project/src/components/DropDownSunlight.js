import React from "react";

function DropDownSunlight({ setSearchBySunneed }) {
  return (
    <select name="fényigény" id="fényigény">
      <option onClick={(e) => setSearchBySunneed(e.target.value)} value="">
        Keresés Fényigény szerint
      </option>
      <option
        onClick={(e) => {
          setSearchBySunneed(e.target.value);
        }}
        value="fénykedvelő"
      >
        Fénykedvelő
      </option>
      <option onClick={(e) => setSearchBySunneed(e.target.value)} value="félárnyék kedvelő">
        Félárnyék kedvelő
      </option>
      <option onClick={(e) => setSearchBySunneed(e.target.value)} value="árnyékkedvelő">
        Árnyékkedvelő
      </option>
    </select>
  );
}
export default DropDownSunlight;
