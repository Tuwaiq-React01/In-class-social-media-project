import React, { useState, useEffect } from 'react'

export default function Contact() {
    const [number, setNumber] = useState("")

    useEffect(() => {
        setNumber("0503664482")
    }, [])
    return (
        <div>
            <h1>Contact</h1>
            <h1>{number}</h1>
        </div>
    )
}
