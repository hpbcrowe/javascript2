import React, { Component } from 'react'

 class UserGreeting extends Component {


    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: true
        }
    }
    
    render() {

        //Shortcircuit operator
        return this.state.isLoggedIn && <div>Welcome Ben</div>
        //Using ternary operator
        // return this.state.isLoggedIn ? (
        //     <div>Welcome Ben</div>
        //      ) : (
        //     <div>Welcome Guest</div>
        //     )        
        
        //using if statement and variable        
        // let message
        // if(this.state.isLoggedIn) {
        //     message = <div>Welcome Ben</div>
        // } else{
        //     message = <div>Welcome Guest</div>
        // }
                //if statement outside of return
        // return <div>{message}</div>
        // if (this.state.isLoggedIn){
        // return ( 
        //     <div> 
        //     Welcome Ben
        //     </div>
        // ) } else {
        //     return (
        //         <div>
        //             Welcome Guest
        //         </div>

        // )

        }
        //Both rendered at same time
        // return(
        //     <div>
        //        <div> Welcome Ben </div>
        //        <div>Welcome Guest</div>
        //     </div>
        // )
            
    }


export default UserGreeting
