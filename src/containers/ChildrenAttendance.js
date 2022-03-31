import React, { Component } from 'react'
import Child from '../components/Child'


// this is the meals inside the given category 
// a view page of 1 given category 
//This gets called by the component Category.js becuase of its link and because we said in App.js that path='/categories/:id' is equal to component={CategoryMeals} so that is why this gets activated with the props included. 
// same process for ChildrenAttendance 

// after the click it goes here and renders all the meals for that meal, Meal Container gets actived here 

class ChildrenAttendance extends Component {
    render() {
        debugger
        
        return (
            <div>
                <h2>The children With</h2>
                <h1>{this.props.name}</h1>


            </div>
        )
    }
}


export default ChildrenAttendance