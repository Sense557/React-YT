import React, { useState } from "react";
import styles from "./App.module.css";
import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";

function App() {

  const [calVal, setCalVal] = useState ("");

  const onButtonClick = (buttonText) => {
    if(buttonText == 'C') { 
      setCalVal("");
    }else if(buttonText == '=') {
      const result = eval(calVal);
      setCalVal(result);
    }else{
      let newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
    }
  }

  return (
    <div className={styles.calculator}>
      <Display displayVal={calVal} />
      <ButtonsContainer onButtonClick={onButtonClick} />
    </div>
  );
}

export default App;
