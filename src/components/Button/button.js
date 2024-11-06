import "./button.css"

const Button = ({ value, onClick }) => {
    return (
      <button onClick={() => onClick(value)}>
        {value}
      </button>
    );
  };
  
  export default Button;