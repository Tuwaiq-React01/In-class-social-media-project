import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login';
import Home from './components/Home'
import Contact from './components/Contact'

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      name: "",
      email: "",
      picture: "",
      token: "",
      logged: true
    }
  }


  responseFacebook = (response) => {
    this.setState({ name: response.name })
    this.setState({ email: response.email })
    this.setState({ picture: response.picture.data.url })
    this.setState({ token: response.accessToken })
  }

  logg = () => {
    this.setState({ logged: !this.state.logged })
  }

  componentDidMount = () => {
    if (localStorage.getItem('token')) {
      this.setState({
        name: localStorage.getItem('name'),
        email: localStorage.getItem('email'),
        picture: localStorage.getItem('picture'),
        token: localStorage.getItem('token')
      })
    }
  }

  componentDidUpdate = () => {
    if (this.state.token) {
      localStorage.setItem('name', this.state.name)
      localStorage.setItem('email', this.state.email)
      localStorage.setItem('picture', this.state.picture)
      localStorage.setItem('token', this.state.token)
    }
  }

  render() {
    return (
      <center>

        {this.state.token ? <Home></Home> :
          <div>
            <h2>Login using Facebook</h2>
            <FacebookLogin
              appId="337869971034903"
              autoLoad={false}
              fields="name,email,picture"
              callback={this.responseFacebook} /></div>}
      </center>
    )
  }
}
