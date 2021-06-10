import React from 'react'
import {Link} from 'react-router-dom'

export default function NavBa(props) {
    return (
        <div>
            <nev className="pageHeader">
            <Link to="/"> <h3 className="headerVar">Home</h3> </Link>
            <Link to="/contact"><h3 className="headerVar">Contact</h3></Link>
            <Link to="/logout" onClick={props.logout}><h3 className="headerVar">LogOut</h3></Link>
            <div id="divdd">
                <img className="avatar" src={props.mypicture}></img>
                <h5>{props.myname}</h5>
            </div>
            </nev>
        </div>
    )
}
