import React from 'react'

const DynamicProp = ({name}) => {
    //you can destructure the object in the arguments ({name, heroName}) 
    // or in the function body
    // const {name, heroName} = props
    return ( 
        <div>
        <h2>
         {name} , this is a dynamic prop.
        </h2>
        
        </div>
    )
 } 

export default DynamicProp