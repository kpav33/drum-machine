import "./styles.scss";
import React, { useState } from "react";
import soundsArr from "./sounds/soundsArr";
import audio from "./sounds/clap.wav";
// You need to import sound directly to make it work?

import ButtonsPad from "./components/ButtonsPad";

function App() {
  //let audio = new Audio("./sounds/clap.wav");
  // let id = document.getElementById("Q");
  const [innerText, setInnerText] = useState("Fill me up buttercup");

  function playAudio() {
    let id = document.getElementById("Q");
    console.log(id);
    id.play();
  }

  return (
    <div className="app">
      <div className="panel" id="drum-machine">
        <h1>Drum Machine</h1>
        <ButtonsPad innerText={setInnerText} />
        {/*<div className="buttonsPad">
          <button className="drum-pad" onClick={playAudio}>
            Q
            <audio id="Q">
              <source src="./sounds/clap.wav" type="audio/wav" />
            </audio>
          </button>
          <button className="drum-pad" id="">
            W
          </button>
          <button className="drum-pad" id="">
            E
          </button>
          <button className="drum-pad" id="">
            A
          </button>
          <button className="drum-pad" id="">
            S
          </button>
          <button className="drum-pad" id="">
            D
          </button>
          <button className="drum-pad" id="">
            Z
          </button>
          <button className="drum-pad" id="">
            X
          </button>
          <button className="drum-pad" id="">
            C
  </button>
  </div>*/}
        <p id="display">{innerText}</p>
        <p>Volume bar</p>
        <p>Bottom text</p>
      </div>
    </div>
  );
}

export default App;
