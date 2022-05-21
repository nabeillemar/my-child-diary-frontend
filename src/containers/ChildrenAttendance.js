import React, { useState, useEffect } from 'react'
import  { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { getChildren } from '../actions/children'
import { getAttendances } from '../actions/attendances'
//import Child from '../components/Child'
//import ChildContainer from '../containers/ChildContainer';
//import Childrendata  from '../containers/Childrendata'
import AttendanceContainer from './AttendanceContainer';


// this is the meals inside the given category 
// a view page of 1 given category 
//This gets called by the component Category.js becuase of its link and because we said in App.js that path='/categories/:id' is equal to component={CategoryMeals} so that is why this gets activated with the props included. 
// same process for ChildrenAttendance 

// after the click it goes here and renders all the meals for that meal, Meal Container gets actived here 



  function ChildrenAttendance(props) {
    let [attendanceRecord, setattendanceRecord] = useState([])
      //debugger
     const { id } = useParams()
    // debugger
     const child = props.children.filter(child => child.id === id)[0]
     //    debugger
     // we would copy this part but instead of looking for the children we would look for attendance date, compare the attendance date from the first page to the attendance page of the last page 
     //what would the url looklike 04152022 woulkd 
     console.log(props.children.filter(child => child.id === id))

     useEffect(() => {
      fetch("http://localhost:3001/api/v1/attendances")
      .then(response => response.json())
      .then(data => {
        debugger
        console.log(data)
        setattendanceRecord(data.data)})
    },[])

  const attendance = attendanceRecord.filter(attendance => attendance.attributes.child_id == id)


   
   const attendances = attendance.map((attendance, i) => { return < AttendanceContainer 
    key={i} 
    date={attendance.attributes.date} 
    check_in={attendance.attributes.check_in} 
    check_out={attendance.attributes.check_out} 
    lunch={attendance.attributes.lunch} 
    snack={attendance.attributes.snack} 
    bathroom={attendance.attributes.bathroom}
    day_summary={attendance.attributes.day_summary}
    id={attendance.id}
    child_id={attendance.attributes.child_id}
    child_name={attendance.attributes.child.child_name}/>
  })
    
    return (
        <div id="childspecific">
        <p>Child Name: {child.attributes.child_name}</p>
        <p>Child Age: {child.attributes.age}</p>
        <p>Child Allergies: {child.attributes.allergies}</p>
        <p>Child's Guardian: {child.attributes.guardian_name}</p>
        <p>Home Address: {child.attributes.home_address}</p>
        <p>Phone Number: {child.attributes.phone_number}</p>
        <br/>
        <h3>Attendances List</h3>
         {attendances}
       </div> 


    );
  }

  const mapStateToProps = state => {
    console.log("maptoStateProp in ChildrenAttendance")
    //debugger
    return{
      children: state.childReducer.children, //should this be children.data, data does come across but it should be state.childReducer.children.data
      attendances: state.attendanceReducer.attendances,
    }
  }


export default connect(mapStateToProps, {getChildren, getAttendances})(ChildrenAttendance);



