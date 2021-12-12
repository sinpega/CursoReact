import React from "react";

function List(props){
    return (
        <ul>
            {props.list.map((ele,index) => <li key={index}>{ele} <button onClick={() => props.handleDeleteClick(index)}>delete</button></li>)}
        </ul>
    )
}

export default List;