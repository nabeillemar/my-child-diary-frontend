import React, { Component } from 'react'
import  { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { getChildren } from '../actions/children'
import Child from '../components/Child'
import ChildContainer from '../containers/ChildContainer';
import { Childrendata } from '../containers/Childrendata'


// this is the meals inside the given category 
// a view page of 1 given category 
//This gets called by the component Category.js becuase of its link and because we said in App.js that path='/categories/:id' is equal to component={CategoryMeals} so that is why this gets activated with the props included. 
// same process for ChildrenAttendance 

// after the click it goes here and renders all the meals for that meal, Meal Container gets actived here 



  function ChildrenAttendance(props) {
      //debugger
     const { id } = useParams()
     const child = Childrendata
    return (
        <ChildContainer id={props.id}/>
    );
  }

  export default ChildrenAttendance




/*
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

*/
