import React, { Component }  from 'react';

class Welcome extends Component {
render() {
    const {name, heroName} = this.props
    //const {state1, state2} = this.state for destructuring state 
    //instead of props
    //this is JSX
    return     <h1>Welcome {name} a.k.a  {heroName}</h1>
    
}

}

export default Welcome