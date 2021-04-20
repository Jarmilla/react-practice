import React from "react";

function DropDownSunlight({ setSearchBySunneed }) {
  const sunneedTypes = ["Keresés Fényigény szerint", "Fénykedvelő", "Félárnyék kedvelő", "Árnyékkedvelő"];

  return (
    <select name="fényigény" id="fényigény">
      {sunneedTypes.map((sunneedType) => (
        <option value={sunneedType === "Keresés Fényigény szerint" ? "" : sunneedType.toLowerCase()} onClick={(e) => setSearchBySunneed(e.target.value)}>
          {sunneedType}
        </option>
      ))}
    </select>
  );
}
export default DropDownSunlight;
