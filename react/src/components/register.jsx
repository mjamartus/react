import React from "react";
import "./register.css"

const Register = () => {
    return (
        <div className="cover">
            <h1>Register</h1>
            <input type="text" placeholder="username" />
            <input type="text" placeholder="password" />
            <div className="login-btn">REGISTER</div>
        </div>
    )
}

export default Register
