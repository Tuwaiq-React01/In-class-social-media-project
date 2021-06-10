import React, { useState, useEffect } from 'react'
import Modal from 'react-modal'
import Post from './Post'
export default function Popup() {
    const [isOpen, setIsOpen] = useState(false)
    const [title, setTitle] = useState("")
    const [image, setImage] = useState("")
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
    const handleChangeImage = (e) => {
        setImage(e.target.value)
    }
    const addPost=(e)=>{
        setIsOpen(false)
        const componant = postArray
        componant.push({title: title, image:image})
        setPost(componant)
    }
    return (
        <div>
            <button
                className="button"
                onClick={popUpShow}
            >Add a post</button>
            {postArray.map((item ,index) => (
                <Post key={index} title={item.title} img={item.image}/>
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
                    <label>Enter the Image </label>
                    <input type="text" onChange={handleChangeImage}></input>
                    <button onClick={addPost}>Post</button>
                </Modal>
            </div>
        </div>
    )
            }