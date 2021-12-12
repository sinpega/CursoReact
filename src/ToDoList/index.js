import React, {useState} from "react";
import Button from "./components/Button";
import List from "./components/List";
import Input from "./components/Input";

function ToDoListContainer(props){

    const [task, setTask] = useState("")
    const [list, setList] = useState([])

    function handleChange(event)
    {
        setTask(event.target.value)  
    }

    function handleClick(event)
    {
        const listCopy = list.slice()
        listCopy.push(task);
        setList(listCopy) 

        setTask("")  
    }

    function handleDeleteClick(taskIndex)
    {
        const listFilter = list.filter((task, index) => index !== taskIndex)
        setList(listFilter) 
    }
    

    return (
        <div className="todolist-container">
            <h1>To do List</h1>
            <Input value={task} handleChange={handleChange} />
            <Button handleClick={handleClick} />
            <List list={list} handleDeleteClick={handleDeleteClick}/>
        </div>
    )
}

export default ToDoListContainer;
