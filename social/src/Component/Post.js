import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import '../App.css';

export default class Post extends Component {
     constructor(props){
         super(props)
         this.state={
             isPressed :false
         }
     }
      likePressed=()=>{
          this.setState({isPressed:true})
      }
    render() {
        return (
            <div>
                <Card>
  <Card.Body>
      
  <div className="Card grid-container   phote" >
                    <img  className="img "src={this.props.img}  alt= "post"
                    />
                    <div className="Card-Body">
                         <h2> {this.props.title}</h2>
                         <p>text</p>
                        </div>
                        <img 
                        className="heart"
                        alt="heart"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR-m1ea47bhWeOOIvTr8psCGmtiVDbe7JKgA&usqp=CAU"
                        style={this.state.isPressed?{opacity:1}:{opacity:0.5}}
                        onClick={this.likePressed}
                        />
                        </div>
  </Card.Body>
</Card>
               
                  
                </div>

        )
    }
}
