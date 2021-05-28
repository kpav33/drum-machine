import React from "react";

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

function Switches({ switches, handleChange }) {
  return (
    <div className="bottomBar">
      <FormControlLabel
        control={
          <RedSwitch
            checked={switches.powerCheck}
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
            checked={switches.soundsCheck}
            onChange={handleChange}
            name="soundsCheck"
            inputProps={{ "aria-label": "sounds checkbox" }}
            disabled={!switches.powerCheck}
          />
        }
        label="Piano"
        labelPlacement="start"
      />
    </div>
  );
}

export default Switches;
