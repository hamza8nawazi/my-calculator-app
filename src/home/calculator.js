import React, { useState } from "react";
import "./calculator.css";
import Button from "../components/Button/button";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState('');

 
 const operators = ["+", "-", "*", "/"];

 
 const addToInput = (value) => {
   if (operators.includes(input.slice(-1)) && operators.includes(value)) {
     return;
   }
   setInput((prevInput) => prevInput + value);
 };
  const clearAll = () => {
    setInput("");
    setResult('');
  };

  const calculateResult = () => {
      const calculatedResult = eval(input);
      setResult(calculatedResult);
   
  };


  return (
    <div className="calculator">
      <h2>Calculator</h2>
      <div className="display">
        <div className="input">{input}</div>
        <div className="result">{result}</div>
      </div>
      <div className="buttons">
      <Button value="1" onClick={addToInput} />
      <Button value="2" onClick={addToInput} />
      <Button value="3" onClick={addToInput} />
      <Button value="+" onClick={addToInput} />

      <Button value="4" onClick={addToInput} />
      <Button value="5" onClick={addToInput} />
      <Button value="6" onClick={addToInput} />
      <Button value="-" onClick={addToInput} />

      <Button value="7" onClick={addToInput} />
      <Button value="8" onClick={addToInput} />
      <Button value="9" onClick={addToInput} />
      <Button value="*" onClick={addToInput} />

      <Button value="C" onClick={clearAll} />
      <Button value="0" onClick={addToInput} />
      <Button value="=" onClick={calculateResult} />
      <Button value="/" onClick={addToInput} />
      </div>
    </div>
  );
};

export default Calculator;
