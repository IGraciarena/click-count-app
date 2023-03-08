import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Counter from "./components/Counter";
import freeCodeCampLogo from "./images/freecodecamp-logo.png";

function App() {
  const [clickNumber, setClickNumber] = useState(0);

  const clickPlusOne = () => {
    setClickNumber(clickNumber + 1);
  };

  const rebootCounter = () => {
    setClickNumber(0);
  };

  return (
    <div className="App">
      <div className="freecodecamp-container-logo">
        <img
          className="freecodecamp-logo"
          src={freeCodeCampLogo}
          alt="FreeCodeCamp Logo"
        ></img>
      </div>
      <div className="main-container">
        <Counter clickNumber={clickNumber} />

        <div className="click-container">
          <Button
            text="Click"
            isClickButton={true}
            clickHandler={clickPlusOne}
          />
          <Button
            text="Reboot"
            isClickButton={false}
            clickHandler={rebootCounter}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
