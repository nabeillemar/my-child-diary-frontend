import React from 'react'
import { Link } from 'react-router-dom'

const ChildContainer = (props) => {
    return (
        //<div class= "childCard">
        <div class="row">
            <div class="column">
            <br></br>
                <div class="card">
            {console.log("ChildContainer component is called")}
            <Link to={`/children/${props.id}`}>
            <button type="button" class="block">{props.child_name}</button>
            </Link>

            <Link to={`/children/${props.id}/edit`}>
            <button type="button">Edit</button>
            </Link>

            <button onClick={props.handleClick} id={props.id} class="deleteChild"> Delete </button>
               </div>
            </div>
        </div>

    )
}




//move this info to the Child.js and then make this for just the attributes 
//Call this in the ChildrenAttendnace 


//who needs state? 

export default ChildContainer

//this gets formated and sent back to the Child container 

/*
const ChildContainer = (props) => {
    return (
        <div>
        <h3>Child Name: {props.child_name}</h3> 
        <li>age: {props.age}</li>
        <br></br>
        <li>allergies: {props.allergies}</li>
        <br/>
        <button onClick={props.handleClick} id={props.id}> Delete </button>
        (<Link to={`/children/${props.id}`}>
        <button>{props.child_name}</button>
        </Link>)
        </div>

    )
}

export default ChildContainer


*/