import React, { useState } from "react";
import Modal from "react-modal";
import Post from "./Post";

export default function Popup() {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [image, setimage] = useState("");
  const [postArray, setPostArray] = useState([]);

  const ShowPopup = () => {
    setIsOpen(true);
  };

  const HidePopup = () => {
    setIsOpen(false);
  };

  const handlechange = (e) => {
    setTitle(e.target.value);
  };

  const handleimage = (e) => {
    setimage(e.target.value);
  };

  const addPost = () => {
    setIsOpen(false);
    const component = postArray
    component.push({title: title, image: image})
    setPostArray(component)
  }

  return (
    <div>
      <button className="button" onClick={ShowPopup}>
        SHOW
      </button>

        {postArray.map((item, i)=> {
            return(
                <Post key={i} image={item.image} title={item.title}/>
            )
        })}


      <Modal
        className="modal"
        isOpen={isOpen}
        ariaHideApp={false}
        onRequestClose={HidePopup}
        contentLabel="Add a post"
      >
        <label>Enter the title: </label>
        <input type="text" onChange={handlechange} />
        <label>Enter the url: </label>
        <input type="text" onChange={handleimage} />

        <button onClick={addPost}>POST</button>
      </Modal>
    </div>
  );
}
