import React, {useState,useEffect} from 'react'
import Modal from 'react-modal'
import Post from './Post'

export default function Popup() {
    const[isOpen,setIsOpen]= useState(false)
    const[title,setTitle]= useState("")
    const[image,setImage]= useState("")
    const[postArray,setPost]= useState([])

    const popUpShow = () => {
        setIsOpen(true)
    }

    const popUpHide = () => {
        setIsOpen(false)
    }

    const handleTitle = e => {
        setTitle(e.target.value)
    }

    const handleImage = e => {
        setImage(e.target.value)
    }

    const addPost = () =>{
        setIsOpen(false)
        const com = postArray
        com.push({title : title, image: image})
        setPost(com)
    }
    return (
        <div>
            <button
            className="button"
            onClick={popUpShow}>Add a post
            </button>
{postArray.map((item,index) => (
    <Post key={index} title={item.title} img={item.image}/>
))}
            <Modal className="modal" isOpen={isOpen} contentLabel="Add a post"
            ariaHideApp={false} onRequestClose={popUpHide}>
            <h1>What's on your mind?</h1>
            <label>Enter the title</label>
            <input type="text" onChange={handleTitle}></input>
            <label>Enter the url</label>
            <input type="text"  onChange={handleImage}></input>
            <button className="button" onClick={addPost}>Add Dog</button>
        </Modal>
        </div>
        
    )
}
