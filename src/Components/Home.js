import axios from "axios";
import React, { useState, useEffect } from "react";
import NavB from "./NavB";
import PopUp from "./PopUp";
import Post from "./Post";
export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [picture, setPicture] = useState("");

  const [images, setImages] = useState([]);

  useEffect(() => {
    setName(localStorage.getItem("name"));
    setEmail(localStorage.getItem("email"));
    setPicture(localStorage.getItem("picture"));
    axios.get("https://dog.ceo/api/breeds/image/random/20").then((res) => {
      console.log(res.data);
      setImages(res.data.message);
    });
    return () => {};
  }, []);
  return (
    <div className="home">
      <h1> Welcome {name}</h1>
      <PopUp />
      <div className="posts">
        {images.map((img, index) => (
          <Post img={img} key={index} title="Pet's Name" />
        ))}
      </div>
    </div>
  );
}
