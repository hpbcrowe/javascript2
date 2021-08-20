import React from 'react'
import './myStyles.css';

function Stylesheet(props) {
    //conditional styling, channging styling based on
    //property passed into component
    //`${className} font-xl`} is how you apply multiple
    //classnames to your jsx for css
    let className = props.primary ? 'primary' : ''
    return (
        <div>
            <h1 className={`${className} font-xl`}>Stylesheets</h1>
        </div>
    )
}

export default Stylesheet
