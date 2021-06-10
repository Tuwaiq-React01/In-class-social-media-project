import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";
import Form from "./components/Form";
import { Link } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Contact from "./components/Contact";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            picture: "",
            token: "",
        };
    }

    responseFacebook = (response) => {
        if (response.status !== "unknown") {
            this.setState({
                name: response.name,
                email: response.email,
                picture: response.picture.data.url,
                token: response.accessToken,
            });
        }
    };

    componentDidMount = () => {
        if (localStorage.getItem("token")) {
            this.setState({
                name: localStorage.getItem("name"),
                email: localStorage.getItem("email"),
                picture: localStorage.getItem("picture"),
                token: localStorage.getItem("token"),
            });
        }
    };

    componentDidUpdate = () => {
        if (this.state.token) {
            localStorage.setItem("token", this.state.token);
            localStorage.setItem("name", this.state.name);
            localStorage.setItem("email", this.state.email);
            localStorage.setItem("picture", this.state.picture);
        }
    };

    render() {
        return (
        <div className="App">
            {this.state.token ?
            <Home />
            :
            <FacebookLogin
                appId="3889904517725278"
                autoLoad={false}
                fields="name,email,picture"
                callback={this.responseFacebook}
            />}
        </div>
        );
    }
}

export default App;
