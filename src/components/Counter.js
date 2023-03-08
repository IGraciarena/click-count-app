import "../style-sheets/Counter.css";

function Counter({ clickNumber }) {
  return <div className="counter">{clickNumber} </div>;
}

export default Counter;
