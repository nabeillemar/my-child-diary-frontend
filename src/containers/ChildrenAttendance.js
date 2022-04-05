import React, { Component } from 'react'
import  { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { getChildren } from '../actions/children'
import { getAttendances } from '../actions/attendances'
import Child from '../components/Child'
import ChildContainer from '../containers/ChildContainer';
import Childrendata  from '../containers/Childrendata'


// this is the meals inside the given category 
// a view page of 1 given category 
//This gets called by the component Category.js becuase of its link and because we said in App.js that path='/categories/:id' is equal to component={CategoryMeals} so that is why this gets activated with the props included. 
// same process for ChildrenAttendance 

// after the click it goes here and renders all the meals for that meal, Meal Container gets actived here 



  function ChildrenAttendance(props) {
      //debugger
     const { id } = useParams()
    // debugger
     //const child = Childrendata
     const child = props.children.filter(child => child.id === id)[0]
     //    debugger
     console.log(props.children.filter(child => child.id === id))
     const attendance = props.attendances.filter(attendance => attendance.child_id === id)[0]
     debugger
    
    return (
        <div>
        <p>id - {id}</p>
        <p>{child.attributes.child_name}</p>
        <p>{child.attributes.age}</p>

    </div>
    );
  }





  const mapStateToProps = state => {
    console.log("maptoStateProp in ChildrenAttendance")
    debugger
    return{
      children: state.childReducer.children, //should this be children.data, data does come across but it should be state.childReducer.children.data
      attendances: state.attendanceReducer.attendances,
    }
  }


export default connect(mapStateToProps, {getChildren, getAttendances})(ChildrenAttendance);




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
