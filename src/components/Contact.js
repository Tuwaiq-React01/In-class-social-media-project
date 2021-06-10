import React ,{useState, useEffect} from 'react'
import NavBa from './NavBa'
export default function Contact(props) {
    const [phone,setPhone] = useState("");
    const [github,setGithub] = useState("");

    useEffect(()=>{
        setPhone("055xxxxxxxxx")
        setGithub("@1Riyad")


    },[])
    return (
        <div>
            <NavBa myname={props.myname} mypicture={props.mypicture} logout={props.logout}/>
        <div className="body-background">

            <center>
            <img src="https://cdn.pixabay.com/photo/2020/06/08/22/50/dog-5276317_1280.png"></img>
            {/* <img src="https://www.cashadvance6online.com/data/archive/img/497147656.png"></img> */}
                <div className="board">
                    <h1>Contact</h1>
                    <p > phone:  {phone}</p>
                    <p> GitHub:  {github}</p>
                </div>
            </center>
        </div>
        </div>
    )
}
