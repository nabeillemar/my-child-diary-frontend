import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getAttendances, deleteAttendance } from '../actions/attendances'
import AttendanceContainer from '../containers/AttendanceContainer';
import AttendanceForm from '../containers/AttendanceForm';



class Attendance extends Component {
    componentDidMount(){
        console.log("calls on getAttendances")
        this.props.getAttendances()
    }

    handleOnClick = (event) => {
      this.props.deleteAttendance(event.target.id)
    }


  render() {
      const attendances = this.props.attendances.map((attendance, i) => { return < AttendanceContainer 
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
       child_name={attendance.attributes.child.child_name}
       handleClick={this.handleOnClick}/>
      })



    console.log("return in attendance.js")
    return (
      <div>
        <h1>Add Attendance Record Below</h1>
        <AttendanceForm/>
        <br></br>
        <h2>Attendances List</h2>
          {attendances}


      </div>
    )
  }
}


const mapStateToProps = state => {
    console.log("maptoStateProp in Attendance")
    return{
      attendances: state.attendanceReducer.attendances, 
      loading: state.attendanceReducer.loading
    }
  }

export default connect(mapStateToProps, { getAttendances, deleteAttendance })(Attendance);
