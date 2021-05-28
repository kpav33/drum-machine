import "./styles.scss";
import React, { useState } from "react";

import ButtonsPad from "./components/ButtonsPad";
import Title from "./components/Title";
import Display from "./components/Display";
import SliderVolume from "./components/SliderVolume";
import Switches from "./components/Switches";

function App() {
  // Change display text
  const [innerText, setInnerText] = useState("Powered up!");
  // Set app volume
  const [value, setValue] = useState(0.3);
  // Get true/false boolean from switch
  const [switches, setSwitches] = useState({
    powerCheck: true,
    soundsCheck: false,
  });
  const handleChange = (event) => {
    setSwitches({ ...switches, [event.target.name]: event.target.checked });
    setInnerText("Powered up!");
  };

  return (
    <div className="app">
      <div className="panel" id="drum-machine">
        <Title changeSounds={switches.soundsCheck} />
        <ButtonsPad
          innerText={setInnerText}
          value={value}
          disabled={!switches.powerCheck}
          changeSounds={switches.soundsCheck}
        />
        <Display innerText={innerText} disabled={!switches.powerCheck} />
        <SliderVolume
          innerText={setInnerText}
          value={value}
          setValue={setValue}
          disabled={!switches.powerCheck}
        />
        <Switches switches={switches} handleChange={handleChange} />
      </div>
    </div>
  );
}

export default App;
