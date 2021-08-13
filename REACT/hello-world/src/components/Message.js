import React, { Component }  from 'react';


class Message extends Component {

constructor () {
    super()
    this.state = {
        message: 'Welcome Visitor'
    }
}

changeMessage() {
    this.setState({
        message: 'Thank You For Subscribing'
    })
}

render() {
    //this is JSX
    return  (
        <div>
             <h1> {this.state.message} </h1>   
             <button onClick={() => this.changeMessage()}>Subscribe</button>
        </div>
    )   
}

}

export default Message