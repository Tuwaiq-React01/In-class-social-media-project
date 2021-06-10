import React, { useState } from 'react'
import Modal from 'react-modal'
import Post from './Post'
export default function Popup() {
    const [isOpen, setIsOpen] = useState(false);
    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [postArray, setPostArray] = useState([]);

    const popupShow = () => {
        setIsOpen(true);
    }
    const popupHide = () => {
        setIsOpen(false);
    }
    const handleTitle = e => {
        setTitle(e.target.value)
    }
    const handleURL = e => {
        setImage(e.target.value)
    }
    const addPost = () => {
        setIsOpen(false);
        const component = postArray;
        component.push({title: title, image: image})
        setPostArray(component)
    }
    return (
        <div>
            <button
                className="button"
                onClick={popupShow}
            > Add post</button>
            {postArray.map((item, i)=>(
                <Post key={i} img={item.image} title={item.title}></Post>
            ))}
            <Modal
            className="modal"
                isOpen={isOpen}
                ariaHideApp={false}
                onRequestClose={popupHide}
                contentLabel="Add a post"
            >
                <label>Title</label>
                <input type="text" onChange={handleTitle}></input>
                <label>url</label>
                <input type="text" onChange={handleURL}></input>
                <input type="submit" value="add" onClick={addPost}/>
            </Modal>
        </div>
    )
}
