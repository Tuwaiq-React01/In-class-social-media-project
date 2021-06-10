import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Post from './Post'
import Popup from './Popup'


export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            email: "",
            picture: "",
            images: []
        }
    }
    componentDidMount = () => {
        this.setState({ name: localStorage.getItem("name") })
        this.setState({ email: localStorage.getItem("email") })
        this.setState({ picture: localStorage.getItem("picture") })

        axios.get("https://dog.ceo/api/breeds/image/random/7").then(Response => {
            this.setState({ images: Response.data.message })
        })
    }
    logout = () => {
        localStorage.clear()
    }

    render() {
        return (
            <div>

                <div className="pageHeader">
                    <nav>
                        <Link to="/">Home  |  </Link>
                        <Link to="/logout" onClick={this.logout}>LogOut  |  </Link>
                    </nav>
                    <img className="avatar" alt="avatar" src={this.state.picture} />
                    <h4>{this.state.name}</h4>
                    <h5>{this.state.email}</h5>
                </div>
                <Popup />
                {this.state.images.map((item, i) =>
                    (<Post key={i} title="this is title" img={item} />)
                )}
            </div>
        )
    }
}
