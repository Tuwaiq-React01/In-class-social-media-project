import React, { useState } from 'react'
import Modal from 'react-modal'
import Post from './Post'

export default function Popup() {
    const [isOpen, setIsOpen] = useState(false)
    const [title, setTitle] = useState("")
    const [image, setImage] = useState("")
    const [postArray, setpost] = useState([])

    const popupShow = () => {
        setIsOpen(true)
    }

    const popupHide = () => {
        setIsOpen(false)
    }
    const handleTitle = e => {
        setTitle(e.target.value)
    }

    const handleImage = e => {
        setImage(e.target.value)
    }


    const addPost = () => {
        setIsOpen(false)
        const component = postArray
        component.push({ title: title, image: image })
        setpost(component)
    }

    return (
        <div>
            <button
                className="button"
                onClick={popupShow}>
                Add a post
            </button>
            {postArray.map((item, index) => (
                <Post key={index} title={item.title} img={item.image} />
            ))}
            <Modal
                isOpen={isOpen}
                ariaHideApp={false}
                onRequestClose={popupHide}
                contentLabel="Add a post"
            >
                <h1>What is your mind?</h1>
                <label>Enter the title</label>
                <input type="text" onChange={handleTitle}></input>
                <label>Enter the url</label>
                <input type="text" onChange={handleImage}></input>
                <button onClick={addPost}> Add </button>
            </Modal>

        </div>
    )
}
