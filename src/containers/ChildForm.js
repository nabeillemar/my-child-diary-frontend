import React, { Component } from 'react'
import { connect } from 'react-redux'
import {addChildren} from '../actions/children'


class ChildForm extends Component {
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

   /* handleChange = (event) => {
        this.setState({
            child: {
                child_name: event.target.value,
                age: event.target.value, 
                allergies: event.target.value,
                guardian_name: event.target.value,
                home_address: event.target.value,
                phone_number: event.target.value
            },
        })

    }

    */

    /*
    handleSubmit = (event) => {
        event.preventDefault()
        //const child = {child_name: this.state.child_name, age: this.state.age, allergies: this.state.allergies, guardian_name: this.state.guardian_name, home_address: this.state.home_address, phone_number: this.state.phone_number}
        const child = Object.assign({}, this.state);
        this.props.addChildren(child);
        this.setState({
            child: {
                child_name: "",
                age: "", 
                allergies: "",
                guardian_name: "",
                home_address: "",
                phone_number: ""
            },
            loading: false 
        })
        debugger
    }
    */

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addChildren(this.state)
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
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Child Name: </label>
          <input type='text' placeholder="Child's Name" value={this.state.child_name} name="child_name" onChange={this.handleChange}/><br/>
          <br></br>
          <label>Child Age: </label>
          <input type='text' placeholder="Child's age" value={this.state.age} name="age" onChange={this.handleChange}/><br/>
          <br></br>
          <label>allergies: </label>
          <input type='text' placeholder="allergies" value={this.state.allergies} name="allergies" onChange={this.handleChange}/><br/>
          <br></br>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}




export default connect(null, {addChildren})(ChildForm)