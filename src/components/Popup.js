import React, { useState } from "react";
import Modal from "react-modal";
import { Button, Form, Icon } from "semantic-ui-react";
import PostCard from "./PostCard";

const Popup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [posts, setPosts] = useState([]);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleImageChange = (e) => {
    setImage(e.target.value);
  };

  const addPost = (e) => {
    e.preventDefault();
    setPosts([{ title: title, image: image }, ...posts]);
    togglePopup();
  };

  return (
    <div>
      <div>
        <Button onClick={togglePopup} className="post-button">
          Add post
        </Button>
        <br />
        {posts.map((post, index) => {
          return <PostCard key={index} title={post.title} image={post.image} />;
        })}
      </div>
      <Modal
        isOpen={isOpen}
        ariaHideApp={false}
        onRequestClose={togglePopup}
        contentLabel="Example Modal"
      >
        <Icon name="window close" onClick={togglePopup} />
        <Form>
          <Form.Field>
            <label>Title</label>
            <input placeholder="title" onChange={handleTitleChange} />
          </Form.Field>
          <Form.Field>
            <label>Image url</label>
            <input placeholder="image url" onChange={handleImageChange} />
          </Form.Field>

          <Button type="submit" onClick={addPost}>
            Submit
          </Button>
        </Form>
      </Modal>
    </div>
  );
};

export default Popup;
