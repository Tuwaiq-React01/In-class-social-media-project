import React, { Component } from 'react'
import axios from 'axios'
import Post from './Post'
import Popup from './Popup' 


export default class Home extends Component {
 constructor(props){
     super(props)
     this.state={
         name:"",
         email:"",
         Pictuer:"",
         images:[]

     }
 }

     componentDidMount=()=>{
         this.setState({ name: localStorage. getItem('name') })
         this.setState({ email: localStorage. getItem('email') })
         this.setState({ Pictuer: localStorage. getItem('Picture') })


         axios.get('https://dog.ceo/api/breeds/image/random/7')
         .then (respons => {
            console.log(respons)
           this.setState({images: respons.data.message})
         }) 
        
        } 
        logout=()=>{
            localStorage.clear()
        }
    render() {

        return (
            <div> 
            
                <h1>Home</h1>
                <div className="pageHeader">
                    <img  ClassName ="avater" alt=" avater"src={this.state.Pictuer}/>
                     <h4> {this. props.name}</h4>
                     <h5> {this.props.email}</h5>
                </div>
                <Popup/>
                 {this.state.images.map((item,index) => (
                <Post key={index} title="this is Dog" img ={item}> </Post>
                    ))}
            </div>
        )
    }
}
