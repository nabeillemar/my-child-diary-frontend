import React from 'react'

const ChildContainer = (props) => {
    return (
        <div>
        <h3>Child Name: {props.child_name}</h3> 
        <li>age: {props.age}</li>
        <br></br>
        <li>allergies: {props.allergies}</li>
        <br/>
        <button onClick={props.handleClick} id={props.id}> Delete </button>
        </div>
    )
}

export default ChildContainer