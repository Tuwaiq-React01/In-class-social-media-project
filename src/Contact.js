import React, {useEffect, useState} from 'react'
import Navbar from './Navbar'

export default function Contact() {
    const [number, setNumber] = useState("")

    useEffect(()=>{
        setNumber("099999999")
    }, [])

    return (
        <div>
            <Navbar></Navbar>
            <h1>Contact</h1>
            <h1>{number}</h1> 
        </div>
    )
}
