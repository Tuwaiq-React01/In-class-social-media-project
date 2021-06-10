import React, {useEffect, useState} from 'react';

function Contact(props) {
    const [number, setNumber] = useState("")

    useEffect(()=>{
        setNumber("05555555")
    },[])
    return (
        <div>
            <h1>contact</h1>
            {number}
        </div>
    );
}

export default Contact;