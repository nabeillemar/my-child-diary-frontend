import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getAttendances } from '../actions/attendances'
import AttendanceContainer from '../containers/AttendanceContainer';
import AttendanceForm from '../containers/AttendanceForm';



class Attendance extends Component {
    componentDidMount(){
        console.log("calls on getAttendances")
        this.props.getAttendances()
    }

    handleOnClick = (event) => {
      this.props.deleteattendances(event.target.id)
    }


  render() {
      //debugger
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
        handleClick={this.handleOnClick}/>
      })


    //debugger
    console.log("return in attendance.js")
    return (
      <div>
        <h3>Add attendance Below</h3>
        <AttendanceForm/>
        <br></br>
        <h3>attendances List</h3>
          {attendances}
          {/*<ul>{this.props.loading ? <h3>Loading...</h3> : attendances}</ul>*/}

      </div>
    )
  }
}











const mapStateToProps = state => {
    //debugger
    console.log("maptoStateProp in Attendance")
    debugger
    return{
      attendances: state.attendanceReducer.attendances, //should this be attendances.data, data does come across but it should be state.attendanceReducer.attendances.data
      loading: state.attendanceReducer.loading
    }
  }

export default connect(mapStateToProps, { getAttendances })(Attendance);
