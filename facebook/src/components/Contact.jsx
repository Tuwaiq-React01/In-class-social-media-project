import React, { useEffect,useState } from 'react'
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'

export default function Contact() {
    const [number, setNumber] = useState("")
    useEffect(() => {
    setNumber("05012345678")
    }, [])


   function logout (){
        localStorage.clear()
    }
    return (
        <div>
                 <nav className = "navbar navbar-expand-lg navbar-light bg-light">
                 <ul class="navbar-nav">
                        <li class="nav-item ">
                        <Link className = "link" to='/'>Home</Link>
                        </li>

                        <li class="nav-item">
                        <Link  className = "link" to='/Contact'>Contact</Link>
                        </li>

                        <li class="nav-item">
                        <Link  className = "link" to='/logout' onClick={logout}>Logout</Link>
                        </li>
                        </ul>
         </nav>



    
           <h1> Contact </h1>
           <h1>
               {number}
           </h1>
        </div>
    )
}