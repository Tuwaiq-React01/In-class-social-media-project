import React, {useState , useEffect} from 'react'


export default function Contact() {
    const[number,setNumber] = useState("")

    useEffect(() => {
        setNumber("0533670996")
    },[])
    
    return (
        <div>
    
            <h1>Contact Page</h1>
            <p>number : {number}</p>
            
        </div>
    )
}
