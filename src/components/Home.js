import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Post from './Post'
import PopUp from './Popup'

export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            picture: '',
            images: []
        }

    }

    componentDidMount = () => {
        this.setState({ name: localStorage.getItem('name') })
        this.setState({ email: localStorage.getItem('email') })
        this.setState({ picture: localStorage.getItem('picture') })

        axios.get('https://dog.ceo/api/breeds/image/random/7')
            .then(res => {
                console.log(res.data.message) // check API
                this.setState({ images: res.data.message })
            })
    }

    logout = () => {
        localStorage.clear()
    }

    render() {
        return (
            <div>

                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div class="container-fluid">
                        <div class="collapse navbar-collapse" id="navbarText">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/contact">Contact</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" to='/Logout' onClick={this.logout} >Logout</Link>
                                </li>
                            </ul>
                            <span className="navbar-text">
                                <div className="container">
                                    <img src={this.state.picture} />
                                    <h4>{this.state.name}</h4>
                                    <h5>{this.state.email}</h5>
                                </div>
                            </span>
                        </div>
                    </div>
                </nav>

                <PopUp />
                <hr />

                {this.state.images.map((item, index) =>
                    <Post key={index} img={item} title="This is my dog" />
                )}
            </div>
        )
    }
}
