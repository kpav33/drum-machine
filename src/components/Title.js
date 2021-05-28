import React from "react";

import { FaDrum } from "react-icons/fa";
import { CgPiano } from "react-icons/cg";

// CgPiano

function Title(props) {
  return (
    <div className="title">
      {props.changeSounds ? <CgPiano size={32} /> : <FaDrum size={32} />}
      <h1>{props.changeSounds ? "Piano" : "Drum"} Machine</h1>
    </div>
  );
}

export default Title;
