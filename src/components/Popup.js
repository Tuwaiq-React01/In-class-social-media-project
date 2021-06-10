import React, { useState, useEffect } from 'react'
import Modal from 'react-modal'
import Post from './Post'

export default function Popup() {
    const [isOpen, setIsopen] = useState(false)
    const [Title, setTitle] = useState("")
    const [Image, setImage] = useState("")
    const [postArray, setPost] = useState([])

    const popUpShow = () => {
        setIsopen(true)
    }

    const popUphide = () => {
        setIsopen(false)
    }

    const handelChange = (e) => {
        setTitle(e.target.value)

    }

    const handleImage = (e) => {
        setImage(e.target.value)
    }

    const addPost = () => {
        // setPost({postArray: })
        setIsopen(false)
        const component = postArray
        component.push({ title: Title, Image: Image })
        setPost(component)
    }

    return (
        <div>
            <button
                className="btn btn-outline-success"
                onClick={popUpShow}
            > Add Post</button>
            {postArray.map((item, index) => (
                <Post img={item.Image} key={index} title={item.Title}></Post>
            ))}
            <Modal
                isOpen={isOpen}
                contentLabel="Add a post"
                ariaHideApp={false}
                onRequestClose={popUphide}>

                <label>Enter the title</label>
                <input type="text" onChange={handelChange} />
                <label>Enter the url</label>
                <input type="text" onChange={handleImage} />
                <button className="btn" onClick={addPost}>Add</button>
            </Modal>
        </div>
    )
}
