import React ,{useState,useEffect}from 'react'

export default function Contact1() {
    const [number, setnumber] = useState("")
    useEffect(() => {
        setnumber("0553347769")
       
    }, [])
    return (
        <div>
            <h1>Contact</h1>
            <h1>{number}</h1>
        </div>
    )
}
