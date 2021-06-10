import React, { Component } from 'react'
import axios from 'axios'
import Post from './Post'
import Popup from './Popup'
import Navbar from './Navbar'

export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            picture: "",
            token: "",
            email: "",
            images: []
        }
    }

    componentDidMount = () => {
        this.setState({
            name: localStorage.getItem("name"),
            email: localStorage.getItem("email"),
            picture: localStorage.getItem("picture"),
            token: localStorage.getItem("token")
        })

        axios.get('https://dog.ceo/api/breeds/image/random/7')
            .then(res => {
                console.log(res.data.message)
                this.setState({ images: res.data.message })
            })
    }
    
    componentDidUpdate = () => {
        if (this.state.token) {
            localStorage.setItem("token", this.state.token)
            localStorage.setItem("name", this.state.token)
            localStorage.setItem("email", this.state.token)
            localStorage.setItem("picture", this.state.token)
        }

    }

    render() {
        return (
            <div>
                {/* <nav>
                    <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/contact">Cnotact</Link></li> 
                    <li><Link onClick={this.logout} to="/logout">Logout</Link></li> 
                    </ul>
                </nav>
                 */}

                <Navbar></Navbar>
                <Popup></Popup>
                <div>
                    {this.state.images ?
                        this.state.images.map((item, index) => (
                            <Post key={index} title="dog" img={item} render={"Home"}></Post>
                        ))
                        : null
                    }
                </div>
            </div>
        )
    }
}
