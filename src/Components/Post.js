import React, { Component } from 'react'
import './post.css'


export default class Post extends Component {

    constructor(props){
        super(props);
        this.state={
            isPressed: false
        }
    }

    heartPressed=()=>{
        this.setState({isPressed: true});
    }
    render() {
        return (
           <div>
               
              
                <div className="card">
                    <img className="img" src={this.props.src} alt=""></img>
                    <div className="card-body">
                        <h2>{this.props.title}</h2>
                        <p>This photo was not taken long ago</p>
                    </div>

                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1200px-Heart_coraz%C3%B3n.svg.png"
                    style={this.state.isPressed? {opacity:1 }: {opacity:0.5}}
                    onClick={this.heartPressed} height="100px"/>

                </div>

            

           </div>
                
                        
                
           
        )
    }
}
