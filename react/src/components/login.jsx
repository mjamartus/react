import React from "react";
import "./login.css"

const Login = () => {
    return (
        <div className="cover">
            <h1>Login</h1>
            <input type="text" placeholder="username" />
            <input type="text" placeholder="password" />
            <div className="login-btn">LOGIN</div>
        </div>
    )
}

export default Login
