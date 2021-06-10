import React, {Component} from 'react'
import FacebookLogin from 'react-facebook-login'
import './App.css'
import Form from "./Form";
import Home from "./Home";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            picture: "",
            token: ""
        };
    }

    componentDidMount() {
        if (localStorage.getItem("token")) {
            this.setState({
                name: localStorage.getItem("name"),
                email: localStorage.getItem("email"),
                picture: localStorage.getItem("pic"),
                token: localStorage.getItem("token")
            })
        }
    }

    componentDidUpdate() {
        if (this.state.token) {
            localStorage.setItem("token", this.state.token)
            localStorage.setItem("name", this.state.name)
            localStorage.setItem("email", this.state.email)
            localStorage.setItem("pic", this.state.picture)
        }
    }

    responseFacebook = (response) => {
        if (response.status !== "unknown") {
            this.setState({name: response.name})
            this.setState({email: response.email})
            this.setState({picture: response.picture.data.url})
            this.setState({token: response.accessToken})
        } else {
            console.log("you are not singned in");
        }
    }

    render() {
        return (
            <center>
                {this.state.token ? <Home/> :
                    <div>
                        <h1>Login</h1>
                        <Form label="Enter your username" type="text"/>
                        <Form label="Enter your password" type="password"/>
                        <h2>or login using Facebook</h2>
                        <FacebookLogin
                            appId="543406996820708"
                            autoLoad={false}
                            fields="name,email,picture"
                            callback={this.responseFacebook}/>
                    </div>}
            </center>
        )
    }
}