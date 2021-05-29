import React from "react";

import { FaDrum } from "react-icons/fa";
import { CgPiano } from "react-icons/cg";

// CgPiano

function Title({ changeSounds }) {
  return (
    <div className="title">
      {changeSounds ? <CgPiano size={32} /> : <FaDrum size={32} />}
      <h1>{changeSounds ? "Piano" : "Drum"} Machine</h1>
    </div>
  );
}

export default Title;
