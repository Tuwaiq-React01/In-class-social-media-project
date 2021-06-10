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
            picture: "",
            Images: []
        }
    }

    componentDidMount = () => {
        this.setState({ name: localStorage.getItem('name') })
        this.setState({ email: localStorage.getItem('email') })
        this.setState({ picture: localStorage.getItem('picture') })
        axios.get('https://dog.ceo/api/breeds/image/random/7')
            .then(res => {
                this.setState({
                    Images: res.data.message
                })
            })
    }
    logout=()=>{
        localStorage.clear()
    }
    render() {
        return (
            <div>
                <nav>
                    <Link To="/">Home</Link>
                    <Link to= '/logout' onClick={this.logout}>Logout</Link>
                    <Link To="/contact">Contact</Link>
                </nav>
                Hello
                <div className="pageHeader">
                    <img className="avatar" src={this.state.picture} alt="avatar" />
                    <h4>{this.state.name}</h4>
                    <h5>{this.state.email}</h5>
                </div>
                {this.state.Images.map((item, index) =>
                    <Post key={index} title="Dog" img={item}></Post>
                )}

                <Popup/>
            </div>
        )
    }
}
