import React, {useState, useEffect} from 'react'

export default function Contact() {
    const[number, setNumber] = useState("")
    useEffect(() => {
      setNumber("4567890")
      
    }, []) //as first render
    return (
        <div>
           <h1>Contact</h1>
           <h1>{number}</h1>
        </div>
    )
}
