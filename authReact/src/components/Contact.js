import React, { useState, useEffect } from "react";

const Contact = () => {
const [number, setNumber] = useState(()=> "");

useEffect(() => {
  setNumber("0558745896");
  }, []);

  return (
    <div>
      <h1>Contact</h1>
      <p>{number}</p>
    </div>
  );
}
export default Contact