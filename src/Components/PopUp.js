import React, {useState} from 'react'
import Modal from 'react-modal'
import './PostStyle.css'
import Post from './Post'

export default function PopUp() {
    const[isOpen,setIsOpen]=useState(false)
    const[title,setTitle]=useState("")
    const[image,setImage]=useState("")
    const[postArray,setPost]=useState([])

    const popUp=()=> {
        setIsOpen(true)
    }
    const hideUp=()=> {
        setIsOpen(false)
    }
    const handelTitle=(e)=> {
        setTitle(e.target.value)
    }
    const handelImage=(e)=> {
        setImage(e.target.value)
    }
    const addPost=()=> {
        setIsOpen(false)
        const component = postArray
        component.push({title:title,image:image})
        setPost(component)
    }
    return (
        <div>
           <button className="button"
           onClick={popUp}
           >Add a Post
           </button> 
           {postArray.map((item,index) => {
               return <Post key={index} title={item.title} img={item.image}/>
           })}
        <Modal
        className="modal"
            //statr
          isOpen={isOpen}
          ariaHideApp={false}
          onRequestClose={hideUp}
          contentLabel="Add a post"
        >
            <h1>What is in your mind?</h1>
            <label>Enter the title</label>
            <input type="text" onChange={handelTitle}/>
            <label>Enter the url</label>
            <input type="text" onChange={handelImage}/>
            <button className="button" onClick={addPost}> Add</button>
        </Modal>
           
        </div>
    )
}
