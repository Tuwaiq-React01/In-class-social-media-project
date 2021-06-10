import React, {useEffect, useState} from 'react';
import axios from "axios";
import Post from "./Post"
import Popup from "./Popup"

function Home(props) {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [picture, setPicture] = useState("")
    const [images, setimages] = useState([])

    useEffect(() => {
        setName(localStorage.getItem('name'))
        setEmail(localStorage.getItem('email'))
        setPicture(localStorage.getItem('pic'))
        axios.get("https://dog.ceo/api/breeds/image/random/7").then(
            (res) => {
                setimages(res.data.message)
            })
    }, [])
    return (
        <div>
            <h1>Home</h1>
            <div>
                <img src={picture}/>
                <h3>{name}</h3>
                <h4>{email}</h4>
            </div>
            <Popup/>
            <div>
                {images.map((item, index) => {
                    return <Post img={item}/>
                })}
            </div>
        </div>
    );
}

export default Home;