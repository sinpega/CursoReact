import React from "react";

function Input(props){
    return (
        <input value={props.value} type="text" placeholder="Ingrese nueva tarea" onChange={props.handleChange}/>
    )
}

export default Input;