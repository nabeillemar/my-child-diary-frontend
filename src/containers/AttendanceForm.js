import React, { Component } from 'react'
import { connect } from 'react-redux'
import {addAttendances} from '../actions/attendances'
import { getChildren } from '../actions/children'


class AttendanceForm extends Component {
    state = {
            date: "",
            check_in: "", 
            check_out: "",
            lunch: "",
            snack: "",
            bathroom: "",
            child_id: "",
            loading: false 
    }

    handleChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        })
      }

      handleSubmit = (event) => {
        event.preventDefault()
        this.props.addAttendances(this.state)
        this.setState({
            date: "",
            check_in: "", 
            check_out: "",
            lunch: "",
            snack: "",
            bathroom: "",
            child_id: "",
            loading: false 
        })
      }

      componentDidMount(){
        console.log("calls on GetChildren")
        this.props.getChildren()
    }


  render() {
    
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Attendance Date: </label>
          <input type='text' placeholder="Attendance's Date" value={this.state.date} name="date" onChange={this.handleChange}/><br/>
          <br></br>
          <label>Attendance check in: </label>
          <input type='text' placeholder="check in time" value={this.state.check_in} name="check_in" onChange={this.handleChange}/><br/>
          <br></br>
          <label>check_out: </label>
          <input type='text' placeholder="check out time" value={this.state.check_out} name="check_out" onChange={this.handleChange}/><br/>
          <br></br>
          <label> Child Name
          <select value={this.state.child_id} onChange={this.handleChange}>
            {this.props.children.map((child, i) => (
            <option key={i} value={child.id}>{child.attributes.child_name}</option>
            ))}
          </select>
          </label>
          <br></br>
          <br></br>
          <input type="submit"/>
        </form>
      </div>
    )

  }
}



const mapStateToProps = state => {
  debugger
  console.log("maptoStateProp in attendance form")
  //debugger
  return{
    children: state.childReducer.children, //should this be children.data, data does come across but it should be state.childReducer.children.data
    loading: state.childReducer.loading
  }
}


export default connect(mapStateToProps, {addAttendances, getChildren})(AttendanceForm)

// do a mapSTATEtoProps... map children array from redux state to prop to this form