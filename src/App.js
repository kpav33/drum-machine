import "./styles.scss";
import React, { useState } from "react";

import ButtonsPad from "./components/ButtonsPad";
import Title from "./components/Title";
import Display from "./components/Display";
import SliderVolume from "./components/SliderVolume";
import Switches from "./components/Switches";

function App() {
  const [innerText, setInnerText] = useState("Fill me up buttercup");
  const [value, setValue] = useState(0.3);

  return (
    <div className="app">
      <div className="panel" id="drum-machine">
        <Title />
        <ButtonsPad innerText={setInnerText} value={value} />
        <Display innerText={innerText} />
        <SliderVolume
          innerText={setInnerText}
          value={value}
          setValue={setValue}
        />
        <Switches />
      </div>
    </div>
  );
}

export default App;
