import React, { useState, useEffect } from 'react'
import Modal from 'react-modal'
import Post from './Post'
export default function Popup() {
    const [isOpen, setIsOpen] = useState(false)
    const [title, setTitle] = useState("")
    const [src, setsrc] = useState("")
    const [postArray, setPost] = useState([])

    const popUpShow = () => {
        setIsOpen(true)
    }
    const popUpHidde = () => {
        setIsOpen(false)
    }
    const handleChange = (e) => {
        setTitle(e.target.value)
    }
    const handleChangesrc = (e) => {
        setsrc(e.target.value)
    }
    const addPost=(e)=>{
        setIsOpen(false)
        const co = postArray
        co.push({title: title, src:src})
        setPost(co)
    }

    return (
        <div>
            <button

                className="button"
                onClick={popUpShow}
            >Add a post</button>

            {postArray.map((item ,index) => (
                <Post key={index} title={item.title} src={item.src}/>
            ))}
            <div>
                <Modal
                    isOpen={isOpen}
                    ariaHideApp={false}
                    onRequestClose={popUpHidde}
                    contentLabel="Add a post"
                >
                    <label>Enter the title </label>
                    <input type="text" onChange={handleChange}></input>
                    <label>Enter the src </label>
                    <input type="text" onChange={handleChangesrc}></input>
                    <button onClick={addPost}>Post</button>
                </Modal>
            </div>
        </div>
    )
}
