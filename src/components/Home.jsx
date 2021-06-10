import { Component } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";
import Post from './Post'
import Popup from './Popup'

export default class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            email: '',
            IMage: '',
            images: []
        }
    }

    logout = () => {
        localStorage.clear()
    }
    componentDidMount = () => {
        this.setState({ name: localStorage.getItem('name') })
        this.setState({ email: localStorage.getItem('email') })
        this.setState({ IMage: localStorage.getItem('IMage') })
        axios.get('https://dog.ceo/api/breeds/image/random/7')
            .then(res => {
                this.setState({ images: res.data.message })
            })
    }

    render() {
        return (
            <div>
                <nav>
                    <Link to='/' >Home </Link>
                    <br />
                    <Link to='/contact' >Contact </Link>
                    <br />
                    <Link to='/logout' onClick={this.logout}> logout </Link>
                </nav>
                <div>
                    <img src={this.state.IMage} alt="user"/>
                    <div>
                        {this.state.name}
                    </div>
                    <div>{this.state.email}</div>
                </div>
                <Popup></Popup>
                {this.state.images.map((img, index) => <Post key={index} title="this is a dog" img={img}></Post>)}
            </div>
        )
    }
}
