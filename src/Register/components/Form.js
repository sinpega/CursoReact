import React from "react";

function Form(props){

    return (
    <form>
        <div className="form-group">
            <label htmlFor="username">User Name</label>
            <input type="text" value={props.userData.username} name="username" onChange={props.handleOnChangeUsername} className="form-control" id="username" placeholder="Enter username"/>
        </div>
        <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input type="email" value={props.userData.email} name="email" onChange={props.handleOnChangeEmail} className="form-control" id="email"  placeholder="Enter email"/>
        </div>
        <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" value={props.userData.password} name="password" onChange={props.handleOnChangePassword} className="form-control" id="password" placeholder="Password"/>
        </div>
        <button type="submit" disabled={props.disable} onClick={props.handleSend} className="btn btn-primary">Submit</button>
    </form>

    )
}

export default Form;