import './App.css';
import { useState } from "react";


function Display({ display }) {
  return (
    <>{display}</>
  );
}

function Key({ label, clickHandler }) {
  return <button onClick={clickHandler}>{label}</button>;
}


function App() {
  const [disp, setDisp] = useState("10 Things That Require Zero Talent");


  const keyOne = () => { setDisp("Being On Time"); };
  const keyTwo = () => { setDisp("Making An Effort"); };
  const keyThree = () => { setDisp("Being High Energy"); };
  const keyFour = () => { setDisp("Having A Positive Attitude"); };
  const keyFive = () => { setDisp("Being Passionate"); };
  const keySix = () => { setDisp("Using Good Body Language"); };
  const keySeven = () => { setDisp("Being Coachable"); };
  const keyEight = () => { setDisp("Doing A Little Extra"); };
  const keyNine = () => { setDisp("Being Prepared"); };
  const keyZero = () => { setDisp("Having A Strong Work Ethic"); };

 
  const clrClickHandler = (e) => {
    e.preventDefault();
    setDisp("10 Things That Require Zero Talent");
  };


  const nameClickHandler = () => {
    setDisp("Mervie V. Isip");
  };



  return (
    <div className="App">
      {}
      <div className="Header">
        MERVIE V. ISIP - IT3A
      </div>

      {}
      <div className="Calc">
        {}
        <div className="Disp">
          <Display display={disp} />
        </div>

        {}
        <div className="Buttons">
          <Key label={1} clickHandler={keyOne} />
          <Key label={2} clickHandler={keyTwo} />
          <Key label={3} clickHandler={keyThree} />
          <Key label={4} clickHandler={keyFour} />
          <Key label={5} clickHandler={keyFive} />
          <Key label={6} clickHandler={keySix} />
          <Key label={7} clickHandler={keySeven} />
          <Key label={8} clickHandler={keyEight} />
          <Key label={9} clickHandler={keyNine} />
          <Key label={0} clickHandler={keyZero} />
          <Key label={"RESET"} clickHandler={clrClickHandler} className="Clear" />
        </div>

        {}
        <div className="nameButton">
          <Key label={'ISIP'} clickHandler={nameClickHandler} />
        </div>
      </div>
    </div>
  );
}

export default App;



