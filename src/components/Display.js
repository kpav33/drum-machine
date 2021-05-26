import React from "react";

function Display(props) {
  return (
    <div id="display" className="display">
      <p>{props.innerText}</p>
    </div>
  );
}
export default Display;
