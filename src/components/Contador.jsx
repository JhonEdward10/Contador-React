import React from "react";
import "../stylesheets/Contador.css"

const Counter = ({ numberClicks }) => {
    return(
        <div className="counter">
            {numberClicks}
        </div>
    );
}

export default Counter;