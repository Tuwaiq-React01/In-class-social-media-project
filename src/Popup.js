import React, {useEffect, useState} from 'react'
import Modal from 'react-modal'
import Post from './Post'

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

    const addPost = () => {
        setIsOpen(false)
        const component = postArray
        component.push({ title: title, image: image})
        setPost(component)
    }

    const handleTitle = (e) => {
        setTitle(e.target.value)
    }

    const handleImage = (e) => {
        setImage(e.target.value)
    }

    return (
        <div>
            {console.log("postArray")}
            { console.log(postArray)}
            <button className="button"
            onClick={popupShow}>Add a new post</button>  
            {postArray.map((item, index)=>{
                return <Post key={index} img={item.image} title={item.title} render={"popup"}></Post>
            })}

        <Modal className="Modal"
          isOpen={isOpen}
          ariaHideApp={false}
          onRequestClose={popupHide}
          contentLabel="Add a post">

              <label>Dog name</label>
              <input type="text" onChange={(e)=>handleTitle(e)}></input>

              <label>URL</label>
              <input type="text" onChange={(e)=>handleImage(e)}></input>

              <button onClick={addPost}>Add</button>
          </Modal>
        </div>
    )
}
