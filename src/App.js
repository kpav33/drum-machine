import "./styles.scss";

function App() {
  return (
    <div className="app">
      <div className="panel" id="drum-machine">
        <h1>Drum Machine</h1>
        <div className="buttonsPad">
          <button>1</button>
          <button>1</button>
          <button>1</button>
          <button>1</button>
          <button>1</button>
          <button>1</button>
          <button>1</button>
          <button>1</button>
          <button>1</button>
        </div>
        <p id="display">Display pad</p>
        <p>Volume bar</p>
        <p>Bottom text</p>
      </div>
    </div>
  );
}

export default App;
