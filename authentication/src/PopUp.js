import React, {useState} from 'react'
import Modal from 'react-modal'
import Post from './Post'

export default function PopUp() {
    const [isOpen, setIsOpen] = useState(false)
    const [title, setTitle] = useState("")
    const [image, setImage] = useState("")
    const [postArray, setPost] = useState([])

    const showPopUp = () => {
        setIsOpen(true)
    }

    const hidePopUp = () => {
        setIsOpen(false)
    }

    const handleTitle = (e) => {
        setTitle(e.target.value)
    }
    const handleImage = (e) => {
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
            onClick={showPopUp}>
                Add a post!
            </button>

            {postArray.map( (item, index) => (
                <Post key={index} title={item.title} img={item.image} />
            ))}

            <Modal 
              className="modal"
              isOpen={isOpen}
              ariaHideApp={false}
              onRequestClose={hidePopUp}
              contentLabel="Add a post"
            > 
            <label>Enter the title: </label>
            <input type="text" onChange={handleTitle}></input>
            <label>Enter the url: </label>
            <input type="text" onChange={handleImage}></input>
            <button onClick={addPost}> Add Post</button>
            </Modal>

        </div>
    )
}
