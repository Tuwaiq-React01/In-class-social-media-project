import React, { useState, useEffect } from "react";

export default function Contact() {
  const [number, setNumber] = useState("");

  useEffect(() => {
    setNumber("0550033221");
  }, []);

  return (
    <div>
      <h1>Contact</h1>

      <p>{number}</p>
    </div>
  );
}
