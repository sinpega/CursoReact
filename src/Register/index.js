import React, {useState} from "react";
import axios from "axios";
import Form from "./components/Form";

function RegisterContainer(props){

    const [userData, setUserData] = useState({ username: "", email: "", password: ""})
    const disable = !userData.username.length && !userData.email.length && !userData.password.length 

    function handleOnChangeUsername(event)
    {
        setUserData({...userData, username: event.target.value})
    }

    function handleOnChangeEmail(event)
    {
        setUserData({...userData, email: event.target.value})
    }

    function handleOnChangePassword(event)
    {
        setUserData({...userData, password: event.target.value})
    }

    //function handleOnChange(event)
    //{
    //    setUserData({...userData, [event.target.name]: event.target.value})
    //}

    function handleSend(event)
    {
        event.preventDefault()

        axios({ url: "https://jsonplaceholder.typicode.com/todos", method : "POST"}, {data : userData})
        .then(response=> {
            console.log(response) 
            setUserData({ username: "", email: "", password: ""})
        }) 
        .catch(err=> console.log(err))

        console.log(userData)
    }

    return (

        <div className="register-container">
            <h1>Registro de Usuario</h1>
            <Form userData={userData} disable={disable}
                handleOnChangeUsername={handleOnChangeUsername} 
                handleOnChangeEmail={handleOnChangeEmail}
                handleOnChangePassword={handleOnChangePassword} 
                handleSend={handleSend}/>
        </div>
    )
}

export default RegisterContainer;
//Modulo 22