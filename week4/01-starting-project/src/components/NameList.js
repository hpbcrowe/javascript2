import React from 'react'
import Person from './Person';

function NameList() {
        //Changed from an array of names to object 
        //Added Person component to create the jsx to display list
        const names = ['Bruce', 'Clark', 'Diana'];
        const persons = [
            {
                id: 1,
                name: 'Bruce',
                age: 30,
                skill: 'React'
            },
            {
                id: 2,
                name: 'Clark',
                age: 25,
                skill: 'Angular'

            },
            {
                id: 3,
                name: 'Diana',
                age: 28,
                skill: 'Vue'

            }

        ]
        //Have to use a key or will get a warning in the browser, need a key to render efficiently
        //Keys help react identify which items have changed or have been added in a list
        //need a key when creating a list of elements
        //keys give elements a stable identity
        // const personList = persons.map(person => <Person key={person.id} person={person}/>)
    
        // return <div>{personList}</div>  
        const nameList = names.map((name, index) => <h2 key={index}>{index} {name}</h2>)
    
        return <div>{nameList}</div>  
}

export default NameList
