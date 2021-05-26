import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import VolumeDown from "@material-ui/icons/VolumeDown";
import VolumeUp from "@material-ui/icons/VolumeUp";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

const muiTheme = createMuiTheme({
  overrides: {
    MuiSlider: {
      thumb: {
        color: "#ca3e47",
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

const useStyles = makeStyles({
  root: {
    width: 200,
  },
});

function SliderVolume(props) {
  const classes = useStyles();

  const handleChange = (event, newValue) => {
    props.setValue(newValue);
    props.innerText(`Volume: ${Math.round(newValue * 100)}`);
  };

  return (
    <div className="sliderVolume">
      <Typography id="continuous-slider" gutterBottom>
        Volume
      </Typography>
      <Grid container spacing={2}>
        <Grid item>
          <VolumeDown />
        </Grid>
        <Grid item xs>
          <ThemeProvider theme={muiTheme}>
            <Slider
              value={props.value}
              onChange={handleChange}
              aria-labelledby="continuous-slider"
              min={0}
              max={1}
              step={0.01}
            />
          </ThemeProvider>
        </Grid>
        <Grid item>
          <VolumeUp />
        </Grid>
      </Grid>
    </div>
  );
}

export default SliderVolume;
