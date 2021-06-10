import React, { useState } from 'react'
import Modal from 'react-modal'; 
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
    const handleTitle = e =>
    {
        setTitle(e.target.value)
    }
    const handleImage=e =>
    {
        setImage(e.target.value)
    }
    const addPost = () =>
    {
        setIsOpen(false)
        const component= postArray
        component.push({title : title , image : image})
        setPost(component)
    }
    return (
        <div>
            <button className="button" onClick={showPopup}>add a post</button>

            {postArray.map( (item , i)=>
            (
                <Post key={i} title={item.title} img={item.image} />
            ) )}
            
            <Modal 
            isOpen={isOpen} 
            contentLabel="add a post" 
            onRequestClose={hidePopup}>

                <label>enter title</label>
                <input type="text" onChange={handleTitle}></input>

                <label>enter url</label>
                <input type="text" onChange={handleImage}></input>
                <button onClick={addPost}>Add</button>
            </Modal>
        </div>
    )
}
