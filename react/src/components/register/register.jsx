import React from "react";
import "./register.css"

class Register extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
    }

    onUsernameChange = (event) => {
        this.setState({ username: event.target.value })
    }

    onPasswordChange = (event) => {
        this.setState({ password: event.target.value })
    }

    onSummitRegister = () => {
        fetch('http://localhost:3000/register', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password
            })
        })
            .then(response => response.json())
            .then(user => {
                if (user) {
                    this.props.onRouteChange('successRegister')
                }
            })
    }

    render() {
        const { onRouteChange } = this.props
        return (
            <div className="cover">
                <h1>Register</h1>
                <input type="text" placeholder="username" onChange={this.onUsernameChange} />
                <input type="password" placeholder="password" onChange={this.onPasswordChange} />
                <div className="reg-btn" onClick={this.onSummitRegister}>REGISTER</div>
            </div>
        )
    }
}

export default Register
