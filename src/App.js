import './App.css';
import { useState } from "react";

function Display({ display }) {
  return <>{display}</>;
}

function Key({ label, onClick }) {
  return (
    <button onClick={onClick}>
      {label}
    </button>
  );
}

function App() {
  const [disp, setDisp] = useState(0);
  const [num1, setNum1] = useState(null);
  const [num2, setNum2] = useState(null);
  const [op, setOp] = useState(null);

  const numClickHandler = (e) => {
    const value = e.target.innerHTML;
    if (op === null) {
      setNum1(num1 === null ? value : num1 + value);
      setDisp(num1 === null ? value : num1 + value);
    } else {
      setNum2(num2 === null ? value : num2 + value);
      setDisp(num2 === null ? value : num2 + value);
    }
  };

  const opClickHandler = (e) => {
    const value = e.target.innerHTML;
    setOp(value);
    setDisp(value);
  };

  const eqClickHandler = () => {
    if (num1 !== null && num2 !== null && op !== null) {
      let result;
      switch (op) {
        case "+":
          result = parseFloat(num1) + parseFloat(num2);
          break;
        case "-":
          result = parseFloat(num1) - parseFloat(num2);
          break;
        case "*":
          result = parseFloat(num1) * parseFloat(num2);
          break;
        case "÷":
          result = parseFloat(num1) / parseFloat(num2);
          break;
        default:
          result = "ERROR";
      }
      setDisp(result);
      setNum1(result.toString());
      setNum2(null);
      setOp(null);
    }
  };

  const clrClickHandler = () => {
    setNum1(null);
    setNum2(null);
    setOp(null);
    setDisp(0);
  };

  return (
    <div className="App">
      <h1>Mervie V. Isip - IT3A</h1>
      <div className="Calc">
        <h2>Calculator</h2>
        <div className="Disp">
          <Display display={disp} />
        </div>
        <div className="Buttons">
          <Key label={7} onClick={numClickHandler} />
          <Key label={8} onClick={numClickHandler} />
          <Key label={9} onClick={numClickHandler} />
          <Key label={"÷"} onClick={opClickHandler} />
          <Key label={4} onClick={numClickHandler} />
          <Key label={5} onClick={numClickHandler} />
          <Key label={6} onClick={numClickHandler} />
          <Key label={"*"} onClick={opClickHandler} />
          <Key label={1} onClick={numClickHandler} />
          <Key label={2} onClick={numClickHandler} />
          <Key label={3} onClick={numClickHandler} />
          <Key label={"-"} onClick={opClickHandler} />
          <Key label={"C"} onClick={clrClickHandler} />
          <Key label={0} onClick={numClickHandler} />
          <Key label={"="} onClick={eqClickHandler} />
          <Key label={"+"} onClick={opClickHandler} />
        </div>
      </div>
    </div>
  );
}

export default App;
