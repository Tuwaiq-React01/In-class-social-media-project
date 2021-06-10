import React, { Component, useEffect ,useState} from 'react'


export default function Contact() {
    const[number,setNumber]= useState("")

    useEffect(()=>{
     setNumber("0537974429")
    },[])
    return (
        <div>
            <h1>Contact Page</h1>
            <h1>{number}</h1>

        </div>
    )
}
