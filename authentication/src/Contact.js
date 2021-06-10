import React, { useEffect,useState } from 'react'
export default function Contact() {
    const [number, setNumber] = useState("")
    useEffect(() => {
    setNumber("777777777")
    }, [])
    return (
        <div>
           <h1> Contact </h1>
           <h1>
               {number}
           </h1>
        </div>
    )
}