import React from "react";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import VolumeDown from "@material-ui/icons/VolumeDown";
import VolumeUp from "@material-ui/icons/VolumeUp";
// import { createMuiTheme } from "@material-ui/core/styles";
// import { ThemeProvider } from "@material-ui/styles";

/*const muiTheme = createMuiTheme({
  overrides: {
    MuiSlider: {
      thumb: {
        color: "#ca3e47",
        boxShadow: "#ca3e47",
        "&:focus, &:hover, &$active": {
          boxShadow: "rgba(202, 62, 71, 0.2) 0px 0px 0px 12px",
        },
      },
      track: {
        color: "#ca3e47",
      },
      rail: {
        color: "black",
      },
    },
  },
});
<ThemeProvider theme={muiTheme}>
*/

function SliderVolume({ setValue, innerText, value, disabled }) {
  const handleChange = (event, newValue) => {
    setValue(newValue);
    innerText(`Volume: ${Math.round(newValue * 100)}`);
  };

  return (
    <div className="sliderVolume">
      <Typography id="continuous-slider" gutterBottom>
        Volume
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <VolumeDown />
        </Grid>
        <Grid item xs>
          {/*<ThemeProvider>*/}
          <Slider
            value={value}
            onChange={handleChange}
            aria-labelledby="continuous-slider"
            min={0}
            max={1}
            step={0.01}
            disabled={disabled}
          />
          {/*</ThemeProvider>*/}
        </Grid>
        <Grid item>
          <VolumeUp />
        </Grid>
      </Grid>
    </div>
  );
}

export default SliderVolume;
