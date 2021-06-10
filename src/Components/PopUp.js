import React, { useState } from "react";
import Modal from "react-modal";
import Post from "./Post";
export default function PopUp() {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [postArray, setPostArray] = useState([]);

  const openPopup = () => {
    setIsOpen(true);
  };

  const hidePopup = () => {
    setIsOpen(false);
  };

  const handelTitle = (event) => {
    setTitle(event.target.value);
  };
  const handelIMage = (event) => {
    setImage(event.target.value);
  };

  const addPost = () => {
    setIsOpen(false);
    const component = postArray;
    component.push({ title: title, image: image });
    setPostArray(component);
  };
  return (
    <div>
      <button className="popUp-button" onClick={openPopup}>
        Add post
      </button>

      {postArray.map((item, index) => (
        <Post key={index} img={item.image} title={item.title} />
      ))}
      <Modal
        className="modal"
        isOpen={isOpen}
        contentLabel="Add a post"
        onRequestClose={hidePopup}
        ariaHideApp={true}
      >
        <form>
          <div>
            <label>Title</label>
            <input onChange={handelTitle} />
          </div>
          <div>
            <label>Image URL</label>
            <input onChange={handelIMage} />
          </div>

          <button type="submit" onClick={addPost}>
            Add post
          </button>
        </form>
      </Modal>
    </div>
  );
}
