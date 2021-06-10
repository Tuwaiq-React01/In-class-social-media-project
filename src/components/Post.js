import React ,{useState, useEffect} from 'react'
import Popup from './Popup';
import '../stylee.css';

export default function Post(props) {
    const [isPressed, setIsPressed]=useState(false);

    const heartPressed = ()=>{
        setIsPressed(!isPressed)
    }
    return (
        <div>

        <div className="card">
                <div>
                <img src={props.image}></img>
                <h2 >{props.title}</h2>

                <p>{props.myemail}</p>
                </div>
                <img
                className="heart"
                alt="heart"
                src="https://images.vexels.com/media/users/3/202043/isolated/preview/e4a2dbb7073b759a06e89274a78e12d4-heart-dog-footprint-flat-by-vexels.png"
                style={isPressed?{opacity:1}:{opacity:0.3}}
                onClick={heartPressed}
                >
                </img>

        </div>
        </div>

    )
}
