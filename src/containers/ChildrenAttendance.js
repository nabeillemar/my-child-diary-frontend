import React, { Component } from 'react'

// this is the meals inside the given category 
// a view page of 1 given category 
//This gets called by the component Category.js becuase of its link and because we said in App.js that path='/categories/:id' is equal to component={CategoryMeals} so that is why this gets activated with the props included. 
// same process for IngredientMeals 

// after the click it goes here and renders all the meals for that meal, Meal Container gets actived here 

class ChildrenAttendance extends Component {
    render() {

        return (
            <div>
                <h2>The Meals With {this.props.match.params.id.split("_").join(" ")}</h2>

                {console.log(this.props.match.params.id.split("_").join(" "))}
            </div>
        )
    }
}

export default ChildrenAttendance