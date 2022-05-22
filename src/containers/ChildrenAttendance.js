import React, { useState, useEffect } from 'react'
import  { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { getChildren } from '../actions/children'
import { getAttendances } from '../actions/attendances'
import AttendanceContainer from './AttendanceContainer';





  function ChildrenAttendance(props) {
    let [attendanceRecord, setattendanceRecord] = useState([])

     const { id } = useParams()

     const child = props.children.filter(child => child.id === id)[0]

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

    return{
      children: state.childReducer.children, 
      attendances: state.attendanceReducer.attendances,
    }
  }


export default connect(mapStateToProps, {getChildren, getAttendances})(ChildrenAttendance);



