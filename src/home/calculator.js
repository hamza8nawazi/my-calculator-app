import './calculator.css';

const Calculator = () => {
  return (
    <div className="calculator">
      <h2>Calculator</h2>
      <div className="display">
        <div className="input">input</div>
        <div className="result">result</div>
      </div>
      <div className="buttons">
        <button >1</button>
        <button >2</button>
        <button >3</button>
        <button >+</button>
        <button >4</button>
        <button >5</button>
        <button >6</button>
        <button >-</button>
        <button >7</button>
        <button >8</button>
        <button >9</button>
        <button >*</button>
        <button >C</button>
        <button >0</button>
        <button >=</button>
        <button>/</button>
      </div>
    </div>
  );
};

export default Calculator;
