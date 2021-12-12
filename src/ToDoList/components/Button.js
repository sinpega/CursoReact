import React from "react";

function Button(props){
    return (
        <button className="add-task" onClick={props.handleClick}>Add Task</button>
    )
}

export default Button;