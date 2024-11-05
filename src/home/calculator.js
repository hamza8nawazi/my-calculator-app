import React, { useState } from "react";
import "./calculator.css";

const Calculator = () => {
  const [input, setInput] = useState("");
  // const [result, setResult] = useState('');

  const addToInput = (value) => {
    setInput(input + value);
  };

  const clearAll = () => {
    setInput("");
    // setResult('');
  };

  return (
    <div className="calculator">
      <h2>Calculator</h2>
      <div className="display">
        <div className="input">{input}</div>
        <div className="result">result</div>
      </div>
      <div className="buttons">
        <button onClick={() => addToInput("1")}>1</button>
        <button onClick={() => addToInput("2")}>2</button>
        <button onClick={() => addToInput("3")}>3</button>
        <button onClick={() => addToInput("+")}>+</button>

        <button onClick={() => addToInput("4")}>4</button>
        <button onClick={() => addToInput("5")}>5</button>
        <button onClick={() => addToInput("6")}>6</button>
        <button onClick={() => addToInput("-")}>-</button>

        <button onClick={() => addToInput("7")}>7</button>
        <button onClick={() => addToInput("8")}>8</button>
        <button onClick={() => addToInput("9")}>9</button>
        <button onClick={() => addToInput("*")}>*</button>

        <button onClick={clearAll}>C</button>
        <button onClick={() => addToInput("0")}>0</button>
        <button>=</button>
        <button onClick={() => addToInput("/")}>/</button>
      </div>
    </div>
  );
};

export default Calculator;
