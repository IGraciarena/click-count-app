import "../style-sheets/Button.css";

function Button({ text, isClickButton, clickHandler }) {
  return (
    <button
      className={isClickButton ? "click-button" : "reboot-button"}
      onClick={clickHandler}
    >
      {text}
    </button>
  );
}

export default Button;
