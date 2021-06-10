import React, { useState } from 'react'
import Modal from 'react-modal'
import Post from './Post'

export default function Popup() {
    const [isOpen, setIsOpen] = useState(false)
    const [title, setTitle] = useState("")
    const [image, setImage] = useState("")
    const [postArray, setPost] = useState([])

    const showPopup = () => {
        setIsOpen(true)
    }

    const hidePopup = () => {
        setIsOpen(false)
    }

    const handleTitle = (e) => {
        setTitle(e.target.value)
        //console.log(e.target.value)
    }

    const handleImage = (e) => {
        setImage(e.target.value)
        //console.log(e.target.value)
    }

    const addPost = () => {
        setIsOpen(false)
        const component = postArray
        component.push({ title: title, image: image })
        setPost(component)
    }
    return (
        <div>

            <button className="button" onClick={showPopup}> Add a post </button>

            {postArray.map((item, index) => (
                <Post key={index} title={item.title} img={item.image} />
            ))
            }

            <Modal
                className="modal"
                isOpen={isOpen}
                ariaHideApp={false}
                onRequestClose={hidePopup}
                contentLabel="Add a post">
            
                <label>Enter the title: </label>
                <input type="text" onChange={handleTitle}></input>
                <label>Enter the url: </label>
                <input type="text" onChange={handleImage}></input>
                <button onClick={addPost}> Add Post</button>
            </Modal>

        </div>
    )
}
