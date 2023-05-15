import React, { Component } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/login/login'
import Register from './components/register/register'
import SuccessLogin from './components/success_login/SuccessLogin'
import SuccessRegister from './components/success_register/SuccessRegister'

class App extends Component {
  constructor() {
    super()
    this.state = {
      route: 'login'
    }
  }

  onRouteChange = (route) => {
    this.setState({ route: route })
  }

  render() {
    return (
      <div className='page'>
        {this.state.route === 'login'
          ? <Login onRouteChange={this.onRouteChange} />
          : (
            this.state.route === 'register'
              ? <Register onRouteChange={this.onRouteChange} />
              : (
                this.state.route === 'successRegister'
                  ? <SuccessRegister onRouteChange={this.onRouteChange} />
                  : <SuccessLogin onRouteChange={this.onRouteChange} />
              )
          )
        }
      </div>
    )
  }
}

export default App
