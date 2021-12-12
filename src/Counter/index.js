import React, {useState} from "react";
import Number from './components/Number';
import Button from './components/Button';

function CounterContainer(props){

    const [count, setCount] = useState(0)
    const [message, setMessage] = useState(false)
    const disabled = count <= 0

    function handleClickMas()
    {
        setCount(count+1)
        setMessage(false)
    }

    function handleClickMenos()
    {
        setCount(count-1)
        if (count === 1){
            setMessage(true)
        }
    }

    return (
        <div className="container">
            <h1>{props.titulo}</h1>
            <Button handleClick={handleClickMas} simbolo={"+"} />
            <Number number={count}/>
            <Button handleClick={handleClickMenos}  simbolo={"-"} disabled={disabled} />
            { message && <p>El numero no puede ser menor a cero</p>}
        </div>
    )
}

export default CounterContainer;
