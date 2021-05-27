import React, { useRef, useEffect } from "react";

function DrumPad(props) {
  const audioRef = useRef();

  function handleClick() {
    props.innerText(props.id);
    play();
  }

  function play() {
    if (audioRef.current) {
      audioRef.current.volume = props.value;
      audioRef.current.currentTime = 0;
      audioRef.current.pause();
      audioRef.current.load();
      // Fixes DOM Exception error that happens when you try to run the test suite for the project (https://developers.google.com/web/updates/2016/03/play-returns-promise)
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.then(() => {}).catch((err) => console.log(err));
      }
    }
  }

  function handleKeyDown(e) {
    // Added toUpperCase() to e.key to pass the project's tests, otherwise it is completely unnecessary
    if (e.key.toUpperCase() === props.keyValue) {
      props.innerText(props.id);
      // Search for a better solution
      document.getElementById(props.id).style.background = "#525252";
      setTimeout(() => {
        document.getElementById(props.id).style.background = "#ca3e47";
      }, 300);
      play();
    }
  }

  useEffect(() => {
    if (!props.disabled) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  return (
    <button
      className="drum-pad"
      id={props.id}
      onClick={handleClick}
      disabled={props.disabled}
    >
      {props.keyValue}
      <audio
        id={props.keyValue}
        src={props.src}
        className="clip"
        ref={audioRef}
      />
    </button>
  );
}

export default DrumPad;
