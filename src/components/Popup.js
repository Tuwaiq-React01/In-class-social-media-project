import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import Post from "./Post";
import './Custom.css';

function Popup() {
    const [isOpen, setIsOpen] = useState(false);
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [postArray, setPost] = useState([]);

    const popupShow = () => {
        setIsOpen(true);
    };
    const popupHide = () => {
        setIsOpen(false);
    };

    const handleTitle = (e) => {
        setTitle(e.target.value);
        console.log(e.target.value);
    };

    const handleImage = (e) => {
        setImage(e.target.value);
    };

    const addPost = () => {
        setIsOpen(false);
        const component = postArray;
        component.push({ title: title, image: image });
        setPost(component);
    };

    return (
        <div>
            <button className="button" onClick={popupShow}>Add a post</button>

            {postArray.map((item, index) => (
                <Post key={index} title={item.title} img={item.image} />
            ))}
            
            <Modal
                isOpen={isOpen}
                ariaHideApp={false}
                onRequestClose={popupHide}
                className="modal"
                contentLabel="Add a post"
            >
                <label>Enter the Title</label>
                <input type="text" onChange={(e) => handleTitle(e)} />
                <label>Enter the url</label>
                <input type="text" onChange={handleImage} />
                <button onClick={addPost}>Add Post</button>
            </Modal>
        </div>
    );
}

export default Popup;
