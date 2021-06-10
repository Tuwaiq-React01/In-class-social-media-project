import React, { useState, useEffect } from 'react'

export default function Contact() {
    const [number, setNumber] = useState("") //initial value

    useEffect(() => {
        setNumber("053434412")
    }, [])

    return (
        <div>
            <h1>Contact</h1>
            <h1>{number}</h1>
        </div>
    )
}
