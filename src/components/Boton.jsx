import React from "react";
import "../stylesheets/Boton.css"

const Button = ({ text, isButtonClick, handleClick }) => {
  return(
    <button className={isButtonClick ? "button-click" : "button-reset"} onClick={handleClick}>
      {text}
    </button>
  )
}

export default Button;