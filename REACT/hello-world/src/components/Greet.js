import React from 'react'

// function Greet() {
//     return <h1>Hello Ben</h1> 
// }

const Greet = ({name, heroName, children}) => {
    //you can destructure the object in the arguments ({name, heroName}) 
    // or in the function body
    // const {name, heroName} = props
    return ( 
        <div>
        <h1>
            Hello {name} a.k.a {heroName}
        </h1>
        {children}
        </div>
    )
 } 

export default Greet