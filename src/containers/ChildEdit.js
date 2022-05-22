import { connect } from 'react-redux';
import { getChildren } from '../actions/children'
import React, { Component } from 'react'
import {editChildren} from '../actions/children'

class ChildEdit extends Component {

    componentDidMount(){

          console.log("calls on GetChildren, componentDIDMount")
          this.props.getChildren() 
      }


    state = {
        child_name: "",
        age: "", 
        allergies: "",
        guardian_name: "",
        home_address: "",
        phone_number: "",
        loading: false 
    }
  
    handleChange = (event) => {
      this.setState({
        [event.target.name]: event.target.value
      })
    }

   
  
    handleSubmit = (event) => {
      event.preventDefault()
      debugger
      debugger
      let child = {...this.state, id: this.props.children.id}
      debugger
      this.props.editChildren(child)
      debugger
      this.setState({
        child_name: "",
        age: "", 
        allergies: "",
        guardian_name: "",
        home_address: "",
        phone_number: "",
        loading: false 
      })
    }
  
    render() {
        
      return (
        <div id="childform">
        <h1>Add Child's Information Below</h1>
        <form onSubmit={this.handleSubmit}>
          <label>Child Name: </label>
          <input type='text' placeholder="Child's Name" value={this.state.child_name} name="child_name" onChange={this.handleChange}/><br/>
          <br></br>
          <label>Child Age: </label>
          <input type='text' placeholder="Child's age" value={this.state.age} name="age" onChange={this.handleChange}/><br/>
          <br></br>
          <label>Allergies: </label>
          <input type='text' placeholder="Child's allergies" value={this.state.allergies} name="allergies" onChange={this.handleChange}/><br/>
          <br></br>
          <label>Guardian Name: </label>
          <input type='text' placeholder="Child's guardian" value={this.state.guardian_name} name="guardian_name" onChange={this.handleChange}/><br/>
          <br></br>
          <label>Home Address: </label>
          <input type='text' placeholder="Home Address" value={this.state.home_address} name="home_address" onChange={this.handleChange}/><br/>
          <br></br>
          <label>Phone Number: </label>
          <input type='text' placeholder="Phone Number" value={this.state.phone_number} name="phone_number" onChange={this.handleChange}/><br/>
          <br></br>
          
          <input type="submit"/>
        </form>
      </div>
      )
    }
  }
  
  const mapStateToProps = state => {
    console.log("maptoStateProp in ChildrenAttendance")
    debugger
    return {
      children: state.childReducer.children, 
    }
  }
  
  
  export default connect(mapStateToProps, {getChildren, editChildren})(ChildEdit);

