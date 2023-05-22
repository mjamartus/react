import React from "react";
import "./login.css"

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loginUsername: '',
            loginPassword: ''
        }
    }

    onUsernameChange = (event) => {
        this.setState({ loginUsername: event.target.value })
    }

    onPasswordChange = (event) => {
        this.setState({ loginPassword: event.target.value })
    }

    onSummitLogin = () => {
        fetch('http://localhost:3000/login', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: this.state.loginUsername,
                password: this.state.loginPassword
            })
        })
            .then(response => response.json())
            .then(data => {
                if (data === 'success') {
                    this.props.onRouteChange('successLogin')
                }
            })
    }

    render() {
        const { onRouteChange } = this.props
        return (
            <div className="cover">
                <h1>Login</h1>
                <input type="text" placeholder="username" onChange={this.onUsernameChange} />
                <input type="password" placeholder="password" onChange={this.onPasswordChange} />
                <div className="login-btn" onClick={this.onSummitLogin}>LOGIN</div>
                <div className="register-btn" onClick={() => onRouteChange('register')}>REGISTER</div>
            </div>
        )
    }
}

export default Login
