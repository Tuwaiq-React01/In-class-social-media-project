import React, {useState} from 'react';
import "./post.css"

function Post(props) {
    const [Ispress, setIspress] = useState(false)
    const hearclick = () => {
        setIspress(!Ispress)
    }
    return (
        <div>
            <div className="card">
                <img className="card-img-top" src={props.img} alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk
                        of the
                        card's content.</p>
                </div>
                <img
                    src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIa0akcCDYU-faZnZGMaAdk-Cbu0t5pD8VmrEpsx3IHV577uTn-rRlMXdH3vJoHeINZYk&usqp=CAU"}
                    onClick={hearclick}
                    style={Ispress ? {"opacity": 0.5} : {"opacity": 1}}
                />
            </div>
        </div>
    )
}
export default Post;