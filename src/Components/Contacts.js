import React,{useState,useEffect} from 'react'

export default function Contacts() {
    const [number, setNumber] = useState("")

    useEffect(()=> {
        setNumber("022222222")

    },[])

    return (
        <div>
            <h1>Contact</h1>
            <h1>{number} </h1>

        </div>
    )
}
