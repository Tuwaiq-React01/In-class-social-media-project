import React, {useState, useEffect} from 'react'

export default function Contact() {
    const [number, setNumber] = useState('')

    useEffect(() => {
        setNumber('0547572922')
    }, [])

    return (
        <div className="pageHeader">
            <h2>Contact</h2>
            <h4>{number}</h4>
        </div>
    )
}
