import { Component } from 'react'

export default class Post extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isPressed: false
        }
    }
    heartPressed = () => {
        this.setState({ isPressed: !this.state.isPressed })
    }
    render() {
        return (
            <div>
                <div className="card">
                    <img className="img" src={this.props.img} alt="post" />
                    <div className="card-body">
                        <h2>{this.props.title}</h2>
                        <p>
                            The domestic dog is a domesticated descendant of the wolf. 
                            The dog derived from an ancient, extinct wolf, 
                            and the modern grey wolf is the dog's nearest living relative. 
                            The dog was the first species to be domesticated, 
                            by hunter–gatherers over 15,000 years ago, before the development of agriculture.
                        </p>
                    </div>
                    <img
                        className="heart"
                        alt="heart"
                        src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Heart_coraz%C3%B3n.svg"
                        style={this.state.isPressed ? { opacity: 1 } : { opacity: 0.5 }}
                        onClick={this.heartPressed}
                    />
                </div>
            </div>
        )
    }
}