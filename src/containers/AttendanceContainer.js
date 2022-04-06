import React from 'react'

const AttendanceContainer = (props) => {
    //debugger
    return (
        <div>
        <h3>date: {props.date}</h3> 
        <br></br>
        <li>check in: {props.check_in}</li>
        <br></br>
        <li>Lunch: {props.lunch}</li>
        <br></br>
        <li>Snack: {props.snack}</li>
        <br></br>
        <li>Bathroom: {props.bathroom}</li>
        <br></br>
        <li>Day Summary: {props.day_summary}</li>

        <br></br>
        </div>
    )
}

export default AttendanceContainer

