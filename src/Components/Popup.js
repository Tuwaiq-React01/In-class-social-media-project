import React, { useState } from 'react'
import Modal from 'react-modal'
import Post from './Post'



export default function Popup() {

    const [isOpen, setIsOpen] = useState(false)
    const [title, setTitle] = useState("")
    const [image, setImage] = useState("")
    const [postArray, setPostArray] = useState([])
    
    const popupShow= () => {
        setIsOpen(true)
    }

    const popupHide= () => {
        setIsOpen (false)
    }

    const handleChange =(e)=>{
        setTitle(e.target.value)
    }

    const handleImage =e=>{
        setImage(e.target.value)
    }
    const AddPost= () => {
        setIsOpen(false)
        const component = postArray
        component.push({title: title, src:image})
        setPostArray(component)
    }



    return (
        <div>
            <button className="button"
            onClick={popupShow}
            >Add a Post</button>

            {postArray.map((item ,index) => (
                <Post key={index} title={item.title} src={item.src}/>
            ))}
                
            <Modal
            className="modal"
                isOpen={isOpen}
                contentLabel=" Add a post"
                ariaHideApp={false}
                onRequestClose = {popupHide}
                  
        >
            <h1>What's on your mind</h1>
            <label>Enter the title</label>
            <input type="text" onChange={handleChange}></input>
            <label>Enter the url</label>
            <input type="text" onChange={handleImage}></input>
            <button onClick={AddPost}> Add </button>
        </Modal>




        </div>
    )
}
