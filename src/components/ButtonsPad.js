import React from "react";

import DrumPad from "./DrumPad";
import soundsArr from "../sounds/soundsArr";

function ButtonsPad(props) {
  const keys = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];

  return (
    <div className="buttonsPad">
      {soundsArr.map((sound, i) => (
        <DrumPad
          src={sound.src}
          key={sound.id}
          id={sound.id}
          keyValue={keys[i]}
          innerText={props.innerText}
          value={props.value}
          disabled={props.disabled}
        />
      ))}
    </div>
  );
}

export default ButtonsPad;
