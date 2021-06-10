import React, {useState} from 'react';
import Modal from 'react-modal'
import './popup.css'
import Post from "./Post";

function Popup(props) {
    const [isOpen, setIsOpen] = useState(false)
    const [title, setTitle] = useState("")
    const [image, setImage] = useState("")
    const [postArray, setPost] = useState([])

    const popshow = () => {
        setIsOpen(true)
    }
    const pophide = () => {
        setIsOpen(false)
    }
    const handelchange = e => {
        setTitle(e.target.value)
    }
    const handelchangeurl = e => {
        setImage(e.target.value)
    }
    const addpost = () => {
        pophide()
        const comp = postArray
        comp.push({title:title,image:image})
        setPost(comp)
    }
    return (
        <div>
            <button onClick={popshow}>SHOW MODAL</button>
            {postArray.map((item,key)=>{
                return <Post key={key} title={item.title} img={item.image} />
            })}
            <Modal
                isOpen={isOpen}
                ariaHideApp={false}
                onRequestClose={pophide}
                contentLabel="Example Modal"
            >
                <div>
                    <label>Enter the title</label>
                    <input onChange={handelchange} type="text"/>
                    <label>Enter the url</label>
                    <input onChange={handelchangeurl} type="text"/>
                    <button onClick={addpost}>add</button>
                </div>
            </Modal>
        </div>
    )
}

export default Popup;