import React from "react";
import './SuccessRegister.css'

const SuccessRegister = ({ onRouteChange }) => {
    return (
        <div className="cover">
            <h1>Register success</h1>
            <div className="login-btn" onClick={() => onRouteChange('login')}>LOGIN</div>
        </div>
    )
}

export default SuccessRegister