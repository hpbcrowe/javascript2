import React, { Component } from 'react'

 class CodeUpdate extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             message: 'Click here to  modify the state.'
        }
       
    }

  

    clickHandler = () => {
        this.setState({
            message: 'The code has been updated.'
        })
    }
    
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
             
               <button onClick={this.clickHandler}>Click!</button> 
            </div>
        )
    }
}

export default CodeUpdate
