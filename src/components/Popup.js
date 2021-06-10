import React ,{useState, useEffect} from 'react'
import Modal from 'react-modal'
// npm i react-model  #
import Post from './Post'
export default function Popup() {
    const [isOpen, setIsOpen]= useState(false);
    const [title, setTitle]= useState("");
    const [image, setImage]= useState("");
    const [postArray, setPostArray]= useState([]);

    const poppingUp=()=>{
        setIsOpen(true);
    }

    const poppingDown=()=>{
        setIsOpen(false);
    }

    const handleTitle = e=>{
        // console.log(e.target.value);
        setTitle(e.target.value);
    }

    const handleUrl = e=>{
        setImage(e.target.value);
    }

    const addPost = ()=>{
        setIsOpen(false);
        const comp = postArray
        comp.push({title:title, image:image})
        console.log("comp",comp)
        console.log("postArray",postArray)
        setPostArray(comp);
        // console.log(e.target.value);
    }

    return (
        <div>
            <button 
            className="button"
            onClick={poppingUp}>
            Add a post
            </button>
            {postArray.map((item,idex)=>(
                <Post key={idex} image={item.image} title={item.title}></Post>
            ))}
            <Modal
            className="modal"
            isOpen={isOpen}
            ariaHideApp={false}
            onRequestClose={poppingDown}
            contentLabel="Add a post"
            >
                <h1> what is in your mind? </h1>
                <label>Enter the title</label>
                <input type="text" onChange={handleTitle}></input>

                <label>Enter the url</label>
                <input type="text" onChange={handleUrl}></input>
                <button onClick={addPost}> post ! </button>
            </Modal>
        </div>
    )
}
