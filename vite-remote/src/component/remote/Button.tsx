import { useState } from "react";
import style from "./Button.module.css";

const Button = () => {
  const [counter, setCounter] = useState(0);
  const handleClick = () => {
    setCounter((counter) => counter + 1);
  };
  return (
    <button className={style.button} onClick={handleClick}>
      This is Button from Remote {counter}
    </button>
  );
};

export default Button;
