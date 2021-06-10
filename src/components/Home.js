import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Popup from "./Popup";
import Post from "./Post";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            picture: "",
            images: [],
        };
    }

    componentDidMount = () => {
        this.setState({
            name: localStorage.getItem("name"),
            email: localStorage.getItem("email"),
            picture: localStorage.getItem("picture"),
        });

        axios.get("https://dog.ceo/api/breeds/image/random/7")
        .then((res) => {
            console.log(res.data.message);
            this.setState({ images: res.data.message });
        })
        .catch((err) => console.log(err));
    };

    logout = () => {
        localStorage.clear();
    };

    render() {
        return (
            <div>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/logout" onClick={this.logout}>
                        Logout
                    </Link>
                </nav>
                
                <center>
                    <div>
                        <h1>Home</h1>
                    </div>

                    <div className="posts">
                        <img src={this.state.picture} /> <p>Welcome {this.state.name}</p>
                    </div>

                    <Popup />
                    { this.state.images.map((image, index) => <Post key={index} title="Cute dog pic" img={image} />) }
                </center>
            </div>
        );
    }
}

export default Home;
