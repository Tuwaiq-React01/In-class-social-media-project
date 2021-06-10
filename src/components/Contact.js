import React, { useState, useEffect } from "react";

const Contact = () => {
  const [number, setNumber] = useState("");

  useEffect(() => {
    setNumber("6439683409");
  }, []);

  return (
    <div>
      <h1>Contact</h1>
      <h2>{number}</h2>
    </div>
  );
};

export default Contact;
