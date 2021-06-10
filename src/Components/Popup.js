import React, { useState } from 'react';
import Modal from 'react-modal';
import Post from './Post';
export default function Popup() {
    const [isOpen, setIsOpen] = useState(false)
    const [title, setTitle] = useState("")
    const [image, setImage] = useState("")
    const [postArray, setPost] = useState([])

    const popupShow = () => {
        setIsOpen(true)
    }
    const popupHide = () => {
        setIsOpen(false)
    }

    const handleTitle = event => {
        setTitle(event.target.value)
        console.log(event)
        console.log(event.target)
        console.log(event.target.value)

    }
    const handleURL = e => {
        setImage(e.target.value)
    }
    const addPost = () => {
        setIsOpen(false)
        const component = postArray
        component.push({ title: title, image: image })
        setPost(component)
    }
    return (
        <div>
            <button className="button"
                onClick={popupShow}> <h1>Add new post</h1></button>

            {postArray.map((item, i) => (
                <Post key={i} title={item.title} img={item.image} />
            ))}
            <Modal
                isOpen={isOpen}
                ariaHideApp={false}
                onRequestClose={popupHide}
                contentLabel="Add post">

                <label htmlFor="title">Post title:</label>
                <input type="text" name="title" onChange={handleTitle} ></input>
                <label htmlFor="url">Post content:</label>
                <input type="text" name="url" onChange={handleURL}></input>
                <button onClick={addPost}>Add the post</button>
            </Modal>
        </div>
    )
}
