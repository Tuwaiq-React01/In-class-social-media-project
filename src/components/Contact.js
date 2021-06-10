import React, { useState, useEffect } from "react";

function Contact() {
    const [number, setNumber] = useState("");

    useEffect(() => {
        setNumber("236");
    }, []);

    return (
        <div>
            <h1>Contact</h1>
            <p>{number}</p>
        </div>
    );
}

export default Contact;
