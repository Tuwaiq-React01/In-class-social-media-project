import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Post from './Post'
import Popup from './Popup'
export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            email: "",
            pic: "",
            images: []
        }

    }
    componentDidMount = () => {
        this.setState({ name: localStorage.getItem('name') })
        this.setState({ email: localStorage.getItem('email') })
        this.setState({ pic: localStorage.getItem('picture') })
        axios.get('https://dog.ceo/api/breeds/image/random/7')
            .then(res => {
                //console.log(res)
                // console.log(res.data.message)
                this.setState({ images: res.data.message })
            })
    }
    logout = () => {
        localStorage.clear()
    }
    render() {
        return (
            <div>
                <nav>


                    <Link to="/" style={{ margin: "2rem" }}>Home</Link>


                    <Link to="/contact" style={{ margin: "2rem" }}>Contact</Link>

                    <Link to="/logout" style={{ margin: "2rem" }} onClick={this.logout}>Logout</Link>
                </nav>
                <div>
                    <img src={this.state.pic} style={{ margin: "2rem" }} alt="personal" />
                    <h1>{this.state.name}</h1>
                    <h1>{this.state.email}</h1>
                </div>
                <Popup />
                {this.state.images.map((item, index) => (
                    <Post key={index} title="This is .. dog" img={item} />
                ))}
                Home
            </div >
        )
    }
}

