import React from "react";
import "./register.css"

const Register = ({ onRouteChange }) => {
    return (
        <div className="cover">
            <h1>Register</h1>
            <input type="text" placeholder="username" />
            <input type="password" placeholder="password" />
            <div className="reg-btn" onClick={() => onRouteChange('successRegister')}>REGISTER</div>
        </div>
    )
}

export default Register
