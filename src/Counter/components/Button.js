import React from "react";

function Button(props){
    return (
        <button onClick={props.handleClick} disabled={props.disabled}>{props.simbolo}</button>
    )
}

export default Button;