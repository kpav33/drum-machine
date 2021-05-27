import React, { useState } from "react";

import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { withStyles } from "@material-ui/core/styles";

const RedSwitch = withStyles({
  switchBase: {
    color: "#FFFFFF",
    "&$checked": {
      color: "#ca3e47",
    },
    "&$checked + $track": {
      backgroundColor: "#ca3e47",
    },
  },
  checked: {},
  track: {},
})(Switch);

function Switches() {
  const [state, setState] = useState({
    powerCheck: true,
    soundsCheck: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  console.log(state);

  return (
    <div className="bottomBar">
      <FormControlLabel
        control={
          <RedSwitch
            checked={state.powerCheck}
            onChange={handleChange}
            name="powerCheck"
            inputProps={{ "aria-label": "power checkbox" }}
          />
        }
        label="Power"
      />
      <FormControlLabel
        control={
          <RedSwitch
            checked={state.soundsCheck}
            onChange={handleChange}
            name="soundsCheck"
            inputProps={{ "aria-label": "sounds checkbox" }}
          />
        }
        label="Guitar?"
        labelPlacement="start"
      />
    </div>
  );
}

export default Switches;
