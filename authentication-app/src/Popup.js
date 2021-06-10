import React ,{useState,useEffect} from 'react'
import Modal from 'react-modal'
import Post from './Post'
export default function Popup() {
    const [isOpen,setIsOpen] = useState(false)
    const [title,setTitle] = useState("")
    const [image,setImage] = useState("")
    const [postArray,setPostArray] = useState([])

    const popShow=()=>{
        setIsOpen(true)
    }
    const popHide=()=>{
        setIsOpen(false)
    }
    const handelTitle=e=>{
        setTitle(e.target.value);
    }
    const handelImage=e=>{
        setImage(e.target.value);
    }
    const addPost=()=>
    {
      setIsOpen(false)
      const compontent = postArray
      compontent.push({title : title , image : image})
      setPostArray(compontent)

    }
    return (
        <div>
            <button className="button" onClick={popShow}></button>
            <Modal
                isOpen={isOpen}
                ariaHideApp={false}
                onRequestClose={popHide}
                contentLabel="Add a post"
            >
                <h1>What is your mind?</h1>
                <label>Enter the title</label>
                <input type="text" onChange={handelTitle}></input>
                <label>Enter the url</label>
                <input type="text" onChange={handelImage}></input>
                <button onClick={addPost}> Add Post</button>
            </Modal>
        </div>
    )
}
