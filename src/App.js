import './App.css';
import { useState } from "react";

function Display({ display }) {
  return <div className="display">{display}</div>;
}

function Key({ label, onClick }) {
  return (
    <button className="key" onClick={onClick}>
      {label}
    </button>
  );
}

function App() {
  const [disp, setDisp] = useState("10 Things That Require Zero Talent");

  const points = [
    "Being On Time",
    "Making An Effort",
    "Being High Energy",
    "Having A Positive Attitude",
    "Being Passionate",
    "Using Good Body Language",
    "Being Coachable",
    "Doing A Little Extra",
    "Being Prepared",
    "Having A Strong Work Ethic",
  ];

  const keyClickHandler = (index) => {
    if (index === 'RESET') {
      setDisp("10 Things That Require Zero Talent");
    } else if (index === 'NAME') {
      setDisp("MERVIE V. ISIP");
    } else {
      setDisp(points[index]);
    }
  };

  return (
    <div className="App">
      <h1>MERVIE V. ISIP - IT3A</h1>
      <div className="Display">
        <Display display={disp} />
      </div>
      <div className="Buttons">
        {points.map((_, index) => (
          <Key key={index} label={index + 1} onClick={() => keyClickHandler(index)} />
        ))}
        <Key label={0} onClick={() => keyClickHandler(9)} />
        <Key label={"RESET"} onClick={() => keyClickHandler('RESET')} />
        <Key label={"NAME"} onClick={() => keyClickHandler('NAME')} />
      </div>
    </div>
  );
}

export default App;
