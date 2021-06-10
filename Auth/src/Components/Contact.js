import React,{useState,useEffect} from 'react'

export default function Contact() {
    const [number,setNumber]= useState("")

    useEffect(() => {
        setNumber("0578899642")
    },[])
    return (
        <div>
            <h1>Contact</h1>
            <h2>{number}</h2>
        </div>
    )
}
