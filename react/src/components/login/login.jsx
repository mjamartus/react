import React from "react";
import "./login.css"

const Login = ({ onRouteChange }) => {
    return (
        <div className="cover">
            <h1>Login</h1>
            <input type="text" placeholder="username" />
            <input type="password" placeholder="password" />
            <div className="login-btn" onClick={() => onRouteChange('successLogin')}>LOGIN</div>
            <div className="register-btn" onClick={() => onRouteChange('register')}>REGISTER</div>
        </div>
    )
}

export default Login
