import React, {useState, useEffect} from 'react'
import Modal from 'react-modal'
import Post from'./Post'

export default function Popup() {

    const [isOpen, setOpen] = useState(false)
    const [title, setTitle] = useState("")
    const [image, setImage] = useState("")
    const [postArray, setpost] = useState([])

    const popupView = () => {
        setOpen(true)
    }

    const popupHide = () => {
        setOpen(false)
    }

    const handleTitle= e => {
        setTitle(e.target.value)
      
    }
    const handleImage= e => {
        setImage(e.target.value)
      
    }

    const addPost = () =>{
        setOpen(false)
        const component = postArray
        component.push({title : title, image: image})
        setpost(component)

    }
    //tag Model have isOpen, ..... (between{} my own state)
    return (
        <div>
            <button 
            className="button"
            onClick={popupView}
            >Add a post </button>
            {postArray.map((item, index)=> (
                    <Post key={index} title={item.title} img={item.image}/>
            ))}
            <Modal
                className="modal"
                  isOpen= {isOpen}
                  ariaHideApp={false}
                  onRequestClose={popupHide}
                  contactLable="Add a post"
            
            > 
            <h1>What is in your mind???</h1>
            <label >Enter the Title</label>
            <input type = "text" onChange = {handleTitle}></input>
            <label >Enter the Image url</label>
            <input type = "text" onChange = {handleImage}></input>
          <button onClick={addPost}>Add</button>

            </Modal>
        </div>
    )
}
