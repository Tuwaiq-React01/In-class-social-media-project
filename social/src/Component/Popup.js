import React ,{ useState}from 'react'
import Post from './Post'

export default function Popup() {
    const[isOpen,SetIsOpen]=useState(false)
    const[title,Settitle]=useState("")
    const[image,Setimage]=useState("")
    const[PostArray,Setpost]=useState([])

    const PopupShow=()=>{
        SetIsOpen(true)
    }
    const PopupHide=()=>{
        SetIsOpen(false)
    }
     const HandelTitle= e =>
     {
         Settitle(e.target.value)
     }
     const Handelimage = e =>
     {
         Setimage(e.target.value)
     }
      const addpost = e =>
      {
          SetIsOpen(false)
          const Component= PostArray
          Component.push({title:title,image:image})
          Setpost(Component)

      }
    return (
        <div>
            <button 
            className="button"
            onClick ={PopupShow}
            >  Add post </button>
            <modal
             className="modal"
             isOpen={isOpen}
             ariHideApp={false}
             onRequestClose={PopupHide}
             contentLabel="Add a Post"
          
        />
            <label>Enter Title </label>
            <input  type="text"  onChange={HandelTitle}></input>
            <label>Enter url </label>
            <input  type="text"  onChange={Handelimage}></input>

            <button className="btn" onClick={addpost}> Add a post </button>

            { PostArray.map ((item,index) =>(
                <Post img ={item.Image}key={index} title={item.title}></Post>
            ))}
        </div>
    )
}
