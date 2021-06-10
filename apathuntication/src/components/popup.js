import React, {useState} from 'react'
import Model from 'react-modal'
import Post from  './Post'

export default function Popup() {
    const[isOpen,setIsOpen] = useState(false)
    const[title,setTitle] = useState("")
    const[image,setImage] = useState("")
    const[postArray,setpost] = useState([])

    const popupShow = () => {
        setIsOpen(true)
    }

    const popupHide = () => {
        setIsOpen(false)
    }
    const handelTitle = e => {
        setTitle(e.target.value)
            }

//     const handelChange = e => {
// setTitle(e.target.value)
//     }
    const handelImage = e => {
        setImage(e.target.value)
    }
    const addPost = () =>{
        setIsOpen(false)
        const component = postArray
        component.push({title: title,image: image})
        setpost(component)

    }


    return (
        <div>

          <button
          className="button"
          onClick={popupShow}
          Add a post
          ></button>

          {postArray.map((item,index)=> (
              <Post key ={index} title= {item.title} img= {item.image}></Post>
             ))}
<Model
className="model"
    isOpen={isOpen}
    ariaHideApp={false}
    onRequestClose={popupHide}
    contentLable="Add a post">
<h1>What is in your mind?</h1>
        <label>Enter the title</label>
        <input type= "text" onChange={handelTitle}></input>
        <label>Enter the url</label>
        <input type= "text" onChange={handelImage}></input>
        <button OnClick={addPost}>Add</button>


</Model>
            
          </div>
    )
}
