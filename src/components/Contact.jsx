import React, {useState, useEffect} from 'react'

export default function Contact() {

    const [number, setNumber] = useState('')



    useEffect(() => {
        setNumber('1234567890')
        return () => {
            // cleanup
        }
    }, []) //empty = just in the first render 


    return (
        <div>
            <h1> Contact: {number} </h1>
        </div>
    )
}
