import React from "react";

function Display({ disabled, innerText }) {
  return (
    <div id="display" className="display">
      <p>{disabled ? "No power!" : innerText}</p>
    </div>
  );
}
export default Display;
