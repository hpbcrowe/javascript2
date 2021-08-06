import React from 'react'

const Hello = () => {

    //This version returns JSX
    // return (
    //     <div className='dummyClass'>
    //         <h1> Hello Ben!!   </h1>
    //     </div>
    // )
    return React.createElement(
        //This is the component without JSX
        'div', 
        {id: 'hello', className: 'dummyClass'}, 
    React.createElement('h1', null, 'Hello Ben!   ' ))
}

export default Hello