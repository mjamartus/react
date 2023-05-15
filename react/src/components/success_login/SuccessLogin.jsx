import React from "react";
import './SuccessLogin.css'

const SuccessLogin = ({ onRouteChange }) => {
    return (
        <div className="cover">
            <h1>Login success</h1>
            <div className="logout-btn" onClick={() => onRouteChange('login')}>LOGOUT</div>
        </div>
    )
}

export default SuccessLogin