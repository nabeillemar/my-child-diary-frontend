import React from 'react'

const AttendanceContainer = (props) => {
    //debugger

    return (
        <div class="row">
            <div class="column">
            <br></br>
                <div class="card">
                    <h3>Date: {props.date}</h3> 
                    Child's Name: {props.child_name}
                    <br></br>
                    <br></br>
                    Check In Time: {props.check_in}
                    <br></br>
                    <br></br>
                    Check Out Time: {props.check_out}
                    <br></br>
                    <br></br>
                    Lunch: {props.lunch}
                    <br></br>
                    <br></br>
                    Snack: {props.snack}
                    <br></br>
                    <br></br>
                    Bathroom: {props.bathroom}
                    <br></br>
                    <br></br>
                    Day Summary: {props.day_summary}

                </div>
            </div>
        </div>
    )
}

export default AttendanceContainer

//  <button onClick={props.handleClick} id={props.id} class="deleteAttendance"> Delete </button>