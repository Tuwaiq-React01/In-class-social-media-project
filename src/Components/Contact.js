import React, { useEffect, useState } from "react";
import NavB from "./NavB";

export default function Contact() {
  const [number, setNumber] = useState("");

  useEffect(() => {
    setNumber("0567800818");
    return () => {};
  }, []);
  return (
    <div>
      <h1>Contact</h1>
      <h1>{number}</h1>
    </div>
  );
}
