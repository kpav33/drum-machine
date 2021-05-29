import React from "react";

import DrumPad from "./DrumPad";
import soundsArr from "../sounds/drums/soundsArr";
import pianoArr from "../sounds/piano/pianoArr";

function ButtonsPad({ innerText, value, disabled, changeSounds }) {
  const keys = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];

  let array = changeSounds ? pianoArr : soundsArr;

  return (
    <div className="buttonsPad">
      {array.map((sound, i) => (
        <DrumPad
          src={sound.src}
          key={sound.id}
          id={sound.id}
          keyValue={keys[i]}
          innerText={innerText}
          value={value}
          disabled={disabled}
        />
      ))}
    </div>
  );
}

export default ButtonsPad;
